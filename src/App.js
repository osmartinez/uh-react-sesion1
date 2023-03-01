import logo from './logo.svg';
import './App.css';
import Input from './components/Input/Input';
import { useState } from 'react';

function App() {
  // let msg = "hola"
  const [msg, setMsg] = useState("hola") 

  function cambiarMensaje(nuevoMensaje){
    setMsg(nuevoMensaje)
  }

  return (
    <div className="App">
      <span>{msg}</span>
      <Input mensaje1={msg} handleCambiarMensaje={cambiarMensaje} />
    </div>
  );
}

export default App;
