const express = require("express");
const { ApolloServer } = require("@apollo/server");
const path = require("path");

// mongoose connector
const db = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

// Apollo Server setup
const { typeDefs, resolvers } = require("./schemas");
const server = new ApolloServer({ typeDefs, resolvers });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// client
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client"));
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
  db.once("open", () => {
    app.listen(PORT, () => {
      console.log("Server running on PORT 3001!");
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

startApolloServer();
