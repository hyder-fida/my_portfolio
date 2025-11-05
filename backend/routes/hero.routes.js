import express from 'express';
import Hero from '../models/Hero.model.js';
import { authenticate } from '../middleware/auth.middleware.js';

const router = express.Router();

// GET hero data
router.get('/', async (req, res) => {
  try {
    const hero = await Hero.getHero();
    res.json({ success: true, data: hero });
  } catch (error) {
    console.error('Error fetching hero:', error);
    res.status(500).json({ success: false, message: 'Error fetching hero data' });
  }
});

// UPDATE hero data (protected)
router.put('/', authenticate, async (req, res) => {
  try {
    let hero = await Hero.findOne();
    
    if (!hero) {
      hero = await Hero.getHero();
    }

    const updatedHero = await Hero.findByIdAndUpdate(
      hero._id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    res.json({ success: true, data: updatedHero });
  } catch (error) {
    console.error('Error updating hero:', error);
    res.status(500).json({ success: false, message: 'Error updating hero data' });
  }
});

export default router;

