import { Routes, Route } from 'react-router-dom'
import { NavBar } from './components/navbar/NavBar'
import { DiscoverShow } from './components/shows/Shows'

function App() {
  return (
  <>
    <NavBar/>

    <div className="App">
      <Routes>
       <Route path='/' element={<DiscoverShow />} />
      </Routes>
   </div>
  </>
  
  );
}

export default App;
