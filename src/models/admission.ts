import mongoose from "mongoose";

const admissionFormSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, default: "" },
    phone: { type: Number, required: true, default: 0 },
    email: { type: String, required: true },
    phoneOTP: { type: Number },
    emailOTP: { type: Number },
    preferredCollege: { type: String, default: "" },
    examGiven: { type: String, default: "" },
    location: { type: String, default: "" },
    year: { type: Number, default: 2024 },
  },
  { timestamps: true }
);

export default mongoose.models.admission ||
  mongoose.model("admission", admissionFormSchema);
