import express from 'express';
import Contact from '../models/Contact.model.js';
import { authenticate } from '../middleware/auth.middleware.js';

const router = express.Router();

// GET contact data
router.get('/', async (req, res) => {
  try {
    const contact = await Contact.getContact();
    res.json({ success: true, data: contact });
  } catch (error) {
    console.error('Error fetching contact:', error);
    res.status(500).json({ success: false, message: 'Error fetching contact data' });
  }
});

// UPDATE contact data (protected)
router.put('/', authenticate, async (req, res) => {
  try {
    let contact = await Contact.findOne();
    
    if (!contact) {
      contact = await Contact.getContact();
    }

    const updatedContact = await Contact.findByIdAndUpdate(
      contact._id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    res.json({ success: true, data: updatedContact });
  } catch (error) {
    console.error('Error updating contact:', error);
    res.status(500).json({ success: false, message: 'Error updating contact data' });
  }
});

export default router;

