import mongoose from "mongoose";
import validator from "validator";

const UserSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value) => validator.isEmail(value),
      message: "Email is invalid",
    },
  },
  password: { type: String, required: true, minlength: 8 },
  confirmPassword: {
    type: String,
    default: undefined,
    select: false,
    validate: {
      validator: function (value) {
        return value === this.password;
      },
      message: `Passwords don't match!`,
    },
  },
  fullRange: { type: Number, required: true },
  modelYear: { type: Number, required: true },
});
const UserModel = mongoose.model("users", UserSchema);

export default UserModel;
