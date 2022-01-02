 
import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
 


function App() {
  //  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type,color)=>{
    setAlert({
      msg:message,
      type:type,
      color:color
    })
    setTimeout(()=>{
      setAlert(null)
    },1500
    );  
  }
  return (
   <>
   <Router>
   <Navbar title="Text Utils" home="home" about="about"/>
   <div className='container'>
   <Alert alert={alert}/>
   <Routes>
        <Route path="/" element={<TextForm showAlert={showAlert} heading="Text Transformation"/>} />
        <Route path="/about" element={<About />} />
   </Routes>
   </div>
   </Router>
   </>
  );
}

export default App;
