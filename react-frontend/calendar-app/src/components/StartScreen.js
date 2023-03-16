import { Button, FormControl, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system';
import React from 'react'

export const StartScreen = () => {
  const [city,setCity] = React.useState('');
  const handleChange = (event) => {
    setCity(event.target.value);
  };
  return (
    <div>
      <Typography variant='h2' gutterBottom>Select City</Typography>
      
      <Stack spacing={2} direction='column'>
        <FormControl fullWidth>
         <Select 
            id='city-select'
            value={city}
            onChange={handleChange}
            color='secondary'
         >
              <MenuItem value={'Pretoria'}>Pretoria</MenuItem>
              <MenuItem value={'Johannesburg'}>Johannesburg</MenuItem>
              <MenuItem value={'Cape Town'}>Cape Town</MenuItem>
              <MenuItem value={'Durban'}>Durban</MenuItem>
          </Select>
        </FormControl>
        <Button variant='contained' color='secondary'>Confirm</Button>
      </Stack>
    </div>
  )
}
