
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from "./components/navbar/Nabar";
import { Inicio } from './components/cuerpos/inicio';
import { ArticulosProvider } from './components/context/providerArticulos';

function App() {

  const cuerpoRender = ["Ropa Interior", "Trajes de Baños"];
  const [cuerpo, setCuerpo] = useState('Trajes de Baños');



  return (

    <div className="App">
      <Router>
        <ArticulosProvider>
          <Navbar cuerpo={cuerpo} setCuerpo={setCuerpo} cuerpoRender={cuerpoRender} />
          <Inicio cuerpo={cuerpo} setCuerpo={setCuerpo} cuerpoRender={cuerpoRender} />

        </ArticulosProvider>
      </Router>

    </div>

  );
}

export default App;
