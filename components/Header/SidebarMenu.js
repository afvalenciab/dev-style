import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { GENDER_TYPE } from 'utils/product';

const useStyles = makeStyles({
  list: {
    width: '12rem',
  },
});

const SidebarMenu = ({ open, onClose }) => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <List className={classes.list} component="nav" onClick={onClose}>
        <ListItem
          button
          onClick={() => router.push({ pathname: '/', query: { gender: GENDER_TYPE.ALL } })}>
          <ListItemText primary="Todos" />
        </ListItem>

        <ListItem
          button
          onClick={() => router.push({ pathname: '/', query: { gender: GENDER_TYPE.MEN } })}>
          <ListItemText primary="Hombre" />
        </ListItem>

        <ListItem
          button
          onClick={() => router.push({ pathname: '/', query: { gender: GENDER_TYPE.WOMEN } })}>
          <ListItemText primary="Mujer" />
        </ListItem>
      </List>
    </Drawer>
  );
};

SidebarMenu.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

export default SidebarMenu;
