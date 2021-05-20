import React from 'react';
import Image from 'next/image';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';

const ProductCard = () => {
  return (
    <Card raised>
      <CardActionArea>
        <CardMedia component="picture">
          <Image
            src="/images/ShirtReact.jpg"
            width="100%"
            height="auto"
            layout="responsive"
            alt=""
          />
        </CardMedia>
        <CardContent>
          <Typography component="h3">ReactJS</Typography>
          <Typography variant="caption" color="textSecondary" paragraph>
            Camiseta hombre
          </Typography>
          <Typography variant="subtitle2">$300 MXN</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
