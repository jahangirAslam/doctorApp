import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@material-ui/core';
import { ButtonGroup, Grid } from '@mui/material';
import PatientProfile from './PatientProfile';
import { Link } from 'react-router-dom';




const PatientList = () => {
  return (
    <div>
      <Grid item lg={12}>
        <h2 className='listHeading'>Patient List</h2>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        item lg={12}
        className='listTable'
      >
        <Grid
          item lg={12}
        >
          <Button className='listBtn'>
            <Link to='/patient'>
              <p>+ New Patient</p>
            </Link>
          </Button>
        </Grid>


        <Grid
          container
          direction="row"
          className='listValueWrapper'

        >
          <Grid
            item lg={2}
          >
            <p className='listData'>Sr.No</p>
          </Grid>
          <Grid
            item lg={2}
          >
            <p className='listData'>Name</p>
          </Grid>
          <Grid
            item lg={3}
          >
            <p className='listData'>Contact Number</p>
          </Grid>
          <Grid
            item lg={2}
          >
            <p className='listData'>Email</p>
          </Grid>
          <Grid
            item lg={3}
          >
            <p className='listData'>Option</p>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          className='listValueWrapperData'

        >
          <Grid
            item lg={2}
          >
            <p className='listValue'>12</p>
          </Grid>
          <Grid
            item lg={2}
          >
            <p className='listValue'>Ahamd</p>
          </Grid>
          <Grid
            item lg={3}
          >
            <p className='listValue'>564745</p>
          </Grid>
          <Grid
            item lg={2}
          >
            <p className='listValue'>@fhjhfghc</p>
          </Grid>
          <Grid
            item lg={3}
          >
            <ButtonGroup className='btnGroup' variant="outlined" aria-label="outlined button group">
            <Button className='viewbtn'>
              <Link to='/patientProfile' >
             
                 view
                 </Link>
              </Button>   
              <Button className='editbtn'>
              <Link to='/patientProfile' >
             
                 Edit
                 </Link>
              </Button>   
              <Button className='deletebtn'>
              <Link to='/patientProfile' >
             
                 Delete
                 </Link>
              </Button>   
            </ButtonGroup>
          </Grid>
        </Grid>

      </Grid>

    </div>

  );
}
export default PatientList;