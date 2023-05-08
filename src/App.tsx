import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { ForgetPassword } from "./pages/ForgetPassword";
import { EditProfile } from "./pages/EditProfile";
import { AddSong } from "./pages/AddSong";
import { DeleteSong } from "./pages/DeleteSong";
import { useUser } from "./hooks/useUserContext";

function App() {
  const user = useUser();

  if (user.authenticated && (window.location.pathname === "/login" || window.location.pathname === "/register")) {
    return <Navigate to="/profile" replace />;
  }


  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/profile" element={<Profile />} />
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="/add-song" element={<AddSong />} />
      <Route path="/delete-song" element={<DeleteSong />} />

      <Route path="/retrieve-password" element={<ForgetPassword />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
