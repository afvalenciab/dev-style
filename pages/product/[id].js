import React from 'react';
import Image from 'next/image';
import { Grid, Container, Typography, Button } from '@material-ui/core';
import { styled, makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
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

const ProductImages = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '1rem',
  width: '100%',
});

const ProductPage = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Container maxWidth="xl">
      <Grid container className={classes.detailsContainer}>
        <Grid item sm={12} md={8}>
          <ProductImages>
            <Image
              src="/images/ShirtReact.jpg"
              width="100%"
              height="auto"
              layout="responsive"
              alt=""
            />
            <Image
              src="/images/ShirtReact.jpg"
              width="100%"
              height="auto"
              layout="responsive"
              alt=""
            />
            <Image
              src="/images/ShirtReact.jpg"
              width="100%"
              height="auto"
              layout="responsive"
              alt=""
            />
            <Image
              src="/images/ShirtReact.jpg"
              width="100%"
              height="auto"
              layout="responsive"
              alt=""
            />
          </ProductImages>
        </Grid>

        <Grid item sm={12} md={4}>
          <Grid container className={classes.info}>
            <Grid>
              <Typography component="h2" variant="body1">
                Camiseta hombre
              </Typography>
              <Grid container justify="space-between" alignItems="baseline">
                <Typography component="h1" variant="h5" className={classes.bold500}>
                  ReactJS
                </Typography>
                <Typography variant="body1" className={classes.bold500}>
                  MXN $ 300
                </Typography>
              </Grid>
            </Grid>

            <Grid container>
              <Typography variant="body1" className={classes.bold500}>
                Selecciona tu talla
              </Typography>
              <Grid container justify="space-between" wrap="nowrap" className={classes.sizeWrapper}>
                <Grid item className={classes.sizeItem}>
                  <Button variant="outlined" fullWidth className={classes.buttonSize}>
                    S
                  </Button>
                </Grid>
                <Grid item className={classes.sizeItem}>
                  <Button
                    variant="outlined"
                    fullWidth
                    className={clsx(classes.buttonSize, 'active')}
                  >
                    M
                  </Button>
                </Grid>
                <Grid item className={classes.sizeItem}>
                  <Button variant="outlined" fullWidth className={classes.buttonSize}>
                    L
                  </Button>
                </Grid>
                <Grid item className={classes.sizeItem}>
                  <Button variant="outlined" fullWidth disabled className={classes.buttonSize}>
                    XL
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            <Button variant="contained" color="primary" fullWidth className={classes.buttonBuy}>
              Comprar
            </Button>

            <Grid>
              <Typography variant="subtitle1" component="h3">
                Descripción
              </Typography>
              <Typography variant="body2">
                Camiseta manga corta, cuello redondo, producto 100% algodon, peso ligero, textura
                suave, colores solidos.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductPage;
