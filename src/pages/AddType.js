import React from 'react'
import { Button, Grid, MenuItem, TextField, Typography } from '@mui/material'


const doctor = [
    {
        label: 'Ahmad',
    },
    {
        label: 'Ali',
    },
    {
        label: 'Hassan',
    },
  
];

const AddType = () => {
    const [doctors, setdoctors] = React.useState();

    const handleChange = (event) => {
        setdoctors(event.target.value);
    };
    return (
        <div>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"

            >
                <Grid item lg={12} className="patientFormHeading">
                    <Typography style={{ color: "white", padding: "10px" }} variant='h4' align='left' >Add Type</Typography>
                </Grid>


                <Grid item lg={12} md={12}
                    className="patientForm"
                    container
                    direction="row"
                    justifyContent="start"
                    alignItems="center"
                >
                    <Grid item lg={12} className="patientFormHeading">
                        <h1>Basic Information</h1>
                    </Grid>
                    <Grid item lg={6} className="formEntries">
                        <TextField id="outlined-basic" label=" Name" variant="outlined" />
                    </Grid>
                    <Grid item lg={6} className="formEntries">
                        <TextField
                            id="outlined-select-currency"
                            select
                            label="Doctor Select"
                            value={doctor}
                            onChange={handleChange}
                        >
                            {doctor.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>                        </Grid>
                    <Grid item lg={6} className="formEntries">
                        <TextField id="outlined-basic" label=" Price" variant="outlined" />
                    </Grid>
                    {/* <Grid item lg={6} className="formEntries">
                        <TextField id="outlined-basic" label=" Price" variant="outlined" />
                    </Grid> */}
                    
                    <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    item xs={12} 
                    className="Submitbtn "
                      > 
                    <Button>Submit</Button> 
                    </Grid>
                  
                    
                </Grid> 
              
               
            </Grid>
        </div>
    )
}

export default AddType;
