import React from 'react';
import PropTypes from 'prop-types';

import { getAll, getById } from 'database/db';
import ProductDetail from 'components/ProductDetail';

const ProductPage = ({ product }) => {
  return <ProductDetail product={product} />;
};

export function getStaticProps({ params: { id } }) {
  const product = getById(id);

  return { props: { product } };
}

export function getStaticPaths() {
  const { items } = getAll();

  const paths = items.map(item => ({ params: { id: item.id } }));
  return { paths, fallback: false };
}

ProductPage.propTypes = {
  product: PropTypes.object,
};

export default ProductPage;
