import React, { useState } from 'react';
import dayjs from 'dayjs';
import './Calendar.css';

export const Calendar = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [tasks, setTasks] = useState({});

  const daysMatrix = getMonth();

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const handleAddTask = (task) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [selectedDay.format('YYYY-MM-DD')]: [...(prevTasks[selectedDay.format('YYYY-MM-DD')] || []), task],
    }));
  };

  return (
    <>
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
                <td
                  key={j}
                  onClick={() => handleDayClick(day)}
                  className={selectedDay && day.isSame(selectedDay, 'day') ? 'selected' : ''}
                >
                  {day && day.format('D')}
                  {tasks[day.format('YYYY-MM-DD')] && (
                    <ul>
                      {tasks[day.format('YYYY-MM-DD')].map((task, k) => (
                        <li key={k}>{task}</li>
                      ))}
                    </ul>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {selectedDay && (
        <div className="add-task-form">
          <h3>Add Task for {selectedDay.format('MMMM D, YYYY')}</h3>
          <form onSubmit={(e) => {
            e.preventDefault();
            handleAddTask(e.target.elements.task.value);
            e.target.elements.task.value = "";
          }}>
            <input type="text" name="task" />
            <button type="submit">Add</button>
          </form>
        </div>
      )}
    </>
  );
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

