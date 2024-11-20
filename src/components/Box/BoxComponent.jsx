import React from 'react';
import { Box } from '@mui/material';

const BoxComponent = ({ children, ...props }) => {
  // console.log('Renderizando BoxComponent com props:', props);
  return <Box {...props}>{children}</Box>;
};

export default BoxComponent;
