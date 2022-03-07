import React from 'react'
import { Button, Grid, MenuItem, TextField, Typography } from '@mui/material'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TimePicker from '@mui/lab/TimePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Stack from '@mui/material/Stack';
import AdapterDateFns from '@mui/lab/AdapterDateFns';


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
    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleChange = (newValue) => {
        setValue(newValue);
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
                    <Typography style={{ color: "white", padding: "10px" }} variant='h4' align='left' >Add New Doctor</Typography>
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
                    <Grid item lg={6} className="formEntries">
                        <h4> Doctor available days </h4>
                        <FormGroup className='checkboxes'>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Sun" />
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Mon" />
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Tues" />
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Wed" />
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Thurs" />
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Fri" />
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Sat" />

                        </FormGroup>
                    </Grid>
                    <Grid item lg={6} className="formEntries">
                        {/* <input type="file" ></input> */}

                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                    >
                        <Grid item lg={6}>
                            <h5 className='timeheader'>From</h5>


                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <Stack spacing={3}  className='timeInputs'>
                                    <TimePicker
                                        label="Time"
                                        
                                        value={value}
                                        onChange={handleChange}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </Stack>
                            </LocalizationProvider>
                        </Grid>
                        <Grid item lg={6} >
                            <h5 className='timeheader'>To</h5>
                            {/* <input type="time" className='timeInputs' ></input> */}
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <Stack spacing={3}  className='timeInputs' >
                                    <TimePicker
                                        label="Time"
                                       
                                        value={value}
                                        onChange={handleChange}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </Stack>
                            </LocalizationProvider>
                        </Grid>
                    </Grid>

                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        item xs={12}
                        className="Submitbtn"
                    >
                        <Button>Add Doctor</Button>
                    </Grid>




                </Grid>


            </Grid>
        </div>

    )
}

export default AddDoctor;
