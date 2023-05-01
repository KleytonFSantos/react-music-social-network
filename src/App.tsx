import { Navigate, Route, Router, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { ForgetPassword } from "./pages/ForgetPassword";
import { EditProfile } from "./pages/EditProfile";
import { PrivateRoute } from "./components/PrivateRoute";
import { PublicRoute } from "./components/PublicRoute";
import { AddSong } from "./pages/AddSong";
import { DeleteSong } from "./pages/DeleteSong";

function App() {
  return (
    <Routes>
      
      <Route path="/" element={<Home />} />

      <Route path="/" element={<PrivateRoute />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/add-song" element={<AddSong />} />
        <Route path="/delete-song" element={<DeleteSong />} />
      </Route>

      <Route path="/" element={<PublicRoute />}>
        <Route path="/retrieve-password" element={<ForgetPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>

    </Routes>
  );
}

export default App;
