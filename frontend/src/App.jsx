import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddCourse from "./pages/dashboardAdmin/AddCourse";
import AdminDashboard from "./pages/DashboardAdmin/AdminDashboard";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Box minH="100vh">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/addcourse" element={<AddCourse />} />
      </Routes>
    </Box>
  );
}

export default App;
