import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://rishu:zwiggy@cluster0.uh8of.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/Food_Delivery_Website').then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.