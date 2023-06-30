import { User, Order, Product } from "../models/index.js";
import bcrypt from "bcrypt";

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
        const user = await User.findById(userId);
        if (!user) {
          throw new Error("User not found.");
        }
        return user;
      } catch (error) {
        throw new Error("Failed to fetch user by ID.");
      }
    },

    // find a user by usernama and password
    userByUsername: async (parent, { username, password }) => {
      try {
        const user = await User.findOne({ username });
        if (!user) {
          throw new Error("Invalid Credentials!");
        }
        // verify password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
          throw new Error("Invalid Credentials!");
        }
        return user;
      } catch (erroer) {
        throw new Error("Failed to fetch user.");
      }
    },
  },

  //   // find all products
  //   products: async () => {
  //     try {
  //       const products = await Product.find();
  //       return products;
  //     } catch (error) {
  //       throw new Error("Failed to fetch products.");
  //     }
  //   },

  //   // find a product by id
  //   product: async (parent, { productId }) => {
  //     try {
  //       const product = await Product.findById(productId);
  //       if (!product) {
  //         throw new Error("Product not found.");
  //       }
  //       return product;
  //     } catch (error) {
  //       throw new Error("Failed to fetch product by ID.");
  //     }
  //   },

  //   // Retrieve all products by category
  //   productsByCategory: async (parent, { categoryId }) => {
  //     try {
  //       const products = await Product.find({ category: categoryId });
  //       return products;
  //     } catch (error) {
  //       throw new Error("Failed to fetch products by category.");
  //     }
  //   },

  //   // Find all orders
  //   orders: async () => {
  //     try {
  //       const orders = await Order.find();
  //       return orders;
  //     } catch (error) {
  //       throw new Error("Failed to fetch orders.");
  //     }
  //   },

  //   // Find an order by ID
  //   order: async (parent, { orderId }) => {
  //     try {
  //       const order = await Order.findById(orderId);
  //       if (!order) {
  //         throw new Error("Order not found.");
  //       }
  //       return order;
  //     } catch (error) {
  //       throw new Error("Failed to fetch order by ID.");
  //     }
  //   },

  //   // Find orders by user
  //   ordersByUser: async (parent, { userId }) => {
  //     try {
  //       const orders = await Order.find({ user: userId });
  //       return orders;
  //     } catch (error) {
  //       throw new Error("Failed to fetch orders by user.");
  //     }
  //   },

  //   // Find a cart by ID
  //   cart: async (parent, { cartId }) => {
  //     try {
  //       const cart = await Cart.findById(cartId);
  //       if (!cart) {
  //         throw new Error("Cart not found.");
  //       }
  //       return cart;
  //     } catch (error) {
  //       throw new Error("Failed to fetch cart by ID.");
  //     }
  //   },

  //   // Find carts by user
  //   cartsByUser: async (parent, { userId }) => {
  //     try {
  //       const carts = await Cart.find({ user: userId });
  //       return carts;
  //     } catch (error) {
  //       throw new Error("Failed to fetch carts by user.");
  //     }
  //   },

  //   // Find all categories
  //   categories: async () => {
  //     try {
  //       const categories = await Category.find();
  //       return categories;
  //     } catch (error) {
  //       throw new Error("Failed to fetch categories.");
  //     }
  //   },

  //   // Find a category by ID
  //   category: async (parent, { categoryId }) => {
  //     try {
  //       const category = await Category.findById(categoryId);
  //       if (!category) {
  //         throw new Error("Category not found.");
  //       }
  //       return category;
  //     } catch (error) {
  //       throw new Error("Failed to fetch category by ID.");
  //     }
  //   },

  //   // Find a category by product
  //   categoryByProduct: async (parent, { productId }) => {
  //     try {
  //       const category = await Category.findOne({ product: productId });
  //       if (!category) {
  //         throw new Error("Category not found for the product.");
  //       }
  //       return category;
  //     } catch (error) {
  //       throw new Error("Failed to fetch category by product.");
  //     }
  //   },

  //   // Find all reviews
  //   reviews: async () => {
  //     try {
  //       const reviews = await Review.find();
  //       return reviews;
  //     } catch (error) {
  //       throw new Error("Failed to fetch reviews.");
  //     }
  //   },

  //   // Find reviews by product
  //   reviewsByProduct: async (parent, { productId }) => {
  //     try {
  //       const reviews = await Review.find({ product: productId });
  //       return reviews;
  //     } catch (error) {
  //       throw new Error("Failed to fetch reviews by product.");
  //     }
  //   },

  //   // Find reviews by star rating
  //   reviewsByStarRating: async (parent, { starRating }) => {
  //     try {
  //       const reviews = await Review.find({ star_rating: starRating });
  //       return reviews;
  //     } catch (error) {
  //       throw new Error("Failed to fetch reviews by star rating.");
  //     }
  //   },
  // },

  Mutation: {
    // Add a user
    addUser: async (parent, { input }) => {
      try {
        const user = await User.create(input);
        console.log(user);
        return user;
      } catch (error) {
        throw new Error("Failed to add user.");
      }
    },

    //   // Delete a user
    deleteUser: async (parent, { userId }) => {
      try {
        const deletedUser = await User.findByIdAndDelete(userId);
        if (!deletedUser) {
          throw new Error("User not found!");
        }
        return deletedUser;
      } catch (error) {
        throw new Error("Failed to delete user.");
      }
    },

    // Update a user
    updateUser: async (parent, { userId, input }) => {
      try {
        const updatedUser = await User.findByIdAndUpdate(userId, input, {
          new: true,
        });
        if (!updatedUser) {
          throw new Error("User not found!");
        }
        return updatedUser;
      } catch (error) {
        throw new Error("Failed to update user.");
      }
    },

    //   // Add a product
    //   addProduct: async (parent, { input }) => {
    //     try {
    //       const product = await Product.create(input);
    //       console.log(product);
    //       return product;
    //     } catch (error) {
    //       throw new Error("Failed to add product.");
    //     }
  },
};

export default resolvers;
