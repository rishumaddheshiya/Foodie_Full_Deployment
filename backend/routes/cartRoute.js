import express from 'express';
import { addToCart, getCart, removeFromCart,countItems } from '../controllers/cartController.js';
import authMiddleware from '../middleware/auth.js';

const cartRouter = express.Router();

cartRouter.post("/get",authMiddleware,getCart);
cartRouter.post("/add",authMiddleware,addToCart);
cartRouter.post("/remove",authMiddleware,removeFromCart);
cartRouter.post("/count",authMiddleware, countItems);
    

export default cartRouter;