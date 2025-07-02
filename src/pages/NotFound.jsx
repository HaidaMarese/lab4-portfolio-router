import { motion } from 'framer-motion';

const NotFound = () => (
  <motion.div
    className="p-6 text-center text-red-600"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    <h2 className="text-3xl">404 - Page Not Found</h2>
  </motion.div>
);

export default NotFound;
