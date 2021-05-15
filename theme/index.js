import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: 'secondary',
        },
      },
    },
    MuiContainer: {
      root: {
        paddingLeft: '16px',
        paddingRight: '16px',

        '@media (min-width: 600px)': {
          paddingLeft: '55px',
          paddingRight: '55px',
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1366,
    },
  },
  palette: {
    primary: {
      main: '#111111',
    },
    secondary: {
      main: '#FFFFFF',
    },
    grey1: '#757575',
    grey2: '#F5F5F5F5',
    text: {
      primary: '#111111',
      secondary: '#757575',
    },
  },
});

export default theme;
