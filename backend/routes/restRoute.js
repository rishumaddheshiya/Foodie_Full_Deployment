import express from 'express';
import { addRest, listRest, removeRest } from '../controllers/restController.js';
import multer from 'multer';
const restRouter = express.Router();

//Image Storage Engine (Saving Image to uploads folder & rename it)

const storage = multer.diskStorage({
    destination: 'uploadsrest',
    filename: (req, file, cb) => {
        return cb(null,`${Date.now()}${file.originalname}`);
    }
})

const upload = multer({ storage: storage})

restRouter.get("/listrest",listRest);
restRouter.post("/addrest",upload.single('image'),addRest);
restRouter.post("/removerest",removeRest);

export default restRouter;