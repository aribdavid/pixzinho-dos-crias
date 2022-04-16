import React, { useContext } from 'react';
import myContext from '../context/myContext';

export default function NavBar() {
  const { setFilter } = useContext(myContext);
  return (
    <div className="w-full mt-5 container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
      <button type="button" onClick={() => setFilter('Seda')} className="bg-opacity-80  px-2 shadow-xl bg-palette-light rounded leading-3 border-2 border-palette-primary leading-relaxed rounded-sm font-bold text-2xl text-palette-primary py-2 sm:py-4 focus:ring-1 focus:ring-palette-light focus:outline-none hover:bg-palette-primary hover:text-white rounded-sm">
        Sedas
      </button>
      <button type="button" onClick={() => setFilter('Piteira')} className="bg-opacity-80   px-2 shadow-xl bg-palette-light rounded leading-3 border-2 border-palette-primary leading-relaxed font-bold text-2xl text-palette-primary py-2 sm:py-4 focus:ring-1 focus:ring-palette-light focus:outline-none hover:bg-palette-primary hover:text-white rounded-sm">
        Blunts
      </button>
      <button type="button" onClick={() => setFilter('Blunt')} className="bg-opacity-80  px-2 shadow-xl bg-palette-light rounded leading-3 border-2 border-palette-primary leading-relaxed rounded-sm font-bold text-2xl text-palette-primary py-2 sm:py-4 focus:ring-1 focus:ring-palette-light focus:outline-none hover:bg-palette-primary hover:text-white rounded-sm">
        Acessórios
      </button>
      <button type="button" onClick={() => setFilter('Dichavador')} className="bg-opacity-80 px-2 shadow-xl bg-palette-light rounded leading-3 border-2 border-palette-primary leading-relaxed rounded-sm font-bold text-2xl text-palette-primary py-2 sm:py-4 focus:ring-1 focus:ring-palette-light focus:outline-none hover:bg-palette-primary hover:text-white rounded-sm">
        Dichavadores
      </button>
      <button type="button" onClick={() => setFilter('Isqueiro')} className="bg-opacity-80 px-2 shadow-xl bg-palette-light rounded leading-3 border-2 border-palette-primary leading-relaxed rounded-sm font-bold text-2xl text-palette-primary py-2 sm:py-4 focus:ring-1 focus:ring-palette-light focus:outline-none hover:bg-palette-primary hover:text-white rounded-sm">
        Isqueiros
      </button>
      <button type="button" onClick={() => setFilter('Tabaco')} className="bg-opacity-80 px-2 shadow-xl bg-palette-light rounded leading-3 border-2 border-palette-primary leading-relaxed rounded-sm font-bold text-2xl text-palette-primary py-2 sm:py-4 focus:ring-1 focus:ring-palette-light focus:outline-none hover:bg-palette-primary hover:text-white rounded-sm">
        Tabacos
      </button>
      <button type="button" onClick={() => setFilter('Roupas')} className="bg-opacity-80 px-2 shadow-xl bg-palette-light rounded leading-3 border-2 border-palette-primary leading-relaxed rounded-sm font-bold text-2xl text-palette-primary py-2 sm:py-4 focus:ring-1 focus:ring-palette-light focus:outline-none hover:bg-palette-primary hover:text-white rounded-sm">
        Roupas
      </button>
      <button type="button" onClick={() => setFilter('Kit')} className="bg-opacity-80 px-2 shadow-xl bg-palette-light rounded leading-3 border-2 border-palette-primary leading-relaxed rounded-sm font-bold text-2xl text-palette-primary py-2 sm:py-4 focus:ring-1 focus:ring-palette-light focus:outline-none hover:bg-palette-primary hover:text-white rounded-sm">
        Kits
      </button>
      <button type="button" onClick={() => setFilter('Mais Vendidos')} className="bg-opacity-80 px-2 shadow-xl bg-palette-light rounded leading-3 border-2 border-palette-primary leading-relaxed rounded-sm font-bold text-2xl text-palette-primary py-2 sm:py-4 focus:ring-1 focus:ring-palette-light focus:outline-none hover:bg-palette-primary hover:text-white rounded-sm">
        Mais Vendidos
      </button>
    </div>
  );
}
