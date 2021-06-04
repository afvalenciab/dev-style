import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid } from '@material-ui/core';

import { getAll } from 'database/db';
import ProductList from 'components/ProductList';

const HomePage = ({ productList }) => {
  return (
    <Container maxWidth="xl">
      <Grid container>
        <ProductList list={productList} />
      </Grid>
    </Container>
  );
};

export function getStaticProps() {
  const { items } = getAll();

  return { props: { productList: items } };
}

HomePage.propTypes = {
  productList: PropTypes.array,
};

export default HomePage;
