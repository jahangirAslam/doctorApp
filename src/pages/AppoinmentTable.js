import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@material-ui/core';
import { Grid } from '@mui/material';


const AppoinmentTable = () => {
  return (
    <div>
        <Grid 
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        item lg={12}
        >
            <Grid 
            item lg={1}
            >
                <p className='appoinmentData'>Sr.No</p>
            </Grid>
            <Grid 
            item lg={2}
            >
                <p className='appoinmentData'>Patient Name</p>
            </Grid>
            <Grid 
            item lg={3}
            >
                <p className='appoinmentData'>Patient Contact</p>
            </Grid>
            <Grid 
            item lg={2}
            >
                <p className='appoinmentData'>Patient Email</p>
            </Grid>
            <Grid 
            item lg={1}
            >
                <p className='appoinmentData'>Date</p>
            </Grid>
            <Grid 
            item lg={1}
            >
                <p className='appoinmentData'>Time</p>
            </Grid>
        </Grid>
       </div>
       
    );
}
    export default AppoinmentTable;