import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Typography } from '@material-ui/core';
import { Grid } from '@mui/material';
import profile from '../assets/images/profile.png'
import noimg from '../assets/images/noimg.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DoctorProfileData from './DoctorProfileData';

const DoctorProfile = () => {
  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"

      >
        <Grid item lg={12} sm={12}>
          <h3 className='profile'> Doctor Profile </h3>

        </Grid>



        <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"

      >
        

        <Grid item lg={4} sm={12}>
          <div className='doctorProfileHeader'>
            <span className='profile-img'>Doctor Information </span>
            <img src={profile} alt="" />
          </div>
          <div className='doctorProfile'>
            <img src={noimg} alt="" />
            <span className='profileLogin'>Last Login  </span>
            <h6> Dr Thomas :</h6>
            <div className='profilebtns' >
              <Button className='profilebtn'> Edit Profile <ArrowForwardIcon /> </Button>
            </div>
            <div className='profilebtns'>
              <Button className='profilebtn'> Edit Time Slot<ArrowForwardIcon /></Button>
            </div>

          </div>

        </Grid>

        <Grid item lg={7}>
          <DoctorProfileData/>
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

          <h3 className='information'>Degree:</h3>


          </Grid>
          <Grid
            item lg={6} sm={6}>

            <h5 className='information'> MBBS</h5>


          </Grid>

          <Grid
            item lg={6} sm={6}>

          <h3 className='information'>Experience</h3>


          </Grid>
          <Grid
            item lg={6} sm={6}>

          <h5  className='information'> 6 years</h5> 


          </Grid>

          <Grid
            item lg={6} sm={6}>

            <h3 className='information'>Fee</h3>

          </Grid>
          <Grid
            item lg={6} sm={6}>

      <h5 className='information'>500</h5>


          </Grid>



        </Grid>




      {/* for date and time  */}
        <Grid
        className='personal-information'
         container  direction='row'
          item  lg={4} sm={12} >
             <Grid
            item lg={12} sm={12}>
                <h3 className='information'>Date And Time Availability</h3>
          </Grid>
          

          <Grid
            item lg={6} sm={6}>
                <h5 className='information'>Sunady </h5>
          </Grid>
          <Grid
            item lg={6} sm={6}>

            <h5 className='information'>Monday</h5>


          </Grid>

          <Grid
            item lg={6} sm={6}>

            <h5 className='information'>Tuesday  </h5>


          </Grid>
          <Grid
            item lg={6} sm={6}>

            <h5 className='information'>Wednesday</h5>


          </Grid>

          <Grid
            item lg={6} sm={6}>

              <h5 className='information'>Thursday</h5>


          </Grid>
          <Grid
            item lg={6} sm={6}>

          <h5  className='information'> Friday</h5>


          </Grid>

          <Grid
            item lg={12} sm={12}>

          <h5 className='information'>Saturday</h5>


          </Grid>
          <Grid
            item lg={12} sm={12}>

            <h3 className='information'>Available Time </h3>


          </Grid>

          <Grid
            item lg={12} sm={12}>

          <h5 className='information'>08:00 To 09:00 08:00 To 09:00
          </h5>


          </Grid>
          


        </Grid>

      


    </div>

  );
}
export default DoctorProfile;