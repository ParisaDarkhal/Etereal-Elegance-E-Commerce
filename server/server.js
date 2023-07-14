import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { dirname, join } from "path";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import { typeDefs, resolvers } from "./schema/index.js";
import "dotenv/config";
import { fileURLToPath } from "url";
// import items from "./seed/items.json" assert { type: "json" };
// import seeds from "./seed/seed.js";

// mongoose connector
import db from "./config/connection.js";

const PORT = process.env.PORT || 3001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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

    app.use(
      "/graphql",
      cors({ origin: "https://eternal-elegance-app.vercel.app" }),
      bodyParser.json(),
      expressMiddleware(server)
    );

    httpServer.listen(PORT, () => {
      console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
    });

    console.log("process.env.NODE_ENV :>> ", process.env.NODE_ENV);
    // client
    if (process.env.NODE_ENV === "production") {
      const buildPath = join(__dirname, "../frontend/build");
      app.use(express.static(buildPath));
      app.get("*", (req, res) => {
        console.log("Incoming request:", req.url);
        res.sendFile(join(buildPath, "index.html"));
      });
    }
  } catch (error) {
    console.error(
      "===================================Error starting the server",
      error
    );
  }
})();
