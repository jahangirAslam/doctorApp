import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@material-ui/core';
import { ButtonGroup, Grid } from '@mui/material';
import DoctorProfile from './DoctorProfile';
import { Link } from 'react-router-dom';


const ListType = () => {
  const[triggreBtn,setTriggreBtn]=useState();
  const activeBtn=(data)=>{
    setTriggreBtn(data)
  }
  return (
    <div>
      <Grid item lg={12}>
        <h2 className='listHeading'> List Type</h2>
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
              <Button className='listBtn'>+ New Type</Button>
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
            item lg={3}
            >
                <p className='listData'>Name</p>
            </Grid>
            <Grid 
            item lg={3}
            >
                <p className='listData'>Price</p>
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
                <p className='listValue'>1</p>
            </Grid>
          
            
            <Grid 
            item lg={3}
            >
                <p className='listValue'>Ali</p>
            </Grid>
            <Grid 
            item lg={3}
            >
                <p className='listValue'>321</p>
            </Grid>
            
            <Grid
            item lg={3}
          >
            <ButtonGroup className='btnGroup' variant="outlined" aria-label="outlined button group">
            {/* <Button className='viewbtn'>
              <Link to='/doctorProfile' >
             
                 view
                 </Link>
              </Button>               */}
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
    export default ListType;