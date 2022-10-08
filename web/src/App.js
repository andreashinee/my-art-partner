import { useEffect } from "react";
import "./App.css";
import { getPartners } from "./services/partner-service"

function App() {
  useEffect(() => {
    getPartners();
  }, []);
  return <div className="App"></div>;
}

export default App;
