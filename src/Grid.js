import React from 'react';
import { Autocomplete, TextField, Button, Card, CardContent, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const Grid = ({ onCalculate }) => {
  // Define options array
  const options = [];

  // Dummy distance value for demonstration
  const distance = 10; // Replace with actual distance value

  return (
    <section style={{ margin: "20px", maxWidth: "300px", width: "100%" }}>
      <form>
        <Autocomplete
          disablePortal
          id="origin"
          options={options} // Pass options array here
          sx={{ width: '100%', marginBottom: "10px" }}
          renderInput={(params) => <TextField {...params} label="Origin" />}
        />
        <Autocomplete
          disablePortal
          id="stop"
          options={options} // Pass options array here
          sx={{ width: '100%', marginBottom: "10px" }}
          renderInput={(params) => <TextField {...params} label="Stop" />}
        />
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "10px" }}>
          <Button variant="contained" color="primary" onClick={onCalculate} sx={{ borderRadius: "20px" }}>Calculate</Button>
        </div>
        <div style={{ display: "inline-flex", flexDirection: "row", alignItems: "center", marginBottom: "10px" }}>
          <AddCircleOutlineIcon />
          <p style={{ marginLeft: "5px" }}>Add another stop</p>
        </div>
        <Autocomplete
          disablePortal
          id="destination"
          options={options} // Pass options array here
          sx={{ width: '100%', marginBottom: "20px" }}
          renderInput={(params) => <TextField {...params} label="Destination" />}
        />
      </form>
      {/* Card for displaying distance */}
      <Card>
        <CardContent style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Typography variant="h6" component="h2">Distance:</Typography>
          <Typography variant="h4" component="p" style={{color:'blue'}}>{distance} km</Typography>
        </CardContent>
      </Card>
    </section>
  );
}

export default Grid;
