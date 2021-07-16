import React from 'react';
import PropTypes from 'prop-types';

import ProductCard from 'components/ProductCard';
import { ListContainer } from './styles';

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
