import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ProductTable } from './styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import { green, red } from '@material-ui/core/colors';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

export default function ProductsTable() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    axios
      .get('http://localhost:3000/productTable.json')
      .then(res => setProducts(res.data))
  }, []);

  return (
    <ProductTable>
      <TableContainer component={Paper}>
        <Table className="table" aria-label="customized table">
            <TableHead>
                <TableRow className="cabecalho">
                    <TableCell align="left">Pronta Entrega</TableCell>
                    <TableCell align="left"></TableCell>
                    <TableCell align="left">Produto</TableCell>
                    <TableCell align="left">Descrição</TableCell>
                    <TableCell align="left">Preço</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {products.map((product) => (
                    <TableRow key={product.id}>
                        <TableCell align="left">
                            {product.disponible === true ? <FiberManualRecordIcon style={{ color: green[500] }} /> : <FiberManualRecordIcon style={{ color: red[500] }} />}
                        </TableCell>
                        <TableCell align="left">
                            <img alt={product.name} src={product.image} />
                        </TableCell>
                        <TableCell align="left" className="title">{product.name}</TableCell>
                        <TableCell align="left" className="description">{product.description}</TableCell>
                        <TableCell align="left" className="price">{product.price}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
      </TableContainer>
    </ProductTable>
  );
}
