import React, { useState } from 'react';
import { Grid, Button, IconButton } from '@material-ui/core';
import { makeStyles, styled } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

import SidebarMenu from 'components/Header/SidebarMenu';

const useStyles = makeStyles({
  root: {
    justifyContent: 'center',
    '@media (max-width: 900px)': {
      justifyContent: 'flex-end',
    },
  },
  buttonNav: {
    textTransform: 'none',
    fontSize: '1rem',
    fontWeight: 500,
    height: '60px',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  sidebarButton: {
    display: 'none',
    '@media (max-width: 900px)': {
      display: 'flex',
    },
  },
});

const MenuContainer = styled('ul')({
  listStyle: 'none',
  display: 'flex',
  margin: 0,
  padding: 0,
  '@media (max-width: 900px)': {
    display: 'none',
  },
});

const ItemMenu = styled('li')(({ theme }) => ({
  padding: '0px 20px',
  borderBottom: '2px solid transparent',
  '&:hover': {
    borderColor: theme.palette.primary.main,
  },
}));

const Menu = () => {
  const classes = useStyles();
  const [openSidebarMenu, setOpenSidebarMenu] = useState(false);

  return (
    <>
      <Grid container className={classes.root}>
        <MenuContainer>
          <ItemMenu>
            <Button className={classes.buttonNav} disableRipple>
              Todos
            </Button>
          </ItemMenu>

          <ItemMenu>
            <Button className={classes.buttonNav} disableRipple>
              Hombre
            </Button>
          </ItemMenu>

          <ItemMenu>
            <Button className={classes.buttonNav} disableRipple>
              Mujer
            </Button>
          </ItemMenu>
        </MenuContainer>

        <IconButton
          className={classes.sidebarButton}
          color="primary"
          edge="end"
          onClick={() => setOpenSidebarMenu(true)}
        >
          <MenuIcon />
        </IconButton>
      </Grid>

      <SidebarMenu open={openSidebarMenu} onClose={() => setOpenSidebarMenu(false)} />
    </>
  );
};

export default Menu;
