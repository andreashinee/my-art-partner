import { useEffect } from 'react';
import './App.css';
import { getShows } from "./services/show-service"

function App() {
  useEffect(() => {
    getShows();
  }, [])


  return (<div className="App"></div>
  );
}

export default App;
