import mongoose from "mongoose";

const restSchema = new mongoose.Schema({
    image: { type: String, required: true },
    name: { type: String, required: true },
    offer: { type: String, required: true },
     rating: { type: Number, required: true},
     time: { type: String, required: true },
     menu: { type: String, required: true },
     location: { type: String, required: true },
      
   
})

const restModel = mongoose.models.rest || mongoose.model("rest", restSchema);
export default restModel;