import './App.css';
import React from 'react';
import { Routes, Route} from 'react-router-dom'
import Name from './Components/Name';
import Counting from './Components/Counting';
import Onoff from './Components/Onoff'
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/> {Navbar}
        <Routes>
          <Route  path = "/" element={<Name/>} />
          <Route path = "/Count" element={<Counting/>} />
          <Route path = "/onoff" element={<Onoff/>} />
        </Routes>
    </div>
  );
}

export default App;
