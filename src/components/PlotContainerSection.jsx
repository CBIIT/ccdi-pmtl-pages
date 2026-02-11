import React from 'react';
import { Box } from '@material-ui/core';

function PlotContainerSection({ children }) {
  return (
    <Box mb={2}>
      {children}
    </Box>
  );
}

export default PlotContainerSection;
