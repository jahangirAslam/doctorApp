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

const AddDoctor = () => {
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
                    <Typography style={{ color: "blue", padding: "10px" }} variant='h4' align='left' >Add New Doctor</Typography>
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
                        <TextField id="outlined-basic" label="Email" type="number" />
                    </Grid>
                    {/* <Grid item lg={6} className="formEntries">
                        {/* <TextField
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
                        </TextField>                        </Grid> */}
                    <Grid item lg={6} className="formEntries">
                        <TextField id="outlined-basic" label="Contact Number " variant="outlined" />
                    </Grid >
                    <Grid item lg={6} className="formEntries">
                        <TextField id="outlined-basic" label="Title *" variant="outlined" />
                    </Grid>
                    <Grid item lg={6} className="formEntries">
                        <TextField id="outlined-basic" label="Fees" variant="outlined" />
                    </Grid>
                    <Grid item lg={6} className="formEntries">
                        <TextField id="outlined-basic" label="Degree" variant="outlined" />
                    </Grid>
                    <Grid item lg={6} className="formEntries">
                        <TextField id="outlined-basic" label="Experience" variant="outlined" />
                    </Grid>
                    <Grid item lg={12} className="formEntries">
                        <input type="file" ></input>
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

export default AddDoctor;
