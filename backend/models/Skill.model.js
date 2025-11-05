import mongoose from 'mongoose';

const skillItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  icon: { type: String, required: true }, // Icon name from react-icons
  level: { type: Number, required: true, min: 0, max: 100 },
  color: { type: String, required: true },
});

const skillCategorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  color: { type: String, required: true }, // Gradient colors like 'from-blue-500 to-purple-600'
  skills: [skillItemSchema],
  order: { type: Number, default: 0 },
}, {
  timestamps: true,
});

const Skill = mongoose.model('Skill', skillCategorySchema);

export default Skill;

