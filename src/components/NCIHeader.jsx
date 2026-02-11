import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

function NCIHeader() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6">CCDI PMTL</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default NCIHeader;
