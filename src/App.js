import React, {useState} from 'react';
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import SharedLayout from './components/SharedLayout/SharedLayout';
import About from './components/About/About'
import Predict from './components/Predict/Predict';
import Sidebar from './components/Sidebar/Sidebar';
import HamIcon2 from './components/HamBurger/HamIcon';


const App = () => {


  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open)
  }

  return (
    <>
   
    
    <Router>
    <Sidebar toggle={toggle} open={open}/>
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
          <Route index element={<About/>} />
          <Route path='/predict' element={<Predict/>}/>
        </Route>
      </Routes>
    </Router>
    <HamIcon2 toggle={toggle} open={open}/>
    </>
  )
}

export default App