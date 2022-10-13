import { Routes, Route } from 'react-router-dom'
import NavBar from './components/navbar/NavBar';
import {DiscoverScreenShows, CreateShowScreen, Home } from './screens';



function App() {
  return (
  <>
    <NavBar/>

    <div className="App">
      <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/Shows' element={<DiscoverScreenShows />} />
       <Route path='/AddShow' element={<CreateShowScreen />} />
      </Routes>
   </div>
  </>
  
  );
}

export default App;
