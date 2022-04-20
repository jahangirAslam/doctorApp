import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@material-ui/core';
import { ButtonGroup, Grid } from '@mui/material';
import DoctorProfile from './DoctorProfile';
import { Link } from 'react-router-dom';


const Doctors = () => {
  const[triggreBtn,setTriggreBtn]=useState();
  const activeBtn=(data)=>{
    setTriggreBtn(data)
  }
  return (
    <div>
      <Grid item lg={12} xs={12}>
        <h2 className='listHeading'>Doctor List</h2>
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
            item lg={12} xs={12}
            >
              <Button className='listBtn'>
                <Link to='/doctor'>
                <p>+ New Doctor</p>
                </Link>
                
              </Button>
            </Grid>


            <Grid 
            container
            direction="row"
            className='listValueWrapper'
            >
            <Grid 
            item lg={1} xs={12}
            >
                <p className='listData'>Sr.No</p>
            </Grid>
            <Grid 
            item lg={2} xs={12}
            >
                <p className='listData'>Title</p>
            </Grid>
            
            <Grid 
            item lg={2} xs={12}
            >
                <p className='listData'>Name</p>
            </Grid>
            <Grid 
            item lg={2} xs={12}
            >
                <p className='listData'>Contact Number</p>
            </Grid>
            <Grid 
            item lg={2} xs={12}
            >
                <p className='listData'>Email</p>
            </Grid>
            <Grid 
            item lg={3} xs={12}
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
            item lg={1} xs={12}
            >
                <p className='listValue'>1</p>
            </Grid>
            <Grid 
            item lg={2} xs={12}
            >
                <p className='listValue'>ABS</p>
            </Grid>
            
            <Grid 
            item lg={2} xs={12}
            >
                <p className='listValue'>Ali</p>
            </Grid>
            <Grid 
            item lg={2} xs={12}
            >
                <p className='listValue'>03036619660</p>
            </Grid>
            <Grid 
            item lg={2} xs={12}
            >
                <p className='listValue'>@egjfejkbfejk</p>
            </Grid>
            <Grid
            item lg={3} xs={12}
          >
            <ButtonGroup className='btnGroup' variant="outlined" aria-label="outlined button group">
            <Button className='viewbtn'>
              <Link to='/doctorProfile' >
             
                 view
                 </Link>
              </Button>              
              <Button className='editbtn'>
              <Link to='/doctorProfile' >
             
                Edit
                 </Link>
              </Button>
              <Button className='deletebtn'>
              <Link to='/doctorProfile' >
             
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
    export default Doctors;