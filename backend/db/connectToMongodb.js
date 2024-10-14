import mongoose from "mongoose";

const connectToMongodb = async () => {
  const URI = process.env.MONGO_DB_URI;
  try {
    await mongoose.connect(URI);
    console.log("Connected to MongoDb");
    
  } catch (error) {
    console.log(`Error connecting to MongoDb : ${error.message}`);
    process.exit(0);
  }
};

export default connectToMongodb