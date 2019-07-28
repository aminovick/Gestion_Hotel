import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default props =>

  <div>
    <AppBar position="static" >
      <Toolbar variant="dense" style={{ backgroundColor: '#78909c' }}>

        <Typography variant="h6"  >
          Hotels
          </Typography>
      </Toolbar>
    </AppBar>
  </div>