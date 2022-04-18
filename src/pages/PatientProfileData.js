import { Grid,Button } from '@mui/material';
import React, { useState } from 'react';
import AddTaskIcon from '@mui/icons-material/AddTask';
import PaidIcon from '@mui/icons-material/Paid';
import Report from './report';
import PatientAppoinmentTable from './PatientAppoinmentTable';
import PatientPrescriptionTable from './PatientPrescriptionTable';
import PatientInvoice from './PatientInvoice';
import PatientMedicalTable from './patientMedicalTable';

const PatientProfileData = () => {
  const [triggerTable,setTriggreTable]=useState('medicalInformation');
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
      <Button onClick={()=>activeTable('medicalInformation')}>Medical Information</Button>
      </Grid>
      <Grid  item lg={3} sm={12}>
      <Button onClick={()=>activeTable('patientAppoinmentTable')}>Appoinment List</Button>
      </Grid>
      
      
      <Grid  item lg={3} sm={12}>
      <Button onClick={()=>activeTable('patientPrescriptionTable')}>Prescription List</Button>
      </Grid>
      <Grid  item lg={3} sm={12}>
      <Button onClick={()=>activeTable('patientInvoice')}>Invoices</Button>
      </Grid>


        <Grid 
        item lg={12} sm={12}
        >
           {triggerTable === "medicalInformation" ? < PatientMedicalTable/> : ""}
          {triggerTable === "patientAppoinmentTable" ? < PatientAppoinmentTable/> : ""}
          {triggerTable === "patientPrescriptionTable" ? < PatientPrescriptionTable/> : ""}
          {triggerTable === "patientInvoice" ? < PatientInvoice/> : ""}
        </Grid>
        
      
    </Grid>
    </div>
  );
   
}
 export default PatientProfileData;