import { Router } from "express";
import { getProducts } from "../controllers/product.controller.js";

const router = Router();

router.route("/test").get(getProducts);

export default router;
