import { Router } from "express";
import { test, getProducts } from "../controllers/product.controller.js";

const router = Router();

router.route("/test").get(test);
router.route("/categories/:categoryname/products").get(getProducts);

export default router;
