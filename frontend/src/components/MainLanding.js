import React from "react"
import justice from '../images/justice.jpg';

function MainLanding(){
    return(
    <div id="inicio" className="relative h-[35rem] w-full">
        <div 
          className="absolute inset-0 bg-cover"
          style={{ backgroundImage: `url(${justice})` }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 flex justify-center pt-20">
          <div className='flex flex-col'>
            <h1 className="text-white text-5xl font-bold"> Estudio jurídico Tocco y Asociados</h1>
            <p className='text-white text-2xl text-center'> Con mas de 30 años de experiencia ayudando a la comunidad </p>
        </div>
    </div>
</div>
);}

export default MainLanding;