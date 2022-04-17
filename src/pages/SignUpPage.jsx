import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import logo2 from '../images/resources/logo2.png';
import GoToMainBtn from '../components/GoToMainBtn';
import myContext from '../context/myContext';

export default function SignUpPage() {
  const {
    setLogin,
    nome,
    setNome,
    email,
    setEmail,
    senha,
    setSenha,
  } = useContext(myContext);
  const navigate = useNavigate();
  const handleSubmit = () => {
    localStorage.setItem('userInfo', JSON.stringify({
      nome, email, senha,
    }));
    setLogin(true);
    navigate('/');
  };

  return (
    <form className="min-w-screen min-h-screen bg-palette-primary flex items-center justify-center px-5 py-5">
      <div className="bg-palette-light text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden">
        <div className="md:flex w-full">
          <div className="hidden md:block w-1/2 bg-palette-secondary py-10 px-10">
            <img src={logo2} alt="logo2" />
          </div>
          <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
            <div className="text-center mb-10">
              <h1 className="font-bold text-3xl text-palette-primary">Registre-se</h1>
              <p>Digite suas informações para registrar</p>
            </div>
            <div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <span htmlFor="" className="text-xs font-semibold px-1">Nome Completo</span>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg" /></div>
                    <input type="text" value={nome} onChange={({ target }) => setNome(target.value)} className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Bezerra da Silva" />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <span htmlFor="" className="text-xs font-semibold px-1">Email</span>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg" /></div>
                    <input type="email" value={email} onChange={({ target }) => setEmail(target.value)} className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="bezerradoscrias@email.com" />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-12">
                  <span htmlFor="" className="text-xs font-semibold px-1">Senha</span>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg" /></div>
                    <input type="password" value={senha} onChange={({ target }) => setSenha(target.value)} className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************" />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <button type="button" onClick={() => handleSubmit()} className="block w-full mb-2 max-w-xs mx-auto bg-palette-primary hover:bg-palette-secondary focus:bg-palette-secondary text-white rounded-lg px-3 py-3 font-semibold">REGISTRE AGORA</button>
                  <div className="text-center pt-12 pb-12 text-palette-primary font-semibold">
                    <p>
                      Já possui uma conta?
                      {' '}
                      <button type="button" onClick={() => navigate('/login')} className="underline font-semibold">Entre aqui.</button>
                    </p>
                  </div>
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
