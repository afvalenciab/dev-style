import { styled, makeStyles } from '@material-ui/core/styles';

export const FooterContainer = styled('footer')(({ theme }) => ({
  padding: '2rem 0',
  backgroundColor: theme.palette.primary.main,
}));

export const LinkComponent = styled('a')(({ theme }) => ({
  color: theme.palette.text.secondary,
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

export const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      gap: '2rem',
    },
  },
  legalInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  icon: {
    backgroundColor: theme.palette.grey1,
    width: '3rem',
    height: '3rem',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    [theme.breakpoints.down('xs')]: {
      width: '2.5rem',
      height: '2.5rem',
    },
  },
  socialIconsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  socialItems: {
    display: 'flex',
    gap: '2rem',
  },
  copyRight: {
    textAlign: 'right',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'left',
    },
  },
}));
