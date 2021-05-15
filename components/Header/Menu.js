import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { makeStyles, styled } from '@material-ui/core/styles';

const useStyles = makeStyles({
  buttonNav: {
    textTransform: 'none',
    fontSize: '1rem',
    fontWeight: 500,
    height: '60px',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
});

const MenuContainer = styled('ul')({
  listStyle: 'none',
  display: 'flex',
  margin: 0,
  padding: 0,
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

  return (
    <Grid container justify="center" spacing={2}>
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
    </Grid>
  );
};

export default Menu;
