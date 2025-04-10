import mongoose from "mongoose";
const MONGO_URI = 'mongodb+srv://trinetrakumar725fthg0:<Your Password>@firstcluster.wtrrtvq.mongodb.net/?retryWrites=true&w=majority&appName=FirstCluster';



const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);  // Exit the process with failure
  }
};

export default connectDB;
