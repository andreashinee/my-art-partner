import { Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { DiscoverShow } from './components/Shows'

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
