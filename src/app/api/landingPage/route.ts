import { NextRequest, NextResponse } from "next/server";
import admission from "@/models/admission";
import { connectDb } from "@/helper/db";

connectDb();

export async function PATCH(req: NextRequest) {
  try {
    const { name, phone, email, preferredCollege, examGiven, location, year } =
      await req.json();

    if (
      !name ||
      !phone ||
      !email ||
      !preferredCollege ||
      !examGiven ||
      !location ||
      !year
    ) {
      return NextResponse.json(
        { errors: { general: "All fields are required" } },
        { status: 400 }
      );
    }

    const existingUser = await admission.findOne({ email });
    if (!existingUser) {
      return NextResponse.json({ error: "Email not verified" }, { status: 400 });
    }

    await admission.findOneAndUpdate(
      { email: email },
      { $set: { name, preferredCollege, examGiven, location, year } }
    );

    return NextResponse.json(
      { message: "Form submitted successfully", success: true },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error submitting form:", error);
    return NextResponse.json(
      { message: "Server error, please try again later" },
      { status: 500 }
    );
  }
}
