const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  first_name: {
    type: String,
    trim: true,
    required: true,
  },
  last_name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
    maxlength: 250,
  },
  cart: {
    type: Schema.Types.ObjectId,
    ref: "Cart",
  },
  order: {
    type: Schema.Types.ObjectId,
    ref: "Order",
  },
  review: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

//hash password before saving
userSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) {
      return next();
    }

    // Generate a salt to hash the password
    const salt = await bcrypt.genSalt(10);
    // Hash the password using the generated salt
    const hashedPassword = await bcrypt.hash(this.password, salt);
    // Set the hashed password back to the field
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

const User = model("User", userSchema);
module.exports = User;
