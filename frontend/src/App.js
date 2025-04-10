import react from 'react';
import Navbar from './components/Navbar.js'
import AreaPracticaCard from './components/AreaPractica.js'
import AboutUs from './components/AboutUs.js';
import MainLanding from './components/MainLanding.js';
import Quote from './components/quote.js';



function App() {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <MainLanding/>
      <div>
        <Quote/>
      </div>
      <div id="nosotros">
        <AboutUs/>
      </div>      
      <div id="areas-practica" className="space-y-2">
        <h1 className="text-center mt-10 text-2xl font-semibold">Áreas de práctica</h1>
        <p> Lorem Ipsum dolor sit amet </p>
      </div>
    </div>
  );
}

export default App;


