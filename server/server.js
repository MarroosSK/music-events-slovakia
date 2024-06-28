import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import dotenv from "dotenv";
import { resolvers, typeDefs } from "./schema/schema.js";
import { PrismaClient } from "@prisma/client";

dotenv.config();

const port = process.env.PORT || 3002;
const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3001",
      "http://localhost:3002",
      "http://localhost:4000",
      "https://music-events-slovakia.vercel.app",
    ],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const prisma = new PrismaClient();

// Apollo Server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => ({
    prisma,
    headers: req.headers,
  }),
});

await server.start();

// Apply Apollo Server as middleware
app.use("/graphql", expressMiddleware(server));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
