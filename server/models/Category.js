import { Schema, model } from "mongoose";

const categorySchema = new Schema(
  {
    category_name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      maxlength: 250,
    },
    product: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  },
  { collection: "categories" }
);

const Category = model("Category", categorySchema);
export default Category;
