import express from "express";
import cors from "cors";

const server = express();

server.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

server.use(express.json({ limit: "16kb" }));
server.use(express.urlencoded({ extended: true, limit: "16kb" }));
server.use(express.static("public"));

import productRouter from "./routes/product.router.js";

server.use("/", productRouter);

server.listen(process.env.PORT || 8000, () => {
  console.log(`Server Running at PORT: ${process.env.PORT}`);
});
