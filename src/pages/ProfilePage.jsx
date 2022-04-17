import React from 'react';
import GoToMainBtn from '../components/GoToMainBtn';

export default function ProfilePage() {
  const { nome, sobrenome, email } = JSON.parse(localStorage.getItem('userInfo'));
  return (
    <form className="min-w-screen min-h-screen bg-palette-primary flex items-center justify-center px-5 py-5">
      <div className="bg-palette-light text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden">
        <div className="md:flex w-full">
          <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
            <div className="text-center mb-10">
              <h1 className="font-bold text-3xl text-palette-primary">Informações de Usuário</h1>
            </div>
            <div>
              <div className="flex -mx-3">
                <div className="w-1/2 px-3 mb-5">
                  <span htmlFor="" className="text-xs font-semibold px-1">Nome:</span>
                  <span>{nome}</span>
                </div>
                <div className="w-1/2 px-3 mb-5">
                  <span htmlFor="" className="text-xs font-semibold px-1">Sobrenome:</span>
                  <span>{sobrenome}</span>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <span htmlFor="" className="text-xs font-semibold px-1">Email:</span>
                  <span>{email}</span>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-12">
                  <span htmlFor="" className="text-xs font-semibold px-1">Endereço</span>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <GoToMainBtn />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
