import React, { useState } from "react";
import dayjs from "dayjs";

export default function CalendarGrid() {
  const [selectedDay,setSelectedDay] = useState(null);
  const [tasks,setTasks] = useState({});

  const daysMatrix = getMonth();

  function handleDayClick(day){
    setSelectedDay(day);
  }
  
  return (
    <table>
      <thead>
        <tr>
          <th>Sun</th>
          <th>Mon</th>
          <th>Tue</th>
          <th>Wed</th>
          <th>Thu</th>
          <th>Fri</th>
          <th>Sat</th>
        </tr>
      </thead>
      <tbody>
        {daysMatrix.map((week, i) => (
          <tr key={i}>
            {week.map((day, j) => (
              <td key={j}
              onClick={handleDayClick(day)}></td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function getMonth(month = dayjs().month()) {
  const year = dayjs().year();
  const firstDayOfMonth = dayjs(new Date(year, month, 1)).day();
  let currentMonthCount = 0 - firstDayOfMonth;
  const daysMatrix = new Array(5).fill([]).map(() =>
    new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    })
  );
  return daysMatrix;
}
