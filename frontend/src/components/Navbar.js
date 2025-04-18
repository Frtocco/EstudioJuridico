import React from 'react';
import '../index.css';

function Navbar() {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        };
    return (
        <div className="flex items-center w-full navbar mainColor">
            <div className="w-1/3">
            </div>

            <ul className="w-1/3 flex justify-center space-x-8 text-lg font-medium text-gray-700">
                <li className="cursor-pointer" onClick={() => scrollToSection('inicio')}>Inicio</li>
                <li className="cursor-pointer" onClick={() => scrollToSection('nosotros')}>Nosotros</li>
                <li className="cursor-pointer" onClick={() => scrollToSection('areas-practica')}>Áreas de práctica</li>
            </ul>

            <div className="w-1/3 flex justify-end p-4">
                <button className="px-5 py-2 border-2 rounded-md text-black hover:bg-blue-600">
                    Contáctanos
                </button>
            </div>
        </div>
    );
}

export default Navbar;
