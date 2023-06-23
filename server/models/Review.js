const { Schema, model } = require("mongoose");

const reviewSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
    star_rating: {
      type: Number,
      require: true,
    },
  },
  { collection: "reviews" }
);

const Review = model("Review", reviewSchema);
module.exports = Review;
