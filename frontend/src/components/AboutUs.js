import React from 'react';
import profilePicture from '../images/profile.jpg'

function AboutUs() {
  return (
    <div className="flex items-center justify-center p-10 bg-[#e6e2d3] rounded-lg">
      <div className="flex items-center ">
        <div className="w-3/5">
          <img 
            src="" 
            alt="Equipo de abogados" 
            className="w-full h-auto rounded-lg"
          />
        </div>

        <div className="w-2/5 pl-10">
          <img
            src={profilePicture}
            alt='abogado'
            className="w-[12rem] h-auto rounded-full"
          />
          <h1 className="text-2xl font-bold mb-4 mt-10">Gabriel Tocco</h1>
          <p className="text-lg mb-2">
            Socio fundador del Estudio Juridico Dres. Gabriel Tocco y Asociados
          </p>
          <p className="text-lg">
            Tenemos más de 30 años de experiencia en el rubro, habiendo ayudado a varias personas...
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
