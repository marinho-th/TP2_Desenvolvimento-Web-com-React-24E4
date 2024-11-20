import React from 'react';
import { Tab } from '@mui/material';

const TabComponent = ({ children, ...props }) => {
  return <Tab {...props}>{children}</Tab>;
};

export default TabComponent;
