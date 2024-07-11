import dotenv from "dotenv"

import express from "express";
import connectDB from "../src/db/index.js";

const app = express();

dotenv.config({
    path : './env'
})

connectDB()













// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

// ( async () => {
//     try {
//         mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on('error',(error)=>{
//             console.log("ERROR: ", error);
//             throw error
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listening on port ${process.env.PORT}`)
//         })
        
//     } catch (error) {
//         console.error("ERROR: ", error)
//         throw error
//     }
// })()