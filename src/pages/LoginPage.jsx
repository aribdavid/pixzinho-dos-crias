import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo6 from '../images/resources/logo6.png';
import logo5 from '../images/resources/logo5.jpg';

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <body className="bg-palette-secondary font-family-karla h-screen">

      <div className="w-full flex flex-wrap">
        <div className="w-full md:w-1/2 flex flex-col">

          <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
            <button type="button" onClick={() => navigate('/')} className="text-white font-bold text-xl p-4"><img src={logo6} width="150" alt="logo" /></button>
          </div>

          <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <p className="text-center text-3xl font-bold text-palette-primary">Bem Vindo!</p>
            <form className="flex flex-col pt-3 md:pt-8">
              <div className="flex flex-col pt-4">
                <span htmlFor="email" className="text-lg text-palette-primary font-bold">Email</span>
                <input type="email" id="email" placeholder="your@email.com" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
              </div>

              <div className="flex flex-col pt-4">
                <span htmlFor="password" className="text-lg text-palette-primary font-bold">Senha</span>
                <input type="password" id="password" placeholder="Password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
              </div>

              <button
                type="button"
                className="pt-3 pb-2 bg-palette-primary text-white w-full mt-2 rounded-sm font-primary font-semibold text-xl flex
        justify-center items-baseline  hover:bg-palette-light hover:text-palette-primary"
              >
                Log In
              </button>
            </form>
            <div className="text-center pt-12 pb-12 text-palette-primary font-semibold">
              <p>
                Não possui uma conta?
                {' '}
                <button type="button" onClick={() => navigate('/signup')} className="underline font-semibold">Registre aqui.</button>
              </p>
            </div>
          </div>

        </div>
        <div className="w-1/2 shadow-2xl">
          <img className="object-cover w-full h-screen hidden md:block" src={logo5} alt="img" />
        </div>
      </div>

    </body>
  );
}
