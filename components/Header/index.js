import React from 'react';
import { Container, Grid, AppBar } from '@material-ui/core';

import Logo from './Logo';
import Menu from './Menu';
import { useStyles } from './styles';

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} color="secondary" position="static">
      <Container maxWidth="xl">
        <Grid className={classes.container} container alignItems="center">
          <Logo />
          <Menu />
        </Grid>
      </Container>
    </AppBar>
  );
};

export default Header;
