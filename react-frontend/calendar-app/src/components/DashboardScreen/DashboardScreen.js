import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";

const API_KEY = "570c82d2614e9c4c31719d87f341744e";
const CITY_KEY = "city";

export const DashboardScreen = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [weatherData, setWeatherData] = useState(null);
  const city = localStorage.getItem(CITY_KEY);

  useEffect(() => {
    fetchWeatherData(selectedDate);
  }, []);

  const handleDateChange = (event) => {
    const date = new Date(event.target.value);
    setSelectedDate(date);
    fetchWeatherData(date);
  };

  const fetchWeatherData = async (date) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      setWeatherData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
      setWeatherData(null);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h2" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Current weather for {city}
              </Typography>
              {weatherData ? (
                <Typography variant="body1" component="p">
                  Temperature: {weatherData.main.temp}°C
                  <br />
                  High: {weatherData.main.temp_max}°C
                  <br />
                  Low: {weatherData.main.temp_min}°C
                  <br />
                  Humidity: {weatherData.main.humidity}%
                </Typography>
              ) : (
                <Typography variant="body1" component="p">
                  No weather data available.
                </Typography>
              )}
            </CardContent>
          </Card>
          <Button variant="contained" color="secondary" href="/calendar">
            Check Itinerary
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
