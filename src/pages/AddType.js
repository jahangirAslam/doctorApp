import React from 'react'
import { Button, Grid, MenuItem, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom';

const AddType = () => {
    return (
        <div>
            <Button className='backBtn'>
                <Link to='/ListType'> 
                 <p>Back To Type List</p>
                </Link>

            </Button>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"

            >
                <Grid item lg={12} xs={12} className="patientFormHeading">
                    <Typography style={{ color: "white", padding: "10px" }} variant='h4' align='left' >Add Type</Typography>
                </Grid>


                <Grid item lg={12} xs={12} md={12}
                    className="patientForm"
                    container
                    direction="row"
                    justifyContent="start"
                    alignItems="center"
                >
                    <Grid item lg={12} xs={12} className="patientFormHeading">
                        <h1>Basic Information</h1>
                    </Grid>
                    <Grid item lg={6} xs={12} className="formEntries">
                        <TextField label=" Name" variant="outlined" />
                    </Grid>

                    <Grid item lg={6} xs={12} className="formEntries">
                        <TextField id="outlined-basic" label=" Price" variant="outlined" />
                    </Grid>

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
