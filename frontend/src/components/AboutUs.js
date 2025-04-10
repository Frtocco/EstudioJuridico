import React from 'react';

function AboutUs() {
  return (
    <div className="flex items-center justify-center p-10">
      <div className="max-w-4xl w-full flex items-center">
        <div className="w-1/2">
          <img 
            src="" 
            alt="Equipo de abogados" 
            className="w-full h-auto rounded-lg"
          />
        </div>

        <div className="w-1/2 pl-10">
          <h1 className="text-3xl font-bold mb-4">Nosotros</h1>
          <p className="text-lg mb-2">
            En el estudio jurídico Tocco, contamos con un pequeño equipo de abogados con amplia experiencia en...
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
