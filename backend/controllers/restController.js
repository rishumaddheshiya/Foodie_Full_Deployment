import restModel from "../models/restModel.js";
import fs from 'fs'

// all rest list
const listRest = async (req, res) => {
    try {
        const rests = await restModel.find({})
        res.json({ success: true, data: rests })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }

}

// add rest
const addRest = async (req, res) => {

    try {
        let image_filename = `${req.file.filename}`

        const rest = new restModel({
            name: req.body.name,
            offer: req.body.offer,
            rating: req.body.rating,
            time:req.body.time,
            menu:req.body.menu,
            location:req.body.location,
            image: image_filename,
        })

        await rest.save();
        res.json({ success: true, message: "Restaurant Added" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

// delete rest
const removeRest = async (req, res) => {
    try {

        const rest = await restModel.findById(req.body.id);
        fs.unlink(`uploadsrest/${rest.image}`, () => { })

        await restModel.findByIdAndDelete(req.body.id)
        res.json({ success: true, message: "Restaurant Removed" })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }

}

export { listRest, addRest, removeRest }