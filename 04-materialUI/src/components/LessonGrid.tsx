import React from 'react';
import { Grid, Box } from '@mui/material';

export const LessonGrid = () => {
  return (
    <Box>
      <Grid container>
        <Grid xs={12} md={8}>
          8 birimlik yer
        </Grid>
        <Grid xs={12} md={4}>
          4 birimlik yer
        </Grid>
        <Grid xs={12} md={8}>
          8 birimlik yer
        </Grid>
        <Grid xs={12} md={4}>
          4 birimlik yer
        </Grid>
      </Grid>
      {/* <Grid container>
        <Grid xs={8}>8 birimlik yer</Grid>
        <Grid xs={4}>4 birimlik yer</Grid>
      </Grid> */}
    </Box>
  );
};
