import mongoose from 'mongoose';

async function connectDB() {
  if (mongoose.connections[0].readyState) return; 
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
}

export default connectDB;
