import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem 2rem',
    '@media (max-width:900px)': {
      padding: '1rem 1rem',
    },
  },
  successIcon: {
    fontSize: '6rem',
    '@media (max-width: 900px)': {
      fontSize: '4rem',
    },
  },
  title: {
    '@media (max-width: 900px)': {
      fontSize: '1.6rem',
    },
  },
  message: {
    '@media (max-width: 900px)': {
      fontSize: '0.875rem',
    },
  },
  button: {
    textTransform: 'none',
    marginTop: '1rem',
    borderRadius: '50px',
  },
});
