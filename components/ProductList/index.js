import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@material-ui/core/styles';

import ProductCard from 'components/ProductCard';

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

const ProductList = ({ list }) => {
  return (
    <ListContainer>
      {list.map(item => (
        <ProductCard key={item.id} product={item} />
      ))}
    </ListContainer>
  );
};

ProductList.propTypes = {
  list: PropTypes.array,
};

export default ProductList;
