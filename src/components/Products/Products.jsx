import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
// import useStyles from './styles';
import useStyles from './styles';

// const products = [
//   {
//     id: 1,
//     name: 'IPhone',
//     description: 'Mobile Phone',
//     price: '$50',
//     image:
//       'https://images.unsplash.com/photo-1505156868547-9b49f4df4e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1016&q=80',
//   },
//   {
//     id: 2,
//     name: 'MacBook',
//     description: 'Apple Macbook',
//     price: '$100',
//     image:
//       'https://images.unsplash.com/photo-1514342959091-2bffd8a7c4ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
//   },
//   {
//     id: 3,
//     name: 'Shoes',
//     description: 'Running Shoes',
//     price: '$20',
//     image:
//       'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
//   },
//   {
//     id: 4,
//     name: 'Belts',
//     description: 'Trouser Belts',
//     price: '$9',
//     image:
//       'https://images.unsplash.com/photo-1624222247344-550fb60583dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
//   },
//   {
//     id: 5,
//     name: 'Wallet',
//     description: 'Leather Wallet',
//     price: '$12',
//     image:
//       'https://images.unsplash.com/photo-1626151453023-f56216bfc923?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
//   },
// ];

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
