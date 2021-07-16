import React from 'react';
import Link from 'next/link';
import { styled } from '@material-ui/core/styles';

const LogoStyled = styled('a')({
  fontFamily: 'Teko, sans-serif',
  fontSize: '2rem',
  fontWeight: 800,
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  cursor: 'pointer',
  textDecoration: 'none',
  color: 'inherit',
});

const Logo = () => {
  return (
    <Link href="/" passHref>
      <LogoStyled>{'<DEV-STYLE />'}</LogoStyled>
    </Link>
  );
};

export default Logo;
