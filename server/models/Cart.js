const { Schema, model } = require("mongoose");

const cartSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    product: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    quantity: {
      type: Number,
      required: true,
    },
    total_price: {
      type: Schema.Types.Decimal128,
      required: true,
    },
  },
  { collection: "carts" }
);

const Cart = model("Cart", cartSchema);
module.exports = Cart;
