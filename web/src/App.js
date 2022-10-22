import { Routes, Route } from "react-router-dom";
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
