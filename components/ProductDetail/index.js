import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import { Grid, Container, Typography, Button, CircularProgress } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { useSnackbar } from 'notistack';
import clsx from 'clsx';

import { sizeList } from 'utils/product';
import useCheckoutStripe from 'hooks/useCheckoutStripe';
import { useStyles, ProductImages } from './styles';

const ProductDetail = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [checkoutState, fetchCheckoutSession] = useCheckoutStripe();

  const theme = useTheme();
  const classes = useStyles(theme);
  const { enqueueSnackbar } = useSnackbar();

  const handleBuyProduct = async () => {
    await fetchCheckoutSession({ product, selectedSize });
  };

  useEffect(() => {
    if (checkoutState.error) {
      enqueueSnackbar(
        'Ocurrió un error y no es posible continuar con el pago, por favor intente más tarde.',
        {
          variant: 'error',
          autoHideDuration: 7000,
        },
      );
    }
  }, [checkoutState]);

  return (
    <Container maxWidth="xl">
      <Grid container className={classes.detailsContainer}>
        <Grid item sm={12} md={8}>
          <ProductImages>
            {product?.imageList?.map((image, index) => (
              <Image
                key={`${image}-${index}`}
                src={image}
                width="100%"
                height="auto"
                layout="responsive"
                alt="Detalles de la camiseta"
              />
            ))}
          </ProductImages>
        </Grid>

        <Grid item sm={12} md={4}>
          <Grid container className={classes.info}>
            <Grid>
              <Typography component="h2" variant="body1">
                {product?.category}
              </Typography>

              <Grid container justify="space-between" alignItems="baseline">
                <Typography component="h1" variant="h5" className={classes.bold500}>
                  {product?.name}
                </Typography>

                <Typography variant="body1" className={classes.bold500}>
                  {`MXN $${product?.price}`}
                </Typography>
              </Grid>
            </Grid>

            <Grid container>
              <Typography variant="body1" className={classes.bold500}>
                Selecciona tu talla
              </Typography>

              <Grid container justify="space-between" wrap="nowrap" className={classes.sizeWrapper}>
                {sizeList.map(size => (
                  <Grid item key={size} className={classes.sizeItem}>
                    <Button
                      variant="outlined"
                      fullWidth
                      onClick={() => setSelectedSize(size)}
                      disabled={!product?.sizes.includes(size)}
                      className={clsx(classes.buttonSize, { active: size === selectedSize })}>
                      {size}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Button
              variant="contained"
              color="primary"
              fullWidth
              disabled={!selectedSize}
              className={classes.buttonBuy}
              onClick={checkoutState.loading ? null : handleBuyProduct}>
              {checkoutState.loading ? (
                <CircularProgress color="secondary" size="1.5rem" />
              ) : (
                'Comprar'
              )}
            </Button>

            <Grid>
              <Typography variant="subtitle1" component="h3" className={classes.bold500}>
                Descripción
              </Typography>
              <Typography variant="body2">{product?.description}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

ProductDetail.propTypes = {
  product: PropTypes.object,
};

export default ProductDetail;
