import React from 'react';
import LoadData from './Component/LoadData/LoadData';
import Navbar from './Component/NavBar/Navbar';
import './App.css'

function App() {
  return (
    <div className='container'>
     <Navbar/>
     <LoadData/>
    </div>
  );
}

export default App;
