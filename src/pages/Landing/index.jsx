import React from 'react';
import Menu from '../../components/Menu/index';
import Footer from '../../components/Footer/index';
import Banner from './Banner';
import ProductsTable from './ProductsTable';
import { Link } from 'react-router-dom';
import { Button } from './styles';

export default function Landing() {
  return (
    <>
      <Menu />
      <Banner />
      <ProductsTable />
      <Button>
        <Link to="/Contact">
        Clique aqui para receber uma amostra do produto
        </Link>
      </Button>
      <Footer />
    </>
  );
}
