const { model, Schema, Types: {ObjectId} } = require("mongoose");

const EMAIL_PATTERN = /^([a-zA-Z]+)@([a-zA-Z]+)\.([a-zA-Z]+)$/;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: [5, "Username should be at least 5 characters"],
      validate: {
        validator(value) {
          return /[a-zA-Z0-9]+/g.test(value);
        },
        message: "Username must contain only latin letters and digits",
      },
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      validate: {
        validator(value) {
          return EMAIL_PATTERN.test(value);
        },
        message: "Email must be valid",
      },
    },
    hashedPassword: { type: String, required: true },
    tel: { type: String },
    myAds: [{ type: ObjectId, ref: "Item" }],
  },
  { timestamps: true }
);

userSchema.index(
  { email: 1 },
  {
    unique: true,
    collation: {
      locale: "en",
      strength: 1,
    },
  }
);

const User = model("User", userSchema);

module.exports = User;
