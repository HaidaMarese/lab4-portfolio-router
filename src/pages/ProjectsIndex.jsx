import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';

const ProjectsIndex = () => (
  <motion.div
    className="flex flex-col items-center justify-center h-[calc(100vh-96px)] text-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
  >
    <h2 className="text-4xl sm:text-5xl font-bold mb-8">My Projects</h2>
    <ul className="space-y-6 text-lg sm:text-xl font-medium">
      {projects.map((project) => (
        <li key={project.id}>
          <Link
            to={`/projects/${project.slug}`}
            className="text-blue-400 hover:text-blue-300 transition duration-200"
          >
            {project.title}
          </Link>
        </li>
      ))}
    </ul>
  </motion.div>
);

export default ProjectsIndex;

