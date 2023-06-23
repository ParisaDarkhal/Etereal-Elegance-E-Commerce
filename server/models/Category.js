const { Schema, model } = require("mongoose");

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
  },
  { collection: "categories" }
);

const Category = model("Category", categorySchema);
module.exports = Category;
