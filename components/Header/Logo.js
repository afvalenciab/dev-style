import React from 'react';

import { styled } from '@material-ui/core/styles';

const LogoStyled = styled('span')({
  fontFamily: 'Teko, sans-serif',
  fontSize: '2rem',
  fontWeight: 800,
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  cursor: 'pointer',
});

const Logo = () => {
  return <LogoStyled>{'<DEV-STYLE />'}</LogoStyled>;
};

export default Logo;
