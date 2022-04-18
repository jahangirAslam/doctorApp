import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@material-ui/core';
import { Grid } from '@mui/material';


const PatientMedicalTable = () => {
  return (
    <div>
        <Grid 
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        item lg={12}
        >
            <Grid 
            item lg={5}
            >
                <p className='appoinmentData'>Height</p>
            </Grid>
            <Grid 
            item lg={5}
            >
                <p className='appoinmentData'>5.3</p>
            </Grid>
            <Grid 
            item lg={5}
            >
                <p className='appoinmentData'>Weight</p>
            </Grid>
            <Grid 
            item lg={5}
            >
                <p className='appoinmentData'>60kg</p>
            </Grid>
{/* 
            <Grid 
            item lg={5}
            >
                <p className='appoinmentData'>Blood Group</p>
            </Grid>
            <Grid 
            item lg={5}
            >
                <p className='appoinmentData'>O+</p>
            </Grid>

            <Grid 
            item lg={5}
            >
                <p className='appoinmentData'>Blood Presure</p>
            </Grid>
            <Grid 
            item lg={5}
            >
                <p className='appoinmentData'>150380
</p>
            </Grid>

            <Grid 
            item lg={5}
            >
                <p className='appoinmentData'>Pulse</p>
            </Grid>
            <Grid 
            item lg={5}
            >
                <p className='appoinmentData'>52</p>
            </Grid>

            <Grid 
            item lg={5}
            >
                <p className='appoinmentData'>Respiration</p>
            </Grid>
            <Grid 
            item lg={5}
            >
                <p className='appoinmentData'>nil</p>
            </Grid>


            <Grid 
            item lg={5}
            >
                <p className='appoinmentData'>Alergy</p>
            </Grid>
            <Grid 
            item lg={5}
            >
                <p className='appoinmentData'>nil</p>
            </Grid>
            <Grid 
            item lg={5}
            >
                <p className='appoinmentData'>Diet</p>
            </Grid>
            <Grid 
            item lg={5}
            >
                <p className='appoinmentData'>Non-vegetarian</p>
            </Grid> */}
           
           
        </Grid>
       </div>
       
    );
}
    export default PatientMedicalTable;