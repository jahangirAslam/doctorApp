import React from 'react'
import { Grid, TextField } from '@mui/material'

const AddPatient = () => {
    return (
        <div>
            <Grid 
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            
            >
                <Grid item lg={12} className="patientFormHeading">
                    <h1>Patient Form</h1>
                    </Grid>
                    

                    <Grid   item lg={12 } md={12}
                    className="patientForm"
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                   >
                        <Grid item lg={4 } className="formEntries">
                        <TextField id="outlined-basic" label="Name" variant="outlined" />
                        </Grid>
                        <Grid item lg={4 } className="formEntries">
                        <TextField id="outlined-basic" label="Age" type="number" InputLabelProps={{ shrink: true,}} />
                        </Grid>
                        <Grid item lg={4 } className="formEntries">
                        <TextField id="outlined-basic" label="With sx" variant="outlined" />
                        </Grid>
                        <Grid item lg={4 } className="formEntries">
                        <TextField id="outlined-basic" label="weight" variant="outlined" />
                        </Grid >
                        <Grid item lg={4 } className="formEntries">
                        <TextField id="outlined-basic" label="Allergy" variant="outlined" />
                        </Grid>
                        <Grid item lg={4 } className="formEntries">
                        <TextField id="outlined-basic" label="phone number" type="number" InputLabelProps={{ shrink: true,}} />
                        </Grid>
                        <Grid item lg={4 } className="formEntries">
                        <TextField id="outlined-basic" label="Address" variant="outlined" />
                        </Grid>
                        </Grid>
                        
                
            </Grid>
        </div>
    )
}

export default AddPatient;
