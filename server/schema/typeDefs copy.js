// import { gql } from "@apollo/server";
import gql from "graphql-tag";

const typeDefs = gql`

  type User {
    id: ID!
    first_name: String!
    last_name: String!
    email: String!
    password: String!
    address: String!
    // cart: Cart
    // order: Order
    // review: [Review]
  }

//   type Product {
//     id:ID!
//     name:String!
//     description:String
//     price: Schema.Types.Decimal128!
//     image: Schema.Types.Buffer!
//     quantity:Number!
//     category: Category
//     review: [Review]
//   }

//   type Cart {
//     id:ID!
//     user: User
//     product: [Product]
//     quantity: Number!
//     total_price: Schema.Types.Decimal128!
//   }

//   type Order {
//     id:ID!
//     user: User
//     product: [Product]
//     quantity: Number!
//     total_price: Schema.Types.Decimal128!
//     free_shipping: Boolean!
//     payment_method:String!
//     order_status: String!

//   }

//   type Category {
//     id: ID!
//     category_name: String!
//     description: String
//   }

//   type Review {
//     id: ID!
//     user: User!
//     product: Product!
//     star_rating: Number!


//   }

//   type Query {
//     users: [User]
//     user(userId: ID) : User
//     products: [Product]
//     product(productId: ID) : Product
//     productsByCategory(categoryId: ID) : [Product]
//     orders: [Order]
//     order(orderId: ID) : Order
//     ordersByUser(userId: ID) : Order
//     cart(cartId: ID) : Cart
//     cartsByUser(userId: ID) : Cart
//     categories: [Category]
//     category(categoryId: ID) : Category
//     categoryByProduct(productId: ID): Category
//     reviews: [Review]
//     reviewsByProduct(productId: ID): Review
//     reviewsByStarRating(starRating: Number): [Review]

//   }

//   type Mutation {
//     addUser(input: UserInput): User
//     deleteUser(userId: ID!): User
//     updatedUser(userId: ID!, input: UserInput): User
//     addProduct(input: ProductInput): Product
//   }

//   input UserInput {
//     first_name: String!
//     last_name: String!
//     email: String!
//     password: String!
//     address: String!
//   }

//   input ProductInput {
//     name:String!
//     description: String!
//     price: Schema.Types.Decimal128!
//     image: Schema.Types.Buffer!
//     quantity: Number!
//     category: ID
//     review: ID
//   }

`;
export default typeDefs;
