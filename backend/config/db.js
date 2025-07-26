import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB=async()=>{
    try {
        await mongoose.connect("mongodb+srv://bhawanisah:1HdyaulcDjEBLUVw@cluster0.dzwtsms.mongodb.net/HMS?retryWrites=true&w=majority&appName=Cluster0");
        console.log("database connection successfull")
    } catch (error) {
        console.log("Database connection error",error)
    }
}

export default connectDB;