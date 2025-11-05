import express from 'express';
import About from '../models/About.model.js';
import { authenticate } from '../middleware/auth.middleware.js';

const router = express.Router();

// GET about data
router.get('/', async (req, res) => {
  try {
    const about = await About.getAbout();
    res.json({ success: true, data: about });
  } catch (error) {
    console.error('Error fetching about:', error);
    res.status(500).json({ success: false, message: 'Error fetching about data' });
  }
});

// UPDATE about data (protected)
router.put('/', authenticate, async (req, res) => {
  try {
    let about = await About.findOne();
    
    if (!about) {
      about = await About.getAbout();
    }

    const updatedAbout = await About.findByIdAndUpdate(
      about._id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    res.json({ success: true, data: updatedAbout });
  } catch (error) {
    console.error('Error updating about:', error);
    res.status(500).json({ success: false, message: 'Error updating about data' });
  }
});

// UPDATE stats only
router.put('/stats', authenticate, async (req, res) => {
  try {
    let about = await About.findOne();
    if (!about) {
      about = await About.getAbout();
    }

    about.stats = req.body.stats || about.stats;
    await about.save();

    res.json({ success: true, data: about });
  } catch (error) {
    console.error('Error updating stats:', error);
    res.status(500).json({ success: false, message: 'Error updating stats' });
  }
});

// UPDATE timeline only
router.put('/timeline', authenticate, async (req, res) => {
  try {
    let about = await About.findOne();
    if (!about) {
      about = await About.getAbout();
    }

    about.timeline = req.body.timeline || about.timeline;
    await about.save();

    res.json({ success: true, data: about });
  } catch (error) {
    console.error('Error updating timeline:', error);
    res.status(500).json({ success: false, message: 'Error updating timeline' });
  }
});

export default router;

