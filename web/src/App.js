import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import NavBar from "./components/navbar/NavBar";
import {
  DiscoverScreenShows,
  CreateShowScreen,
  Home,
  AboutUs,
  DiscoverScreenUsers,
  CreateUserScreen,
  LoginScreen
} from "./screens";


function AuthGuard({ children }) {
  const { registerUser } = useContext(AuthContext);

  if (!registerUser) {
    return <Navigate to="/login" />;
  }

  return children;
}





function App() {
  return (
    <>
      <NavBar />

      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shows" element={<DiscoverScreenShows />} />
          <Route path="/AddShow" element={<CreateShowScreen />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/partners" element={<DiscoverScreenUsers />} />
          <Route path="/Register" element={<CreateUserScreen />} />
          <Route path="/login" element={<LoginScreen />} />

        </Routes>
      </div>
    </>
  );
}

export default App;
