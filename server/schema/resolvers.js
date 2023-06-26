const { User, Product } = require("../models");

const resolvers = {
  Query: {
    // find all users
    users: async () => {
      try {
        const users = await User.find();
        return users;
      } catch (error) {
        throw new Error("Failed to fetch users.");
      }
    },

    // find a user by id
    user: async (parent, { userId }) => {
      try {
        const user = await User.findById(userId).populate("orders");
        if (!user) {
          throw new Error("User not found.");
        }
        return user;
      } catch (error) {
        throw new Error("Failed to fetch user by ID.");
      }
    },

    // find all products
    products: async () => {
      try {
        const products = await Product.find();
        return products;
      } catch (error) {
        throw new Error("Failed to fetch products.");
      }
    },

    // find a product by id
    product: async (parent, { productId }) => {
      try {
        const product = await Product.findById(productId);
        if (!product) {
          throw new Error("Product not found.");
        }
        return product;
      } catch (error) {
        throw new Error("Failed to fetch product by ID.");
      }
    },

    // Retrieve all products by category
    productsByCategory: async (parent, { categoryId }) => {
      try {
        const products = await Product.find({ category: categoryId });
        return products;
      } catch (error) {
        throw new Error("Failed to fetch products by category.");
      }
    },
  },

  Mutation: {},
};

module.exports = resolvers;
