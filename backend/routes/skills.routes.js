import express from 'express';
import Skill from '../models/Skill.model.js';
import { authenticate } from '../middleware/auth.middleware.js';

const router = express.Router();

// GET all skill categories
router.get('/', async (req, res) => {
  try {
    const skills = await Skill.find().sort({ order: 1, createdAt: -1 });
    res.json({ success: true, data: skills });
  } catch (error) {
    console.error('Error fetching skills:', error);
    res.status(500).json({ success: false, message: 'Error fetching skills' });
  }
});

// GET single skill category
router.get('/:id', async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);
    if (!skill) {
      return res.status(404).json({ success: false, message: 'Skill category not found' });
    }
    res.json({ success: true, data: skill });
  } catch (error) {
    console.error('Error fetching skill:', error);
    res.status(500).json({ success: false, message: 'Error fetching skill' });
  }
});

// CREATE skill category (protected)
router.post('/', authenticate, async (req, res) => {
  try {
    const skill = await Skill.create(req.body);
    res.status(201).json({ success: true, data: skill });
  } catch (error) {
    console.error('Error creating skill:', error);
    res.status(500).json({ success: false, message: 'Error creating skill' });
  }
});

// UPDATE skill category (protected)
router.put('/:id', authenticate, async (req, res) => {
  try {
    const skill = await Skill.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!skill) {
      return res.status(404).json({ success: false, message: 'Skill category not found' });
    }

    res.json({ success: true, data: skill });
  } catch (error) {
    console.error('Error updating skill:', error);
    res.status(500).json({ success: false, message: 'Error updating skill' });
  }
});

// DELETE skill category (protected)
router.delete('/:id', authenticate, async (req, res) => {
  try {
    const skill = await Skill.findByIdAndDelete(req.params.id);

    if (!skill) {
      return res.status(404).json({ success: false, message: 'Skill category not found' });
    }

    res.json({ success: true, message: 'Skill category deleted successfully' });
  } catch (error) {
    console.error('Error deleting skill:', error);
    res.status(500).json({ success: false, message: 'Error deleting skill' });
  }
});

export default router;

