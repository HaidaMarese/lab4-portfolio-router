import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) return <p className="p-6 text-red-500">Project not found.</p>;

  return (
    <motion.div
      className="p-6"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-3xl mb-2">{project.title}</h2>
      <p>{project.content}</p>
    </motion.div>
  );
};

export default ProjectDetail;
