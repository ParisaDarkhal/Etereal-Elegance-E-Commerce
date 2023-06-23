const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
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
    total_price: {
      type: Schema.Types.Decimal128,
      required: true,
    },
    free_shipping: {
      type: Boolean,
      required: true,
    },
  },
  { collation: "orders" }
);
const Order = model("Order", orderSchema);

module.exports = Order;
