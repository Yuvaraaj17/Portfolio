import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

// ─── Shared Redis client ───
const redis =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
    ? Redis.fromEnv()
    : null;

// ─── Rate limiter (3 requests per 1 hour sliding window) ───
const ratelimit = redis
  ? new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(3, "1 h"),
      analytics: true,
    })
  : null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { emailId, name, message, website } = body;

    // ─── Honeypot check ───
    if (website) {
      return NextResponse.json(
        { message: "Submitted successfully" },
        { status: 200 }
      );
    }

    // ─── Basic validation ───
    if (!emailId || !message) {
      return NextResponse.json(
        { error: "Email and message are required." },
        { status: 400 }
      );
    }

    if (message.length > 2000) {
      return NextResponse.json(
        { error: "Message is too long (max 2000 chars)." },
        { status: 400 }
      );
    }

    // ─── Rate limiting ───
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (ratelimit) {
      const { success, remaining } = await ratelimit.limit(ip);

      if (!success) {
        return NextResponse.json(
          { error: "Too many submissions. Please try again later." },
          { status: 429, headers: { "X-RateLimit-Remaining": String(remaining) } }
        );
      }
    }

    // ─── Store submission in Upstash Redis ───
    const submission = {
      emailId,
      name: name || "",
      message,
      ip,
      timestamp: new Date().toISOString(),
    };

    if (redis) {
      await redis.lpush("contact-submissions", JSON.stringify(submission));
    } else {
      // Local dev fallback — just log
      console.log("Contact form submission (local):", submission);
    }

    return NextResponse.json(
      { message: "Submitted successfully" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: `An unexpected error occurred: ${err}` },
      { status: 500 }
    );
  }
}

