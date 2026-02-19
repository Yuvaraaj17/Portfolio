import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { emailId, name, message } = await request.json();

    // TODO: Replace with your preferred backend/database solution
    console.log("Contact form submission:", { emailId, name, message });

    return NextResponse.json(
      { message: "Submitted successfully" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: `An unexpected error occurred ${err}` },
      { status: 500 }
    );
  }
}
