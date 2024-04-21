// pages/api/getData.js

import mongoose from 'mongoose';
import connectToDatabase from '../../db/db';

export default async function handler(req, res) {
  await connectToDatabase();

  // Example Mongoose schema and model
  const User = mongoose.model('User', { name: String });

  // Create a new user document
  const user = new User({ name: 'John Doe' });
  await user.save();
  res.status(200).json({ message: 'User created successfully' });
  
}
