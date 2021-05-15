import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { styled, makeStyles } from '@material-ui/core/styles';

const FooterContainer = styled('footer')(({ theme }) => ({
  marginTop: '64px',
  padding: '48px 0px',
  height: '200px',
  backgroundColor: theme.palette.primary.main,
}));

const useStyles = makeStyles({
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    rowGap: '14px',
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <FooterContainer>
      <Container maxWidth="xl">
        <Grid container justify="space-between">
          <Grid item className={classes.gridContainer}>
            <Typography variant="body1" color="secondary">
              LEGAL
            </Typography>
            <Typography color="textSecondary">Politica de privacidad</Typography>
            <Typography color="textSecondary">Términos y condiciones</Typography>
          </Grid>

          <Grid item>
            <Typography variant="body1" color="secondary">
              LEGAL
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
