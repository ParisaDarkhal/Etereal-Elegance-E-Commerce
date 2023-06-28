import { Schema, model } from "mongoose";

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
      maxlength: 250,
    },
    price: {
      type: Schema.Types.Decimal128,
      required: true,
    },
    image: {
      type: Schema.Types.Buffer, // Store the image data as a Buffer
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },

    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
    review: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
  },
  { collection: "products" }
);

const Product = model("Product", productSchema);
export default Product;
