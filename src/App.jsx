import { Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Landing from "./components/LandingPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />      
      <Route path="/login" element={<Login />} />  
      <Route path="/register" element={<Register />} /> 

    </Routes>
  );
}

export default App;