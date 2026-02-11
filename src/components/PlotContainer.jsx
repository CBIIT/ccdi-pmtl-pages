import React from 'react';
import { Box, CircularProgress, Typography } from '@material-ui/core';

function PlotContainer({ loading, error, left, center, children }) {
  return (
    <Box width="100%">
      {(left || center) && (
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Box>{left ?? null}</Box>
          <Box>{center ?? null}</Box>
          <Box />
        </Box>
      )}

      {loading ? (
        <Box display="flex" justifyContent="center" py={4}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Box py={2}>
          <Typography color="error" align="center">
            {typeof error === 'string' ? error : 'Something went wrong.'}
          </Typography>
        </Box>
      ) : (
        children
      )}
    </Box>
  );
}

export default PlotContainer;
