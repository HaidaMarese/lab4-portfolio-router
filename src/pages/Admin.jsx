import { motion } from 'framer-motion';

const Admin = () => (
  <motion.div
    className="p-6 text-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    <h2 className="text-3xl mb-2">Admin Dashboard</h2>
    <p>Only visible to logged-in users.</p>
  </motion.div>
);

export default Admin;
