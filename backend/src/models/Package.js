import mongoose from 'mongoose';

const packageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  destination: { type: String, required: true },
  duration: { type: String, required: true },
  departureDate: { type: String, required: true },
  image: { type: String, required: true },
  details: [{ type: String }],
  price: { type: Number, required: true },
  currency: { type: String, required: true }
});

export default mongoose.model('Package', packageSchema);