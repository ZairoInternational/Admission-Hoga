import { NextRequest, NextResponse } from "next/server";

import { connectDb } from "@/helper/db";
import admission from "@/models/admission";
import { verifyLandingPageEmail } from "@/helper/mailer";

connectDb();

const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

export async function POST(req: NextRequest) {
  try {
    const { name, phone, email } = await req.json();
    // console.log("phone: ", phone, email);

    if (!email && !phone) {
      return NextResponse.json(
        { errors: { general: "Email is required" } },
        { status: 400 }
      );
    }

    let existingUser;
    existingUser = await admission.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: "Email already exist" }, { status: 409 });
    }

    if (phone) {
      existingUser = await admission.findOne({ phone });
    }

    const newOTP = generateOTP();

    if (!existingUser) {
      const user = await admission.create({
        name: name ?? "a",
        phone: phone != "" ? phone : 0,
        email: email,
        emailOTP: newOTP,
      });
      await verifyLandingPageEmail({
        email,
        emailType: "OTP",
        otp: parseInt(newOTP),
        userId: user._id,
      });
    } else {
      await admission.findOneAndUpdate(
        { phone: phone },
        { $set: { email: email, emailOTP: newOTP } }
      );
      await verifyLandingPageEmail({
        email,
        emailType: "OTP",
        otp: parseInt(newOTP),
        userId: existingUser._id,
      });
    }

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
