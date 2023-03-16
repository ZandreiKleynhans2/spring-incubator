import { useState } from "react";
import { format, startOfMonth, endOfMonth, addDays, startOfWeek, endOfWeek, isSameMonth, isSameDay } from "date-fns";
import { Button, IconButton, Typography } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { addMonths } from 'date-fns';

export const CalendarView = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const handlePrevMonthClick = () => {
    setCurrentMonth((prevMonth) => addMonths(prevMonth, -1));
  };

  const handleNextMonthClick = () => {
    setCurrentMonth((prevMonth) => addMonths(prevMonth, 1));
  };

  const renderHeader = () => {
    const headerDateFormat = "MMMM yyyy";
    return (
      <Typography variant="h4" align="center" gutterBottom>
        {format(currentMonth, headerDateFormat)}
      </Typography>
    );
  };

  const renderDaysOfWeek = () => {
    return (
      <div style={{ display: "flex" }}>
        {weekdays.map((day) => (
          <Typography variant="body1" key={day} align="center" sx={{ width: "14.28%" }}>
            {day}
          </Typography>
        ))}
      </div>
    );
  };

  const renderCells = () => {
    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;

        days.push(
          <Button
            color="secondary"
            key={day}
            variant={isSameDay(day, new Date()) ? "contained" : "text"}
            sx={{ height: "100%", borderRadius: 0 ,width : "14.28%"}}
            onClick={() => console.log("Clicked on day", cloneDay)}
          >
            <Typography variant="body1">{formattedDate}</Typography>
          </Button>
        );

        day = addDays(day, 1);
      }

      rows.push(
        <div key={day} style={{ display: "flex", flex: 1, flexDirection: "row", height: "calc(100% / 6)" }}>
          {days}
        </div>
      );

      days = [];
    }

    return <div>{rows}</div>;
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <IconButton onClick={handlePrevMonthClick}>
          <ArrowBackIos />
        </IconButton>
        {renderHeader()}
        <IconButton onClick={handleNextMonthClick}>
          <ArrowForwardIos />
        </IconButton>
      </div>
      {renderDaysOfWeek()}
      {renderCells()}
    </div>
  );
};