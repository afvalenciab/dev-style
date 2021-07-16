import { makeStyles, styled } from '@material-ui/core/styles';

export const useStylesHeader = makeStyles({
  appBar: {
    position: 'sticky',
    top: 0,
    boxShadow: 'none',
  },
  container: {
    height: '60px',
  },
});

export const useStylesMenu = makeStyles({
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

export const MenuContainer = styled('ul')({
  listStyle: 'none',
  display: 'flex',
  margin: 0,
  padding: 0,
  '@media (max-width: 900px)': {
    display: 'none',
  },
  '&:hover li': {
    borderColor: 'transparent',
  },
  '&:hover li:hover': {
    borderColor: '#000',
  },
});

export const ItemMenu = styled('li')(({ theme, value, active }) => ({
  padding: '0px 20px',
  borderBottom:
    active === value ? `2px solid ${theme.palette.primary.main}` : '2px solid transparent',
  '&:hover': {
    borderColor: theme.palette.primary.main,
  },
}));
