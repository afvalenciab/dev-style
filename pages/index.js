import React from 'react';
import { Container, Grid } from '@material-ui/core';

import ProductList from 'components/ProductList';

const HomePage = () => {
  return (
    <Container maxWidth="xl">
      <Grid container>
        <ProductList />
      </Grid>
    </Container>
  );
};

export default HomePage;
