import express from "express";
import productController from "../controllers/product.controller.js";

const router = express.Router();

router.get("/info", productController.getProductsInfo);
router.post("/info", productController.createProductInfo);
router.put("/info", productController.updateProductInfo);
router.post("/", productController.createProduct);
router.get("/", productController.getProducts);
router.get("/:id", productController.getProduct);
router.delete("/:id", productController.deleteProduct);
router.put("/", productController.updateProduct);
router.post("/review", productController.createReview);
router.delete("/:id/review/:index", productController.deleteReview)
router.delete("/info/:id", productController.deleteProductInfo);



export default router