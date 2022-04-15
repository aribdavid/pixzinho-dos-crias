import React from 'react';

export default function Header() {
  return (
    <header className="text-gray-600">
      <nav>
        <section>
          <h1>
            <a href="/">Pixzinho dos Crias</a>
          </h1>
        </section>
        <ul>
          <li className="text-gray-700">
            <a href="/">
              <span>tabacaria</span>
            </a>
          </li>
          <li>
            <a href="/">
              <span>Cervejaria</span>
            </a>
          </li>
          <li>
            <a href="/">
              <span>
                Carrinho
              </span>
            </a>
          </li>
          <li>
            <a href="/">
              <span>
                Meus Pedidos
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
