import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="bg-gray-900 text-white shadow-md h-24">
      <nav className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        {/* Logo/Title on Left */}
        <h1 className="text-2xl sm:text-3xl font-extrabold">Haida's Portfolio</h1>

        {/* Nav Links on Right */}
        <div className="flex space-x-10 text-xl sm:text-2xl font-bold">
          <Link to="/" className="hover:text-blue-400 transition">Home</Link>
          <Link to="/projects" className="hover:text-blue-400 transition">Projects</Link>
          {isAuthenticated && (
            <Link to="/admin" className="hover:text-blue-400 transition">Admin</Link>
          )}
          {isAuthenticated ? (
            <button onClick={logout} className="text-red-400 hover:text-red-300">Log Out</button>
          ) : (
            <Link to="/login" className="text-blue-400 hover:text-blue-300 transition">Log In</Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
