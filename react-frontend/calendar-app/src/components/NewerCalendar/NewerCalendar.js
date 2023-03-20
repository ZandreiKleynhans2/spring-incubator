import { Typography } from '@mui/material'
import React from 'react'
import CalendarGrid from './CalendarGrid'
import './NewerCalendar.css'
import dayjs from 'dayjs';

export default function NewerCalendar() {
  return (
    <>
      <Typography variant='h1'>Itinerary</Typography>
      <CalendarGrid/>
    </>
  )
}

function getMonth(month = dayjs().month()) {
    const year = dayjs().year();
    const firstDayOfMonth = dayjs(new Date(year, month, 1)).day();
    let currentMonthCount = 0 - firstDayOfMonth;
    const daysMatrix = new Array(5)
      .fill([])
      .map(() =>
        new Array(7).fill(null).map(() => {
          currentMonthCount++;
          return dayjs(new Date(year, month, currentMonthCount));
        })
      );
    return daysMatrix;
  }
