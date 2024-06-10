import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://mongodbuser200:mongodbuser200@cluster0.y62xlwd.mongodb.net/sizzle').then(() => {
        console.log("DB connected");
    })
}