import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';

import ProductList from 'components/ProductList';

const HomePage = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('/api/shirt')
      .then(response => response.json())
      .then(data => setProductList(data?.items));
  }, []);

  return (
    <Container maxWidth="xl">
      <Grid container>
        <ProductList list={productList} />
      </Grid>
    </Container>
  );
};

export default HomePage;
