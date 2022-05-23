
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert'; 


function App() { 
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

    const showAlert =(message,type)=>{
      setAlert({
        message:message,
      type: type
     
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
    const toggleMode = () => {
      if (mode === 'light') {
          setMode('dark');
          document.body.style.backgroundColor = '#060617';
          showAlert("Darkmode Enabled","success")
      }
      else {
          setMode('light');
          document.body.style.backgroundColor = 'white';
          showAlert("Lightmode enabled","success")
      }
  };
  return (
    <>
 
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className="container my-3">
{ <TextForm showAlert={showAlert} heading="Enter text here to analyse" mode={mode}/> }
{/* <About/> */}
</div>
 </>
  );
}

export default App;
