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

const AddPatient = () => {
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
                    <Typography style={{ color: "white", padding: "10px" }} variant='h4' align='left' >Add New Patient</Typography>
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
                        <TextField id="outlined-basic" label=" FirstName" variant="outlined" />
                    </Grid>
                    <Grid item lg={6} className="formEntries">
                        <TextField id="outlined-basic" label=" LastName" variant="outlined" />
                    </Grid>
                    <Grid item lg={6} className="formEntries">
                        <TextField id="outlined-basic" label="Age" type="number" />
                    </Grid>
                    <Grid item lg={6} className="formEntries">
                        <TextField
                            id="outlined-select-currency"
                            select
                            label="Gender"
                            value={currency}
                            onChange={handleChange}
                        >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>                        </Grid>
                    <Grid item lg={6} className="formEntries">
                        <TextField id="outlined-basic" label="weight" variant="outlined" />
                    </Grid >
                    <Grid item lg={6} className="formEntries">
                        <TextField id="outlined-basic" label="Allergy" variant="outlined" />
                    </Grid>
                    <Grid item lg={6} className="formEntries">
                        <TextField id="outlined-basic" label="phone" variant="outlined" />
                    </Grid>
                    <Grid item lg={6} className="formEntries">
                        <TextField id="outlined-basic" label="Address" variant="outlined" />
                    </Grid>
                    <Grid item lg={6} className="formEntries">
                        <TextField id="outlined-basic" label="Email" variant="outlined" />
                    </Grid>
                    <Grid item lg={6} className="formEntries">
                        <input type="file" ></input>
                    </Grid>
                </Grid>
                <Grid item lg={12} md={12}
                    className="patientForm"
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    style={{ marginTop: "15px" }}
                >
                    <Grid item lg={12} className="patientFormHeading">
                        <h1>Medical Information</h1>
                    </Grid>
                    <Grid item lg={6} className="formEntries">
                        <TextField id="outlined-basic" label=" Height" variant="outlined" />
                    </Grid>
                    <Grid item lg={6} className="formEntries">
                        <TextField id="outlined-basic" label=" Weight" variant="outlined" />
                    </Grid>
                    <Grid item lg={6} className="formEntries">
                    <TextField id="outlined-basic" label=" Blood Pressure" variant="outlined" />
                    </Grid>
                    <Grid item lg={6} className="formEntries">
                        <TextField
                            id="outlined-select-currency"
                            select
                            label="Blood Group"
                            value={currency}
                            onChange={handleChange}
                        >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>                        </Grid>
                    <Grid item lg={6} className="formEntries">
                        <TextField id="outlined-basic" label="Pulse" variant="outlined" />
                    </Grid >
                    <Grid item lg={6} className="formEntries">
                        <TextField id="outlined-basic" label="Respiration" variant="outlined" />
                    </Grid>
                    <Grid item lg={6} className="formEntries">
                        <TextField id="outlined-basic" label="Diet" variant="outlined" />
                    </Grid>
                    <Grid item lg={6} className="formEntries">
                        <TextField id="outlined-basic" label="Allergy" variant="outlined" />
                    </Grid>
                    <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    item xs={12} 
                    className="Submitbtn"
                      > 
                    <Button>Add Patient</Button> 
                    </Grid>

                </Grid>
                
            </Grid>
        </div>
    )
}

export default AddPatient;
