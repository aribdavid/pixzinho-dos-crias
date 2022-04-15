import React from 'react';

export default function ProductCard() {
  return (
    <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
      <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Product</h4>
      <img
        className="hover:grow hover:shadow-lg"
        src="https://images.tcdn.com.br/img/img_prod/952861/seda_smoking_brown_king_size_un_7662_1_24e51025fa91703db425df9b201282f5.jpg"
        alt="seda Brown"
      />
      <div className="pt-3 flex items-center justify-between">
        <span>
          Seda Brown
        </span>
        <div />
      </div>
    </div>
  );
}
