import { styled, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  detailsContainer: {
    gap: '50px',
    flexWrap: 'nowrap',
    '@media (max-width: 959px)': {
      flexDirection: 'column',
    },
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2.5rem',
  },
  sizeWrapper: {
    gap: '0.6rem',
  },
  sizeItem: {
    flexGrow: 1,
  },
  bold500: {
    fontWeight: 500,
  },
  buttonSize: {
    '&:hover': {
      borderColor: theme.palette.primary.main,
    },
    '&.active': {
      borderColor: theme.palette.primary.main,
    },
  },
  buttonBuy: {
    borderRadius: '50px',
    height: '3rem',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: theme.palette.grey2,
    },
  },
}));

export const ProductImages = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '1rem',
  width: '100%',
});
