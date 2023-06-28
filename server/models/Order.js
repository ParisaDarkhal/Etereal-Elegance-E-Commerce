import { Schema, model } from "mongoose";

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
    quantity: {
      type: Number,
      required: true,
    },
    total_price: {
      type: Schema.Types.Decimal128,
      required: true,
    },
    free_shipping: {
      type: Boolean,
      required: true,
    },
    payment_method: {
      type: String,
      required: true,
    },
    order_status: {
      type: String, // to be set as pending, confirmed and shipped
      required: true,
    },
  },
  {
    collation: "orders",
    timestamps: true, // Add timestamps for createdAt and updatedAt
  }
);
const Order = model("Order", orderSchema);

export default Order;
