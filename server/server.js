import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import path from "path";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import { typeDefs, resolvers } from "./schema/index.js";
import "dotenv/config";
// import items from "./seed/items.json" assert { type: "json" };
// import seeds from "./seed/seed.js";

// mongoose connector
import db from "./config/connection.js";

const PORT = process.env.PORT || 3001;

(async function () {
  try {
    await db.connect(); // Connect to the database using the db variable
    // Seed the data
    // await seeds();
    const app = express();
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });
    await server.start();

    app.use("/graphql", cors(), bodyParser.json(), expressMiddleware(server));

    httpServer.listen(PORT, () => {
      console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
    });

    // client
    if (process.env.NODE_ENV === "production") {
      app.use(express.static(path.join(__dirname, "../frontend/build")));
    }

    app.get("/", (req, res) => {
      res.sendFile(path.join(__dirname, "../frontend"));
    });
  } catch (error) {
    console.error(
      "===================================Error starting the server",
      error
    );
  }
})();
