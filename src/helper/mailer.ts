import nodemailer from "nodemailer";

import admission from "@/models/admission";
import { OtpTemplate } from "./emailTemplates";
import { AxiosError } from "axios";

interface SendEmailParams {
  email: string;
  emailType: "VERIFY" | "RESET" | "OTP" | "NEWPASSWORD";
  userId: string;
  password?: string;
  newPassword?: string;
  otp?: number;
}

export const verifyLandingPageEmail = async ({
  email,
  emailType,
  otp,
}: SendEmailParams): Promise<{ success: boolean; message: string }> => {
  // let otp: number | null = null;
  try {
    // const hashedToken = await bcryptjs.hash(userId.toString(), 10);
    // const encodedToken = encodeURIComponent(hashedToken);
    // Update user record in DB based on email type
    switch (emailType) {
      case "OTP":
        otp = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
        await admission.findOneAndUpdate(
          { email: email },
          {
            $set: {
              emailOTP: otp,
              // otpTokenExpiry: new Date(Date.now() + 300000), // 5 minutes
            },
          }
        );
        break;
      // case "VERIFY":
      //   await Employees.findByIdAndUpdate(userId, {
      //     $set: {
      //       verifyToken: hashedToken,
      //       verifyTokenExpiry: new Date(Date.now() + 3600000), // 1 hour
      //     },
      //   });
      //   break;
    }

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      // service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "no-reply@vacationsaga.com",
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Prepare email template and subject based on the type of email
    let templateContent: string;
    let subject: string;

    switch (emailType) {
      case "OTP":
        templateContent = OtpTemplate(otp ?? 0);
        subject = "Verify Your Email";
        break;
      // case "VERIFY":
      //   templateContent = VerificationTemplate(encodedToken, password || "", email);
      //   subject = "Verify your email";
      //   break;
      default:
        console.log("invalid email Type");
        throw new Error("Invalid email type");
    }

    const mailOptions = {
      from: "No Reply <no-reply@vacationsaga.com>",
      to: email,
      subject,
      html: templateContent,
    };

    // Send the email
    const mailResponse = await transporter.sendMail(mailOptions);
    // console.log("mailResponse: ", mailResponse);

    // Check if the email was rejected
    if (mailResponse.rejected.length > 0) {
      console.log("Email rejected:", mailResponse.rejected);
      return { success: false, message: "Email does not exist." };
    }

    console.log("Email sent successfully");
    return { success: true, message: "Email sent successfully." };
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      console.error("An Axios error occurred:", err.response?.data.message);
    } else {
      console.error("An unexpected error occurred:", err);
    }
    throw new Error("Failed to send email: " + err);
  }
};
