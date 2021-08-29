import React from 'react';
import Container from '@material-ui/core/Container';
import Header from '../header/Header';
import ProductList from '../product/ProductList';

const App: React.FC = (): JSX.Element => (
  <Container>
    <Header />
    <ProductList />
  </Container>
);

export default App;
