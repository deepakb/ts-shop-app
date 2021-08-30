import React from 'react';
import Container from '@material-ui/core/Container';
import Header from '../header/Header';
import ProductList from '../product/ProductList';

import { CartProvider } from '../../context/cart-context';

const App: React.FC = (): JSX.Element => (
  <CartProvider>
    <Container>
      <Header />
      <ProductList />
    </Container>
  </CartProvider>
);

export default App;
