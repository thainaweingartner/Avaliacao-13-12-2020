import React from 'react';
import Menu from '../../components/Menu/index';
import Footer from '../../components/Footer/index';
import { Erro } from './styles';
import { Link } from 'react-router-dom';


export default function Error() {
  return (
    <>
      <Menu />
        <Erro>
          <h1> Rota não reconhecida</h1>
          <p class="zoom-area">A rota digitada não foi reconhecida, favor retorne a página inicial e tente novamente.</p>
          <section class="error-container">
            <span>4</span>
            <span><span class="screen-reader-text">0</span></span>
            <span>4</span>
          </section>
          <div class="link-container">
            <Link to="/" class="more-link">Retornar a página inicial</Link>
          </div>
        </Erro>
      <Footer />
    </>
  );
}
