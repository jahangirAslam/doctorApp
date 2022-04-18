import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Typography } from '@material-ui/core';
import { Grid } from '@mui/material';
import profile from '../assets/images/profile.png'
import noimg from '../assets/images/noimg.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PatientProfileData from './PatientProfileData';

const PatientProfile = () => {
  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"

      >
        <Grid item lg={12} sm={12}>
          <h3 className='profile'> Patient Profile </h3>

        </Grid>



        <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"

      >
        

        <Grid item lg={4} sm={12}>
          <div className='doctorProfileHeader'>
            <span className='profile-img'>Patient Information </span>
            <img src={profile} alt="" />
          </div>
          <div className='doctorProfile'>
            <img src={noimg} alt="" />
            <span className='profileLogin'>Last Login  </span>
            <h6> Ali:</h6>
            <div className='profilebtns' >
              <Button className='profilebtn'> Edit Profile <ArrowForwardIcon /> </Button>
            </div>
            <div className='profilebtns'>
              <Button className='profilebtn'> Edit Time Slot<ArrowForwardIcon /></Button>
            </div>

          </div>

        </Grid>

        <Grid item lg={7}  sm={12}>
          <PatientProfileData/>
        </Grid>
        </Grid>
        

        
        </Grid>








        {/* for information */}



        <Grid
        className='personal-information'
         container  direction='row'
          item  lg={4} sm={12} >
             <Grid
            item lg={12} sm={12}>
                <h3 className='information'>Personal Information</h3>
          </Grid>
          

          <Grid
            item lg={6} sm={6}>
                <h3 className='information'>Full Name :</h3>
          </Grid>
          <Grid
            item lg={6} sm={6}>

            <h5 className='information'>Jahangir</h5>


          </Grid>

          <Grid
            item lg={6} sm={6}>

            <h3 className='information'>Email </h3>


          </Grid>
          <Grid
            item lg={6} sm={6}>

            <h5 className='information'>dfjkbwdjkbvdjk</h5>


          </Grid>
          <Grid
            item lg={6} sm={6}>

              <h3 className='information'>Number</h3>


          </Grid>
          <Grid
            item lg={6} sm={6}>

          <h5  className='information'> 85789659586</h5>


          </Grid>

          <Grid
            item lg={6} sm={6}>

          <h3 className='information'>Age</h3>


          </Grid>
          <Grid
            item lg={6} sm={6}>

            <h5 className='information'> 22</h5>


          </Grid>

          <Grid
            item lg={6} sm={6}>

          <h3 className='information'>Gender</h3>


          </Grid>
          <Grid
            item lg={6} sm={6}>

          <h5  className='information'> Male</h5> 


          </Grid>

          <Grid
            item lg={6} sm={6}>

            <h3 className='information'>Address</h3>

          </Grid>
          <Grid
            item lg={6} sm={6}>

      <h5 className='information'>.......</h5>


          </Grid>



        </Grid>
      

    </div>

  );
}
export default PatientProfile;