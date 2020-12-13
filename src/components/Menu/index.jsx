import React from 'react';
import { Link } from 'react-router-dom';

import { Header } from './styles';
import logo from '../../assets/5rs-logo.svg';


export default function Menu() {

  return (
    <Header>
      <Link to="/">
        <img src={logo} alt="Logo 5Rs" />
      </Link>
      <nav className="menu">
        <button> Canudos e Copos </button>
        <button> Textil </button>
        <button> Higiene </button>
        <button> Bags </button>
      </nav>
    </Header>
  );
};
