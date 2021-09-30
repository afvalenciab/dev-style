import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Grid, Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';

import { GENDER_TYPE } from 'utils/product';
import Logo from './Logo';

const useStyles = makeStyles(theme => ({
  fullHeight: {
    height: '100%',
  },
  list: {
    width: '12rem',
  },
  logo: {
    position: 'relative',
    justifyContent: 'center',
    fontWeight: 300,
  },
  active: {
    backgroundColor: theme.palette.grey3,
  },
}));

const SidebarMenu = ({ open, onClose }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const router = useRouter();
  const { gender: genderSelected } = router.query;

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Grid
        container
        justifyContent="space-between"
        direction="column"
        className={classes.fullHeight}>
        <List className={classes.list} component="nav" onClick={onClose}>
          <ListItem
            button
            className={clsx({ [classes.active]: genderSelected === GENDER_TYPE.ALL })}
            onClick={() => router.push({ pathname: '/', query: { gender: GENDER_TYPE.ALL } })}>
            <ListItemText primary="Todos" />
          </ListItem>

          <ListItem
            button
            className={clsx({ [classes.active]: genderSelected === GENDER_TYPE.MEN })}
            onClick={() => router.push({ pathname: '/', query: { gender: GENDER_TYPE.MEN } })}>
            <ListItemText primary="Hombre" />
          </ListItem>

          <ListItem
            button
            className={clsx({ [classes.active]: genderSelected === GENDER_TYPE.WOMEN })}
            onClick={() => router.push({ pathname: '/', query: { gender: GENDER_TYPE.WOMEN } })}>
            <ListItemText primary="Mujer" />
          </ListItem>
        </List>

        <Logo className={classes.logo} />
      </Grid>
    </Drawer>
  );
};

SidebarMenu.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

export default SidebarMenu;
