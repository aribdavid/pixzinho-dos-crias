import React, { useContext } from 'react';
import myContext from '../context/myContext';

export default function NavBar() {
  const { setFilter } = useContext(myContext);
  return (
    <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
      <button type="button" onClick={() => setFilter('Seda')} className="leading-relaxed font-extrabold text-3xl text-palette-primary py-2 sm:py-4">
        Sedas
      </button>
      <button type="button" onClick={() => setFilter('Piteira')} className="leading-relaxed font-extrabold text-3xl text-palette-primary py-2 sm:py-4">
        Piteiras
      </button>
      <button type="button" onClick={() => setFilter('Dichavador')} className="leading-relaxed font-extrabold text-3xl text-palette-primary py-2 sm:py-4">
        Dichavadores
      </button>
    </div>
  );
}
