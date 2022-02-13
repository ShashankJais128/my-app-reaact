import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null)
      }, 2000);
  }


  const toggleModeBlue = ()=>{
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = '#2f4562';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }

  }
  const toggleModeGreen = ()=>{
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = 'green';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }

  }
  const toggleModeRed = ()=>{
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = 'red';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }

  }
  return (
    
    <>

      <Router>
      <Navbar title="Text-Utis" aboutText="About us" mode={mode} toggleModeBlue={toggleModeBlue} toggleModeGreen={toggleModeGreen} toggleModeRed={toggleModeRed}/>
      <Alert alert={alert} />
      <div className='container my-3'>
      <Routes>
          <Route exact path="/about" element={<About mode={mode} />}>
          </Route>
          <Route exact path="/" element={<TextForms showAlert={showAlert} heading="Your text to analyze" mode={mode} />}>
          </Route>
      </Routes>
      {/* <TextForms showAlert={showAlert} heading="Your text to analyze" mode={mode} /> */}
      </div>
     </Router>
    
    </>


  );
}

export default App;
