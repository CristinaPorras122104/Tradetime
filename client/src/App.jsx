import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/login";
import GetHelp from "./pages/GetHelp";
import HowItWorks from "./pages/HowItWorks";
import AddSkill from "./pages/AddSkill";
import Messages from "./pages/Messages";
import GetHelpResults from "./pages/GetHelpResults";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    <Route path="/messages" element={<Messages />} />
      <Route path="/add-skill" element={<AddSkill />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/get-help" element={<GetHelp />} />
      <Route path="/get-help/results" element={<GetHelpResults />} />
    </Routes>
  );
}