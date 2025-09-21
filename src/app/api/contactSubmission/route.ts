import { NextRequest, NextResponse } from "next/server";
import { supabase } from "../../../../utils/client";

export async function POST(request: NextRequest) {
  try {
    const { emailId, name, message } = await request.json();

    const { data, error } = await supabase
      .from("contact")
      .insert([
        {
          name: name,
          email: emailId,
          message: message,
        },
      ]);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(
      { message: "Submitted successfully", data },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: `An unexpected error occurred ${err}` },
      { status: 500 }
    );
  }
}
