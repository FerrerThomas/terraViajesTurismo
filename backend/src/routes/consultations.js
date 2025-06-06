import express from 'express';
import Consultation from '../models/Consultation.js';

const router = express.Router();

// Get all consultations
router.get('/', async (req, res) => {
  try {
    const consultations = await Consultation.find().sort({ createdAt: -1 });
    res.json(consultations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create consultation
router.post('/', async (req, res) => {
  const consultation = new Consultation(req.body);
  try {
    const newConsultation = await consultation.save();
    res.status(201).json(newConsultation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;