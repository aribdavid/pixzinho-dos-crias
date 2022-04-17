import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import GoToMainBtn from '../components/GoToMainBtn';
import myContext from '../context/myContext';

export default function ProfilePage() {
  const { setLogin } = useContext(myContext);
  const { nome, sobrenome, email } = JSON.parse(localStorage.getItem('userInfo'));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    setLogin(false);
    navigate('/');
  };
  return (
    <form className="min-w-screen min-h-screen bg-palette-primary flex items-center justify-center px-5 py-5">
      <div className="bg-palette-light text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden">
        <div className="md:flex w-full flex">
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
                  <button
                    onClick={() => handleLogout()}
                    type="button"
                    aria-label="back-to-products"
                    className=" mb-6 pt-3 pb-2 bg-palette-primary text-white w-full mt-2 rounded-sm font-primary font-semibold text-xl flex
                    justify-center items-baseline  hover:bg-palette-secondary"
                  >
                    <FontAwesomeIcon icon={faSignOut} className="w-4 mr-2 inline-flex" />
                    Deslogar
                  </button>
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
