import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

const connectDB=async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`MongoDb Connected !!`);
        
    } catch (error) {
        console.log("MongoDb Connection error",error);
        process.exit(1);
        
    }
}

export default connectDB;