export const OtpTemplate = (otp: number) => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>OTP Verification</title>

    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
      rel="stylesheet"
    />
  </head>
  <body
    style="
      margin: 0;
      font-family: 'Poppins', sans-serif;
      background: #f8f8f8;
      font-size: 16px;
      color: #434343;
    "
  >
    <div
      style="
        max-width: 600px;
        margin: 0 auto;
        padding: 45px 30px;
        background: #ffffff;
        border-radius: 12px;
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
      "
    >
      <!-- Header Section -->
      <header style="text-align: center; padding-bottom: 20px">
        <img
          src="https://vacationsaga.b-cdn.net/assets/owl.png"
          alt="AdmissionHoga Logo"
          style="max-width: 150px"
        />
        <h2
          style="
            font-size: 24px;
            font-weight: 600;
            color: #65A4ED;
            margin-top: 20px;
          "
        >
          OTP Verification
        </h2>
        <p
          style="
            font-size: 16px;
            color: #434343;
            margin: 5px 0;
            font-weight: 400;
          "
        >
          Thank you for scheduling a callback with us. To verify your email address, please use the following One-Time Password (OTP):
        </p>
      </header>

      <!-- OTP Section -->
      <section
        style="
          background: #f7f9fc;
          padding: 30px;
          border-radius: 12px;
          text-align: center;
          margin-bottom: 30px;
        "
      >

        <div
          style="
            background: #fef6e9;
            padding: 20px;
            border-radius: 8px;
            display: inline-block;
            font-size: 32px;
            font-weight: 700;
            letter-spacing: 12px;
            color: #65A4ED;
          "
        >
          ${otp}
        </div>

        <p
          style="
            font-size: 14px;
            margin-top: 20px;
            color: #888888;
            font-weight: 400;
          "
        >
          Please do not share this OTP with anyone.
        </p>
      </section>

      <!-- Help Section -->
      <section
        style="
          text-align: center;
          margin-bottom: 30px;
          font-size: 14px;
          color: #888888;
        "
      >
        <p style="font-weight: 500; margin: 0 0 10px">
          Need help or have questions?
        </p>
        <p style="margin: 0 0 10px">
          Contact our support team at
          <a
            href="mailto:admissionhoga0@gmail.com"
            style="color: #65A4ED; text-decoration: none; font-weight: 500"
            >admissionhoga0@gmail.com</a
          >.
        </p>
        <p style="margin: 0">
          Visit our
          <a
            href="#"
            target="_blank"
            style="color: #65A4ED; text-decoration: none; font-weight: 500"
            >Help Center</a
          >
          for more information.
        </p>
      </section>

      <!-- Footer Section -->
      <footer
        style="
          text-align: center;
          padding-top: 20px;
          border-top: 1px solid #eaeaea;
          font-size: 14px;
          color: #888888;
        "
      >
        <p style="margin: 0">© 2025 Admission Hoga. All rights reserved.</p>
        <p style="margin-top: 5px">
          Admission Hoga, 117/N/70 3rd Floor Kakadeo Kanpur
        </p>
      </footer>
    </div>
  </body>
</html>`;
};
