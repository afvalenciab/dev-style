import React from 'react';
import PropTypes from 'prop-types';

import Header from 'components/Header';
import Footer from 'components/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
