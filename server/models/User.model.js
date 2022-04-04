import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      default: "",
    },
    telephone: {
      type: String,
      default: "",
      validate: {
        validator: function (v) {
          return /^[0-9]{10,11}$/.test(v);
        },
        message: (props) => `${props.value} is not a valid phone number!`,
      },
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin"],
    },
    address: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);
export default mongoose.model("user", UserSchema);
