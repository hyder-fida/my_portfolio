import mongoose from 'mongoose';

const technologySchema = new mongoose.Schema({
  icon: { type: String, required: true }, // Icon name from react-icons
  name: { type: String, required: true },
  color: { type: String, required: true },
});

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  technologies: [technologySchema],
  github: { type: String },
  live: { type: String },
  featured: { type: Boolean, default: false },
  category: { type: String, required: true },
  stats: {
    stars: { type: Number, default: 0 },
    views: { type: Number, default: 0 },
  },
  order: { type: Number, default: 0 },
}, {
  timestamps: true,
});

const Project = mongoose.model('Project', projectSchema);

export default Project;

