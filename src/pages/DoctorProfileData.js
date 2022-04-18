import { Grid,Button } from '@mui/material';
import React, { useState } from 'react';
import AddTaskIcon from '@mui/icons-material/AddTask';
import PaidIcon from '@mui/icons-material/Paid';
import Report from './report';
import AppoinmentTable from './AppoinmentTable';
import PrescriptionTable from './PrescriptionTable';
import Invoice from './Invoice';

const DoctorProfileData = () => {
  const [triggerTable,setTriggreTable]=useState('appoinmentTable');
  const activeTable=(check)=>{
    setTriggreTable(check);
    

  }
  return(
    <div>
    <Grid 
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
    item lg={12} sm={12}
    
    >
      <Grid
      container
    direction="row"
    spacing={2}
    alignItems="center"
    >
      <Grid item lg={4} sm={12}>
        <div className='profileStatus'>
          <h5 className='profileHeading'> Appoinments </h5>
         <p className='profileIcons'> <AddTaskIcon/></p>
         <h2 className='profileBill'>0</h2>
          </div>
        </Grid>
        <Grid item lg={4} sm={12}>
          <div className='profileStatus'>
          <h5 className='profileHeading'> Pending Bills </h5>
          <p className='profileIcons'><PaidIcon/ ></p>
          <h2 className='profileBill'>0</h2>
          </div>
        </Grid>
        <Grid item lg={4} sm={12}>
        <div className='profileStatus'>
          <h5 className='profileHeading'> Total Bill </h5>
          <p className='profileIcons'><PaidIcon/></p>
          <h2 className='profileBill'>$548</h2>

          </div>
        </Grid>
        </Grid>

    </Grid>

    <Grid
    
    container
    direction="row"
    justifyContent="space-evenly"
    alignItems="center"
    item lg={12} sm={12}
    className="profileBtn"
    
    >
      <Grid  item lg={3} sm={12}>
      <Button onClick={()=>activeTable('appoinmentTable')}>Appoinment List</Button>
      </Grid>
      
      
      <Grid  item lg={3} sm={12}>
      <Button onClick={()=>activeTable('prescriptionTable')}>Prescription List</Button>
      </Grid>
      <Grid  item lg={3} sm={12}>
      <Button onClick={()=>activeTable('invoice')}>Invoices</Button>
      </Grid>


        <Grid 
        item lg={12} sm={12}
        >
         {triggerTable === "appoinmentTable" ? < AppoinmentTable/> : ""}
          {triggerTable === "prescriptionTable" ? < PrescriptionTable/> : ""}
          {triggerTable === "invoice" ? < Invoice/> : ""}
        </Grid>
        
      
    </Grid>
    </div>
  );
   
}
 export default DoctorProfileData;