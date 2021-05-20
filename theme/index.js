import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          backgroundColor: '#111111',
        },
        body: {
          backgroundColor: '#FFFFFF',
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
    MuiPaper: {
      elevation8: {
        boxShadow:
          '0px 5px 5px -3px rgba(0,0,0,0.1), 0px 2px 6px 1px rgba(0,0,0,0.1), 0px 3px 14px 2px rgba(0,0,0,0.1)',
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
    grey2: '#6F6F6F',
    text: {
      primary: '#111111',
      secondary: '#757575',
    },
  },
});

export default theme;
