import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect(
            process.env.MONGO_URI, // Ensure you have set this environment variable
        )
                                                                        
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1);
    }
};

// This code connects to a MongoDB database using Mongoose.
