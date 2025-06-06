import express from 'express';
import Cruise from '../models/Cruise.js';

const router = express.Router();

// Get all cruises
router.get('/', async (req, res) => {
  try {
    const cruises = await Cruise.find();
    res.json(cruises);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create cruise
router.post('/', async (req, res) => {
  const cruise = new Cruise(req.body);
  try {
    const newCruise = await cruise.save();
    res.status(201).json(newCruise);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update cruise
router.put('/:id', async (req, res) => {
  try {
    const updatedCruise = await Cruise.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedCruise);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete cruise
router.delete('/:id', async (req, res) => {
  try {
    await Cruise.findByIdAndDelete(req.params.id);
    res.json({ message: 'Cruise deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;