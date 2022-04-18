import React from 'react'
import { Autocomplete, Button, Grid, MenuItem, Typography } from '@mui/material'
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';


const top10Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  {
    title: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  {
    title: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
];



const top100Films = [{ label: 'Online' },
{ label: 'Cash' },
// { label: 'M', year: 1931 },
// { label: 'Requiem for a Dream', year: 2000 },
// { label: 'Amélie', year: 2001 },
// { label: 'A Clockwork Orange', year: 1971 },
// { label: 'Like Stars on Earth', year: 2007 },
// { label: 'Taxi Driver', year: 1976 },
// { label: 'Lawrence of Arabia', year: 1962 },
// { label: 'Double Indemnity', year: 1944 },
// {
//   label: 'Eternal Sunshine of the Spotless Mind',
//   year: 2004,
// },
// { label: 'Amadeus', year: 1984 },
// { label: 'To Kill a Mockingbird', year: 1962 },
// { label: 'Toy Story 3', year: 2010 },
// { label: 'Logan', year: 2017 },
// { label: 'Full Metal Jacket', year: 1987 },
// { label: 'Dangal', year: 2016 },
// { label: 'The Sting', year: 1973 },
// { label: '2001: A Space Odyssey', year: 1968 },
// { label: "Singin' in the Rain", year: 1952 },
// { label: 'Toy Story', year: 1995 },
// { label: 'Bicycle Thieves', year: 1948 },
// { label: 'The Kid', year: 1921 },
// { label: 'Inglourious Basterds', year: 2009 },
// { label: 'Snatch', year: 2000 },
// { label: '3 Idiots', year: 2009 },
// { label: 'Monty Python and the Holy Grail', year: 1975 },
]

const patient = [{ label: 'Ali' },
{ label: 'Ahmad' },
{ label: 'Hassan' },
{ label: 'Jahangir' },

]

const Patients = () => {
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <div>
       <Button className='backBtn'> Back To Patient Entry List</Button>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"

      >
        <Grid item lg={12} xs={12} className="patientFormHeading">
          <Typography style={{ color: "white", padding: "10px" }} variant='h4' align='left' >CREATE INVOICE</Typography>
        </Grid>


        <Grid item lg={12} xs={12} md={12}
          className="patientForm"
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item lg={12} xs={12} className="patientFormHeading">
            <h1>Invoice Details</h1>
          </Grid>

          <Grid item lg={6} xs={12} className="formEntries">
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={patient}
              sx={{ width: "100%" }}
              renderInput={(params) => <TextField {...params} label="Patient" />}
            />
          </Grid>
          {/* <Grid item lg={6} xs={12} className="formEntries">
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              sx={{ width: "100%" }}
              renderInput={(params) => <TextField {...params} label="Appointment" />}
            />
          </Grid> */}

          <Grid item lg={6} xs={12} className="formEntries">
            <TextField id="outlined-basic" label=" Doctor" variant="outlined" />
          </Grid>
          <Grid item lg={6} xs={12} className="formEntries">
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              sx={{ width: "100%" }}
              renderInput={(params) => <TextField {...params} label="Payment Mode" />}
            />
          </Grid>
          {/* <Grid item lg={6} xs={12} className="formEntries">
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              sx={{ width: "100%" }}
              renderInput={(params) => <TextField {...params} label="Payment Status" />}
            />
          </Grid> */}
          <Grid item lg={6} xs={12} className="formEntries">
       
          </Grid>

          <Grid item lg={12} xs={12} className="patientFormHeading">
            <h1>Invoice Summary</h1>
          </Grid>
          <Grid item lg={6} xs={12} className="formEntries">
            <Autocomplete
              className='patient-entry-field'
              multiple
              id="checkboxes-tags-demo"
              options={top10Films}
              disableCloseOnSelect
              getOptionLabel={(option) => option.title}
              renderOption={(props, option, { selected }) => (
                <li {...props}>
              
                  {option.title}
                </li>
              )}
              style={{ width: 568 }}
              renderInput={(params) => (
                <TextField {...params} label="Checkboxes" placeholder="Favorites" />
              )}
            />
          </Grid>
          <Grid item lg={6} xs={12} className="formEntries">
       
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

export default Patients;
