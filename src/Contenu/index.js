import React from 'react';
import Grid from '@material-ui/core/Grid';
import HotelForm from './HotelForm';
import Pannier from './Pannier';
export default props =>
  <Grid container >
    <Grid item sm>
      <HotelForm />
    </Grid>
    <Grid item sm={2}>
      <Pannier style />
    </Grid>
  </Grid>




