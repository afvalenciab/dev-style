import React from 'react';
import Image from 'next/image';
import { Container, Grid, Typography, Icon } from '@material-ui/core';
import { styled, makeStyles, useTheme } from '@material-ui/core/styles';

const FooterContainer = styled('footer')(({ theme }) => ({
  marginTop: '64px',
  padding: '32px 0px',
  backgroundColor: theme.palette.primary.main,
}));

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      gap: '2rem',
    },
  },
  legalInfo: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    rowGap: '8px',
  },
  icon: {
    backgroundColor: theme.palette.grey1,
    width: '3rem',
    height: '3rem',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      width: '2.5rem',
      height: '2.5rem',
    },
  },
  socialIcons: {
    display: 'flex',
    gap: '2rem',
  },
}));

const Footer = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <FooterContainer>
      <Container maxWidth="xl">
        <Grid container justify="space-between" className={classes.root}>
          <Grid item className={classes.legalInfo}>
            <Typography variant="body1" color="secondary">
              LEGAL
            </Typography>
            <Typography color="textSecondary">Politica de privacidad</Typography>
            <Typography color="textSecondary">Términos y condiciones</Typography>
          </Grid>

          <Grid item className={classes.socialIcons}>
            <Icon className={classes.icon}>
              <Image src="/icons/icon-twitter.svg" width="24px" height="24px" />
            </Icon>
            <Icon className={classes.icon}>
              <Image src="/icons/icon-facebook.svg" width="24px" height="24px" />
            </Icon>
            <Icon className={classes.icon}>
              <Image src="/icons/icon-instagram.svg" width="24px" height="24px" />
            </Icon>
          </Grid>
        </Grid>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
