import mongoose from 'mongoose';

const consultationSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, required: true },
  productType: { type: String, required: true, enum: ['package', 'cruise'] },
  productId: { type: mongoose.Schema.Types.ObjectId, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Consultation', consultationSchema);