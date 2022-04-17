import React, { useContext } from 'react';
import myContext from '../context/myContext';

export default function NavBar() {
  const { setFilter } = useContext(myContext);
  return (
    <div className="w-full mt-5 container mx-auto flex flex-wrap items-center justify-between mt-5 px-2 py-3">
      <button type="button" onClick={() => setFilter('Seda')} className="hover:scale-110 bg-opacity-80  px-2 shadow-xl bg-palette-light rounded leading-3 border-2 border-palette-primary leading-relaxed rounded-xl font-bold text-base text-palette-primary py-2 sm:py-4 focus:ring-1 focus:ring-palette-light focus:outline-none hover:bg-palette-primary hover:text-white rounded-xl">
        Sedas
      </button>
      <button type="button" onClick={() => setFilter('Blunt')} className="hover:scale-110 bg-opacity-80   px-2 shadow-xl bg-palette-light rounded leading-3 border-2 border-palette-primary leading-relaxed font-bold text-base text-palette-primary py-2 sm:py-4 focus:ring-1 focus:ring-palette-light focus:outline-none hover:bg-palette-primary hover:text-white rounded-xl">
        Blunts
      </button>
      <button type="button" onClick={() => setFilter('Acessorio')} className="hover:scale-110 bg-opacity-80  px-2 shadow-xl bg-palette-light rounded leading-3 border-2 border-palette-primary leading-relaxed rounded-xl font-bold text-base text-palette-primary py-2 sm:py-4 focus:ring-1 focus:ring-palette-light focus:outline-none hover:bg-palette-primary hover:text-white rounded-xl">
        Acessórios
      </button>
      <button type="button" onClick={() => setFilter('Dichavador')} className="hover:scale-110 bg-opacity-80 px-2 shadow-xl bg-palette-light rounded leading-3 border-2 border-palette-primary leading-relaxed rounded-xl font-bold text-base text-palette-primary py-2 sm:py-4 focus:ring-1 focus:ring-palette-light focus:outline-none hover:bg-palette-primary hover:text-white rounded-xl">
        Dichavadores
      </button>
      <button type="button" onClick={() => setFilter('Isqueiro')} className="hover:scale-110 bg-opacity-80 px-2 shadow-xl bg-palette-light rounded leading-3 border-2 border-palette-primary leading-relaxed rounded-xl font-bold text-base text-palette-primary py-2 sm:py-4 focus:ring-1 focus:ring-palette-light focus:outline-none hover:bg-palette-primary hover:text-white rounded-xl">
        Isqueiros
      </button>
      <button type="button" onClick={() => setFilter('Tabaco')} className="hover:scale-110 bg-opacity-80 px-2 shadow-xl bg-palette-light rounded leading-3 border-2 border-palette-primary leading-relaxed rounded-xl font-bold text-base text-palette-primary py-2 sm:py-4 focus:ring-1 focus:ring-palette-light focus:outline-none hover:bg-palette-primary hover:text-white rounded-xl">
        Tabacos
      </button>
      <button type="button" onClick={() => setFilter('Roupa')} className="hover:scale-110 bg-opacity-80 px-2 shadow-xl bg-palette-light rounded leading-3 border-2 border-palette-primary leading-relaxed rounded-xl font-bold text-base text-palette-primary py-2 sm:py-4 focus:ring-1 focus:ring-palette-light focus:outline-none hover:bg-palette-primary hover:text-white rounded-xl">
        Roupas
      </button>
      <button type="button" onClick={() => setFilter('Kit')} className="hover:scale-110 bg-opacity-80 px-2 shadow-xl bg-palette-light rounded leading-3 border-2 border-palette-primary leading-relaxed rounded-xl font-bold text-base text-palette-primary py-2 sm:py-4 focus:ring-1 focus:ring-palette-light focus:outline-none hover:bg-palette-primary hover:text-white rounded-xl">
        Kits
      </button>
      <button type="button" onClick={() => setFilter('Mais Vendidos')} className="hover:scale-110 bg-opacity-80 px-2 shadow-xl bg-palette-light rounded leading-3 border-2 border-palette-primary leading-relaxed rounded-xl font-bold text-base text-palette-primary py-2 sm:py-4 focus:ring-1 focus:ring-palette-light focus:outline-none hover:bg-palette-primary hover:text-white rounded-xl">
        Mais Vendidos
      </button>
    </div>
  );
}
