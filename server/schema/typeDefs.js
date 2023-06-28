import gql from "graphql-tag";

const typeDefs = gql`
  type User {
    id: ID!
    first_name: String!
    last_name: String!
    username: String!
    email: String!
    password: String!
    address: String!
  }

  type Query {
    users: [User]
    user(userId: ID): User
    userbByUsername(username: String!, password: String!): User
  }

  type Mutation {
    addUser(input: UserInput): User
    deleteUser(userId: ID!): User
    updateUser(userId: ID!, input: UserInput): User
  }

  input UserInput {
    first_name: String!
    last_name: String!
    username: String!
    email: String!
    password: String!
    address: String!
  }
`;
export default typeDefs;
