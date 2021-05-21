import React from 'react';
import { styled } from '@material-ui/core/styles';

import Product from 'components/ProductCard';

const ListContainer = styled('section')({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  columnGap: '1rem',
  rowGap: '2rem',
  width: '100%',
  paddingBottom: '0.5rem',
  '@media (max-width: 900px)': {
    gridTemplateColumns: '1fr 1fr',
  },
});

const ProductList = () => {
  return (
    <ListContainer>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </ListContainer>
  );
};

export default ProductList;
