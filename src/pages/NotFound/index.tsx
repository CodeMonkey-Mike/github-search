import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, GridCell } from '../../styles/Grid';

const Main = () => (
  <Grid>
    <GridCell span="16" style={{ textAlign: 'center' }}>
      <h1>Error 404!</h1>
      <h3>Page not found</h3>
      Click
      <Link to="/"> here </Link>
      to go to the homepage.
    </GridCell>
  </Grid>
);
export default Main;
