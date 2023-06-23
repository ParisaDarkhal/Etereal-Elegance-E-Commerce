const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      required: false,
      maxlength: 200,
    },
    price: {
      type: Schema.Types.Decimal128,
      required: true,
    },
    image: {
      type: URL,
      required: true,
    },
    quantity: {
      type: Number,
    },

    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  { collection: "users" }
);

const Product = model("Product", productSchema);

module.exports = Product;
