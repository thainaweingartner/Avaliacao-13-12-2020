import React from 'react';
import { Link } from 'react-router-dom';

import { Foot } from './styles';
import logoWhite from '../../assets/5rs-logo-white.svg';
import Face from '../../assets/facebookIcon.svg';
import Insta from '../../assets/instagramIcon.svg';
import EmailIcon from '@material-ui/icons/Email';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

export default function Footer() {

  return (
    <Foot>
      <div className="content">
        <div className="contact">
          <h3>CONTATO</h3>
          <p><EmailIcon /> contato.fivers@gmail.com</p>
          <p><WhatsAppIcon /> +55 84 994592656</p>
          <div className="social">
            <a href="http://www.facebook.com/loja5rs" target="blanck">
              <img src={Face} alt="Facebook 5Rs"/>
            </a>
            <a href="http://www.instagram.com/loja5rs" target="blanck">
              <img src={Insta} alt="Instagram 5Rs"/>
            </a>
          </div>
        </div>
        <Link to="/">
          <img src={logoWhite} alt="Logo 5Rs" />
        </Link>
      </div>
      <p>Todos os direitos reservados &copy; 5Rs 2020</p>
    </Foot>
  );
};