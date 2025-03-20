import twilio from "twilio";
import { NextRequest, NextResponse } from "next/server";

import { connectDb } from "@/helper/db";
import admission from "@/models/admission";

connectDb();

const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

const authToken = process.env.TWILIO_AUTH_TOKEN;
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const twilioPhone = process.env.TWILIO_PHONE_NUMBER;

const client = twilio(accountSid, authToken);

export async function POST(req: NextRequest) {
  try {
    const { name, phone, email } = await req.json();

    if (!email && !phone) {
      return NextResponse.json(
        { errors: { general: "Either email or phone is required" } },
        { status: 400 }
      );
    }

    let existingUser;
    existingUser = await admission.findOne({ phone });

    if (existingUser) {
      return NextResponse.json({ message: "Phone already exist" }, { status: 409 });
    }

    if (email) {
      existingUser = await admission.findOne({ email });
    }

    const newOTP = generateOTP();

    if (!existingUser) {
      await admission.create({
        name: name ?? "a",
        phone: phone,
        email: email != "" ? email : "a",
        phoneOTP: newOTP,
      });
    } else {
      await admission.findOneAndUpdate(
        { email: email },
        { $set: { phone: phone, phoneOTP: newOTP } }
      );
    }

    client.messages.create({
      messagingServiceSid: "MG5b053ac4666ff04ad3946b4b939f5548",
      to: `whatsapp:${phone}`,
      contentSid: "HXfe4d03946bf3e5b41bf5c98e9bcab1fa",
      contentVariables: JSON.stringify({
        "1": newOTP,
      }),
    });

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
