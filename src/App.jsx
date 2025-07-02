import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 
import ProjectsIndex from "./pages/ProjectsIndex";
import ProjectDetail from "./pages/ProjectDetail";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./routes/ProtectedRoute";

const App = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans">
      <Navbar />
      <main className="flex-grow max-w-4xl mx-auto px-6">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <div className="flex items-center justify-center h-[calc(100vh-144px)]">
                  <h1 className="text-5xl sm:text-6xl font-extrabold text-center text-white drop-shadow-lg">
                    Welcome to My Portfolio
                  </h1>
                </div>
              }
            />
            <Route path="/projects" element={<ProjectsIndex />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>

      {/* ✅ Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default App;
