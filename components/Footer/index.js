import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Grid, Typography, Icon } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import { FooterContainer, LinkComponent, useStyles } from './styles';

const Footer = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <FooterContainer>
      <Container maxWidth="xl">
        <Grid container justifyContent="space-between" className={classes.root}>
          <Grid item className={classes.legalInfo}>
            <Typography variant="body1" color="secondary">
              LEGAL
            </Typography>
            <Link href="/privacidad" passHref>
              <LinkComponent>Politica de privacidad</LinkComponent>
            </Link>
            <Link href="/terminos" passHref>
              <LinkComponent>Términos y condiciones</LinkComponent>
            </Link>
          </Grid>

          <Grid item className={classes.socialIconsContainer}>
            <Grid className={classes.socialItems}>
              <a href="https://twitter.com/afvalenciab" rel="noreferrer" target="_blank">
                <Icon className={classes.icon}>
                  <Image src="/icons/icon-twitter.svg" width="24px" height="24px" />
                </Icon>
              </a>

              <a
                href="https://www.facebook.com/andres.f.valencia.796"
                rel="noreferrer"
                target="_blank">
                <Icon className={classes.icon}>
                  <Image src="/icons/icon-facebook.svg" width="24px" height="24px" />
                </Icon>
              </a>

              <a href="https://www.instagram.com/afvalenciab/" rel="noreferrer" target="_blank">
                <Icon className={classes.icon}>
                  <Image src="/icons/icon-instagram.svg" width="24px" height="24px" />
                </Icon>
              </a>
            </Grid>
            <Typography color="textSecondary" className={classes.copyRight}>
              © WorkersStyle 2021
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
