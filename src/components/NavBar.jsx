import React, { useContext } from 'react';
import myContext from '../context/myContext';

export default function NavBar() {
  const { setFilter } = useContext(myContext);
  return (
    <div className="w-full container  mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
      <button type="button" onClick={() => setFilter('Seda')} className="leading-relaxed font-extrabold text-2xl text-palette-primary py-2 sm:py-4 focus:ring-1 focus:ring-palette-light focus:outline-none hover:bg-palette-primary hover:text-white rounded-sm">
        Sedas
      </button>
      <button type="button" onClick={() => setFilter('Piteira')} className="leading-relaxed font-extrabold text-2xl text-palette-primary py-2 sm:py-4 focus:ring-1 focus:ring-palette-light focus:outline-none hover:bg-palette-primary hover:text-white rounded-sm">
        Blunts
      </button>
      <button type="button" onClick={() => setFilter('Blunt')} className="leading-relaxed font-extrabold text-2xl text-palette-primary py-2 sm:py-4 focus:ring-1 focus:ring-palette-light focus:outline-none hover:bg-palette-primary hover:text-white rounded-sm">
        Acessórios
      </button>
      <button type="button" onClick={() => setFilter('Dichavador')} className="leading-relaxed font-extrabold text-2xl text-palette-primary py-2 sm:py-4 focus:ring-1 focus:ring-palette-light focus:outline-none hover:bg-palette-primary hover:text-white rounded-sm">
        Dichavadores
      </button>
      <button type="button" onClick={() => setFilter('Isqueiro')} className="leading-relaxed font-extrabold text-2xl text-palette-primary py-2 sm:py-4 focus:ring-1 focus:ring-palette-light focus:outline-none hover:bg-palette-primary hover:text-white rounded-sm">
        Isqueiros
      </button>
      <button type="button" onClick={() => setFilter('Tabaco')} className="leading-relaxed font-extrabold text-2xl text-palette-primary py-2 sm:py-4 focus:ring-1 focus:ring-palette-light focus:outline-none hover:bg-palette-primary hover:text-white rounded-sm">
        Tabacos
      </button>
      <button type="button" onClick={() => setFilter('Roupas')} className="leading-relaxed font-extrabold text-2xl text-palette-primary py-2 sm:py-4 focus:ring-1 focus:ring-palette-light focus:outline-none hover:bg-palette-primary hover:text-white rounded-sm">
        Roupas
      </button>
      <button type="button" onClick={() => setFilter('Kit')} className="leading-relaxed font-extrabold text-2xl text-palette-primary py-2 sm:py-4 focus:ring-1 focus:ring-palette-light focus:outline-none hover:bg-palette-primary hover:text-white rounded-sm">
        Kits
      </button>
      <button type="button" onClick={() => setFilter('Mais Vendidos')} className="leading-relaxed font-extrabold text-2xl text-palette-primary py-2 sm:py-4 focus:ring-1 focus:ring-palette-light focus:outline-none hover:bg-palette-primary hover:text-white rounded-sm">
        Mais Vendidos
      </button>
    </div>
  );
}
