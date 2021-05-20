import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Header from 'components/Header';
import Footer from 'components/Footer';

const useStyles = makeStyles({
  root: {
    minHeight: 'calc(100vh - 314px)',
    overflow: 'hidden',
  },
});

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <div className={classes.root}>{children}</div>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
