const { gql } = require("@apollo/server");

const typeDefs = gql`

  type User {
    id: ID!
    first_name: String!
    last_name: String!
    email: String!
    password: String!
    address: String!
    cart: Cart
    order: Order
    review: [Review]
  }

  type Product {
    id:ID!
    name:String!
    description:String
    price: Schema.Types.Decimal128!
    image: Schema.Types.Buffer!
    quantity:Number!
    category: Category
    review: [Review]
  }

  type Cart {
    id:ID!
    user: User
    product: [Product]
    quantity: Number!
    total_price: Schema.Types.Decimal128!
  }

  type Order {
    id:ID!
    user: User
    product: [Product]
    quantity: Number!
    total_price: Schema.Types.Decimal128!
    free_shipping: Boolean!
    payment_method:String!
    order_status: String!

  }

  type Category {
    id: ID!
    category_name: String!
    description: String
  }

  type Review {
    id: ID!
    user: User!
    product: Product!
    star_rating: Number!


  }

  type Query {
    users: [User]
    user(userId: ID) : User
    products: [Product]
    product(productId: ID) : Product

  }

  type Mutation {}

  input UserInput {}

  input ProductInput {}

`;
module.exports = typeDefs;
