import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/admin");
  };

  return (
    <motion.div
      className="flex items-center justify-center h-[calc(100vh-96px)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="bg-gray-800 p-10 rounded-lg shadow-lg text-center w-full max-w-md">
        <h2 className="text-3xl font-semibold mb-6 text-white">Login</h2>
        <button
          onClick={handleLogin}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded text-lg transition"
        >
          Log In
        </button>
      </div>
    </motion.div>
  );
};

export default Login;
