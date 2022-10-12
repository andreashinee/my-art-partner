import { Routes, Route } from 'react-router-dom'
import NavBar from './components/navbar/NavBar';
import DiscoverScreenShows from './screens/discover/DiscoverScreenShows';



function App() {
  return (
  <>
    <NavBar/>

    <div className="App">
      <Routes>
       <Route path='/' element={<DiscoverScreenShows />} />
      </Routes>
   </div>
  </>
  
  );
}

export default App;
