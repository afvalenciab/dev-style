import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Grid, Button, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { GENDER_TYPE } from 'utils/product';
import SidebarMenu from './SidebarMenu';
import { useStylesMenu, MenuContainer, ItemMenu } from './styles';

const Menu = () => {
  const [openSidebarMenu, setOpenSidebarMenu] = useState(false);
  const router = useRouter();
  const classes = useStylesMenu();
  const { gender } = router.query;

  return (
    <>
      <Grid container className={classes.root}>
        <MenuContainer>
          <ItemMenu value={GENDER_TYPE.ALL} active={gender}>
            <Button
              className={classes.buttonNav}
              disableRipple
              onClick={() => router.push({ pathname: '/', query: { gender: GENDER_TYPE.ALL } })}>
              Todos
            </Button>
          </ItemMenu>

          <ItemMenu value={GENDER_TYPE.MEN} active={gender}>
            <Button
              className={classes.buttonNav}
              disableRipple
              onClick={() => router.push({ pathname: '/', query: { gender: GENDER_TYPE.MEN } })}>
              Hombre
            </Button>
          </ItemMenu>

          <ItemMenu value={GENDER_TYPE.WOMEN} active={gender}>
            <Button
              className={classes.buttonNav}
              disableRipple
              onClick={() => router.push({ pathname: '/', query: { gender: GENDER_TYPE.WOMEN } })}>
              Mujer
            </Button>
          </ItemMenu>
        </MenuContainer>

        <IconButton
          className={classes.sidebarButton}
          color="primary"
          edge="end"
          onClick={() => setOpenSidebarMenu(true)}>
          <MenuIcon />
        </IconButton>
      </Grid>

      <SidebarMenu open={openSidebarMenu} onClose={() => setOpenSidebarMenu(false)} />
    </>
  );
};

export default Menu;
