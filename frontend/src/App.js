import react from 'react';
import Navbar from './components/Navbar.js'
import AreaPracticaCard from './components/AreaPractica.js'
import AboutUs from './components/AboutUs.js';
import justice from './images/justice.jpg';


function App() {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <div id="inicio" className="relative h-[47.5rem] w-full">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${justice})` }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-75"></div>
        <div className="relative z-10 flex justify-center pt-20">
          <div className='flex flex-col'>
            <h1 className="text-white text-5xl font-bold"> Estudio jurídico Tocco y Asociados</h1>
            <p className='text-white text-2xl text-center'> Con mas de 30 años de experiencia ayudando a la comunidad </p>
          </div>
        </div>
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


