import React from 'react';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import Grid from '@material-ui/core/Grid';
import { useQuery } from 'react-query';
import Product from './Product';
import { ProductType } from './Product.types';
import Loader from '../Loader/Loader';
import { useStyles } from './Product.styles';

const fetchProducts = async (): Promise<ProductType[]> => {
  const products = await fetch('https://fakestoreapi.com/products');
  return products.json();
};

const useProducts = () => {
  return useQuery<ProductType[], Error>('groups', fetchProducts);
};

const Alert = (props: AlertProps): JSX.Element => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ProductList: React.FC = (): JSX.Element => {
  const classes = useStyles();
  const { status, data, error, isFetching } = useProducts();

  if (isFetching)  {
    return <Loader />;
  }

   if (error) {
    return <Alert severity="error">Something went wrong!</Alert>;
  }

  return (
    <React.Fragment>
      {status === 'success' && (
        <div className={classes.productList}>
          <Grid container spacing={1} className={classes.productContainer}>
            <Grid container item xs={12} spacing={3}>
              {data?.map(product => (
                <Product key={product.id} product={product} />
              ))}
            </Grid>
          </Grid>
        </div>
      )}
    </React.Fragment>
  );
};

export default ProductList;