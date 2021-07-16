import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { Grid, Container, Typography, Button } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';

import { sizeList } from 'utils/product';
import { useStyles, ProductImages } from './styles';

const ProductDetail = ({ product }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [sizeSelected, setSizeSelected] = useState(null);

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
                      onClick={() => setSizeSelected(size)}
                      disabled={!product?.sizes.includes(size)}
                      className={clsx(classes.buttonSize, { active: size === sizeSelected })}>
                      {size}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Button variant="contained" color="primary" fullWidth className={classes.buttonBuy}>
              Comprar
            </Button>

            <Grid>
              <Typography variant="subtitle1" component="h3">
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
