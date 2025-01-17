import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB() 

/*
import express from "express"
const app = express()
(async() =>{
    try {
       await mongoose.connect('${process.env.MONGODB_URL}/${DB_NAME}')

    } catch (error) {
        console.error("ERROR: " , error)
        throw err
    }
})()
*/