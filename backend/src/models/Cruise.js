import mongoose from 'mongoose';

const cruiseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: String, required: true },
  departureDate: { type: String, required: true },
  image: { type: String, required: true },
  details: [{ type: String }],
  price: { type: Number, required: true },
  currency: { type: String, required: true }
});

export default mongoose.model('Cruise', cruiseSchema);