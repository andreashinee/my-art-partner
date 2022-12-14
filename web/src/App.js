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
  LoginScreen,
} from "./screens";
import SingleShow from "./components/shows/SingleShow";
import SingleUser from "./components/users/SingleUser"

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
          <Route path="/shows/:id" element={<SingleShow />} />
          <Route path="/user/:id" element={<SingleUser />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
