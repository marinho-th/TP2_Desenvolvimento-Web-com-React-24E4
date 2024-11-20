import React from 'react';
import { Grid } from '@mui/material';

const GridComponent = ({ children, ...props }) => {
  return <Grid {...props}>{children}</Grid>;
};

export default GridComponent;
