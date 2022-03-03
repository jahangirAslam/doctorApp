import React from 'react'
import { Button, Grid, MenuItem, TextField, Typography } from '@mui/material'


const currencies = [
    {
        label: 'A',
    },
    {
        label: 'B',
    },
    {
        label: 'Ab',
    },
    {
        label: 'B-',
    },
    {
        label: 'A-',
    },
    {
        label: 'AB-',
    },
    {
        label: 'O',
    },
    {
        label: 'o-',
    },


];

const AddType = () => {
    const [currency, setCurrency] = React.useState('EUR');

    const handleChange = (event) => {
        setCurrency(event.target.value);
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
                    <Typography style={{ color: "blue", padding: "10px" }} variant='h4' align='left' >Add Type</Typography>
                </Grid>


                <Grid item lg={12} md={12}
                    className="patientForm"
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item lg={12} className="patientFormHeading">
                        <h1>Basic Information</h1>
                    </Grid>
                    <Grid item lg={6} className="formEntries">
                        <TextField id="outlined-basic" label=" Name" variant="outlined" />
                    </Grid>
                    <Grid item lg={6} className="formEntries">
                        <TextField id="outlined-basic" label=" Doctor Select" variant="outlined" />
                    </Grid>
                    <Grid item lg={6} className="formEntries">
                        <TextField id="outlined-basic" label=" Price" variant="outlined" />
                    </Grid>
                    <Grid item lg={6} className="formEntries">
                        <TextField id="outlined-basic" label=" Price" variant="outlined" />
                    </Grid>
                  
                    
                </Grid> 
              
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    item xs={12} 
                    className="xyz"
                      > 
                    <Button>Submit</Button> 
                    </Grid>
            </Grid>
        </div>
    )
}

export default AddType;
