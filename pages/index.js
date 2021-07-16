import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Container, Grid } from '@material-ui/core';

import { getAll } from 'database/db';
import ProductList from 'components/ProductList';

const HomePage = ({ productList }) => {
  const router = useRouter();
  const { gender } = router.query;

  return (
    <Container maxWidth="xl">
      <Grid container>
        <ProductList
          list={
            gender === 'ALL' || !gender
              ? productList
              : productList.filter(item => item.gender === gender)
          }
        />
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
