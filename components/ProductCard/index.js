import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import { useStyles } from './styles';

const ProductCard = ({ product }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const router = useRouter();

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
          <Typography variant="subtitle2">{`$${product.price} MXN`}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
