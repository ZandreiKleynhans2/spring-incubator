import {
  Button,
  FormControl,
  FormLabel,
  MenuItem,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import { FormControlLabel } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import "./StartScreen.css";

const CITY_KEY = 'city';
const TIME_FORMAT_KEY = 'timeFormat';


export const StartScreen = () => {
  const [city, setCity] = React.useState(localStorage.getItem(CITY_KEY) || '');
  const [timeFormat,setTimeFormat] = React.useState(localStorage.getItem(TIME_FORMAT_KEY) || '');

  const handleCityChange = (event) => {
    const selectedCity = event.target.value;
    setCity(selectedCity);
    localStorage.setItem(CITY_KEY,selectedCity);
  };

  const handleTimeFormatChange = (event) => {
    const selectedTimeFormat = event.target.value;
    setTimeFormat(selectedTimeFormat);
    localStorage.setItem(TIME_FORMAT_KEY,selectedTimeFormat);
  }

  const isButtonDisabled = !city || !timeFormat;

  return (
    <div className="start-screen-container">
      <Typography variant="h2" gutterBottom>
        Setup
      </Typography>

      <Stack spacing={2} direction="column" width={300}>
        <FormControl fullWidth>
          <FormLabel color="secondary">Please select city</FormLabel>
          <Select
            id="city-select"
            value={city}
            onChange={handleCityChange}
            color="secondary"
          >
            <MenuItem value={"Pretoria"}>Pretoria</MenuItem>
            <MenuItem value={"Johannesburg"}>Johannesburg</MenuItem>
            <MenuItem value={"Cape Town"}>Cape Town</MenuItem>
            <MenuItem value={"Durban"}>Durban</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <FormLabel color="secondary">Please select time format</FormLabel>
          <RadioGroup row name="time-format-radio-group" onChange={handleTimeFormatChange}>
            <FormControlLabel value="24h" control={<Radio color="secondary"/>} label="24h" />
            <FormControlLabel value="12h" control={<Radio color="secondary"/>} label="12h" />
          </RadioGroup>
        </FormControl>
        <Button variant="contained" color="secondary" href="/timezone" disabled={isButtonDisabled}>
          Confirm
        </Button>
      </Stack>
    </div>
  );
};
