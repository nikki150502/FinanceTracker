import mongoose from "mongoose";
export const connectDb = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("mongo db connect sucessfully");
    }catch(err){
        console.log(err);
    }
}