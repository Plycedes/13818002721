import express from "express";
import cors from "cors";

const server = express();

server.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

import productRouter from "./routes/product.router.js";

server.use("/", productRouter);

server.listen(process.env.PORT || 8000, () => {
  console.log(`Server Running at PORT: ${process.env.PORT}`);
});
