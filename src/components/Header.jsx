import React from 'react';

export default function Header() {
  return (
    <header>
      <nav>
        <section>
          <h1>
            <a href="/">Pixzinho dos Crias</a>
          </h1>
        </section>
        <ul>
          <li>
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
