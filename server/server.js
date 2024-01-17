// Importing required modules
const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config(); // This is to use the .env file

// Importing schemas and database connection
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startApolloServer = async () => {
  await server.start();

  // Middleware setup
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use(cors());

  if (process.env.NODE_ENV === "production") {
    // Serving static files in production mode
    app.use(express.static(path.join(__dirname, "../client/dist")));

    // Handling all other routes in production mode
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../client/dist/index.html"));
    });
  }

  // GraphQL endpoint setup
  app.use("/graphql", expressMiddleware(server));

  // Starting the server
  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

startApolloServer();