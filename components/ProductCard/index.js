import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { useTheme } from '@material-ui/core/styles';

import { priceFormatter } from 'utils/product';
import { OriginCountry } from 'utils/contexts';
import { useStyles } from './styles';

const ProductCard = ({ product }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const router = useRouter();
  const { data: currency, loading: loadingCurrency } = useContext(OriginCountry);

  return (
    <Card raised>
      <CardActionArea onClick={() => router.push(`/product/${product.id}`)}>
        <CardMedia component="picture" className={classes.placeholderImg}>
          <Image
            src={product.image}
            width="100%"
            height="auto"
            layout="responsive"
            alt={`Camiseta tipo ${product.name}`}
          />
        </CardMedia>
        <CardContent>
          <Typography component="h3">{product.name}</Typography>
          <Typography variant="caption" color="textSecondary" paragraph>
            {product.category}
          </Typography>

          {loadingCurrency || !currency ? (
            <Skeleton variant="text" width={100} />
          ) : (
            <Typography variant="subtitle2">{`${priceFormatter(
              product.prices[currency],
            )} ${currency}`}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
