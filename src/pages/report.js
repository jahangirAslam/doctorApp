import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@material-ui/core';
import { ButtonGroup, Grid } from '@mui/material';
import { Link } from 'react-router-dom';


const Report = () => {
  return (
    <div>
      <Grid item lg={12}>
        <h2 className='listHeading'> Invoice List </h2>
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
            <Link to='/patient-entry'>
                <p>+ Create New Invoice </p>
            </Link>
           

          </Button>
        </Grid>


        <Grid
          container
          direction="row"
          className='listValueWrapper'
        >
          <Grid
            item lg={1}
          >
            <p className='listData'>Sr.No</p>
          </Grid>


          <Grid
            item lg={2}
          >
            <p className='listData'> Patient Name</p>
          </Grid>
          <Grid
            item lg={2}
          >
            <p className='listData'>Appoinment Date</p>
          </Grid>
          <Grid
            item lg={2}
          >
            <p className='listData'>Appoinment Time</p>
          </Grid>
          <Grid
            item lg={2}
          >
            <p className='listData'>Status</p>
          </Grid>

          <Grid
            item lg={2}
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
            item lg={1}
          >
            <p className='listValue'>1</p>
          </Grid>


          <Grid
            item lg={2}
          >
            <p className='listValue'>Ali</p>
          </Grid>
          <Grid
            item lg={2}
          >
            <p className='listValue'>12-4-2121</p>
          </Grid>
          <Grid
            item lg={2}
          >
            <p className='listValue'>12pm</p>
          </Grid>
          <Grid
            item lg={2}
          >
            <p className='listValue'>helloo</p>
          </Grid>

          <Grid
            item lg={2}
          >
            <ButtonGroup className='btnGroup' variant="outlined" aria-label="outlined button group">
              <Button className='viewbtn'>


                view

              </Button>
              <Button className='editbtn'>


                Edit

              </Button>
              <Button className='deletebtn'>


                Delete

              </Button>
            </ButtonGroup>
          </Grid>






        </Grid>

      </Grid>
    </div>

  );
}
export default Report;