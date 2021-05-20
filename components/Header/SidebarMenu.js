import React from 'react';
import PropTypes from 'prop-types';
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  list: {
    width: '12rem',
  },
});

const SidebarMenu = ({ open, onClose }) => {
  const classes = useStyles();

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <List className={classes.list} component="nav" onClick={onClose}>
        <ListItem button>
          <ListItemText primary="Todos" />
        </ListItem>

        <ListItem button>
          <ListItemText primary="Hombre" />
        </ListItem>

        <ListItem button>
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
