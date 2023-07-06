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
      trim: true,
      required: false,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String, // Store the image data as a Buffer
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },

    // category: {
    //   type: Schema.Types.ObjectId,
    //   ref: "Category",
    // },
    // review: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "Review",
    //   },
    // ],
  },
  { collection: "products" }
);

const Product = model("Product", productSchema);
export default Product;
