import dotenv from "dotenv";
import mongoose from 'mongoose';
import connectDB from './db/index.js';

dotenv.config();

connectDB()
.then(
    app.listen(process.env.PORT ,()=>{
        console.log(`Server Is Runnig at Port: ${process.env.PORT}`);

    })   

)
.catch((err)=>{
    console.log("err",err);
    
})