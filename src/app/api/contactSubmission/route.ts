import { NextRequest, NextResponse } from "next/server";
import { supabase } from "../../../../utils/client";

export async function POST(request: NextRequest) {
  try {
    const { emailId, name, message } = await request.json();
    const result = await supabase
      .from("contact") // Replace 'posts' with your table name
      .insert([
        {
          name: name,
          email: emailId,
          message: message,
        },
      ]);

    // If there's an error during insertion, return error response
    if (result) {
      return NextResponse.json({ error: result.error.message }, { status: 500 });
    }
    return NextResponse.json({ message: "Submitted successfully" }, { status: 200 });
  } catch {
    // Catch any other errors
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
