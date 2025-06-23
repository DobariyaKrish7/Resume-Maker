import mongoose from "mongoose"

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://krishdobariya251:resume1987@cluster0.z06punm.mongodb.net/rms1')
        .then(() => console.log("MongoDB connected successfully"))

}
    