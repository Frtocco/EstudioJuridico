import react from 'react';
import Navbar from './components/Navbar.js'
import AreaPracticaCard from './components/AreaPractica.js'
import AboutUs from './components/AboutUs.js';
import MainLanding from './components/MainLanding.js';
import Quote from './components/quote.js';
import AreasDePractica from './components/AreasDePractica.js'



function App() {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <MainLanding/>
      <Quote/>
      <AboutUs/>
      <AreasDePractica/>
    </div>
  );
}

export default App;


