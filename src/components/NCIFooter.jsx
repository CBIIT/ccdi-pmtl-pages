import React from 'react';
import { Box, Typography } from '@material-ui/core';

function NCIFooter() {
  return (
    <Box component="footer" p={2} textAlign="center">
      <Typography variant="caption" color="textSecondary">
        © {new Date().getFullYear()} CCDI
      </Typography>
    </Box>
  );
}

export default NCIFooter;
