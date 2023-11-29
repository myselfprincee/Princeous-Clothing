import mongoose  from 'mongoose';

export default async function connectToMongo() {
  try {
    await mongoose.connect('mongodb://0.0.0.0:27017/Princeous-ClothingDB', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err);
  }
}

