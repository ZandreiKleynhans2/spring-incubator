import "./App.css";
import { MuiTypography } from "./components/MuiTypography";
import { MuiButton } from "./components/MuiButton";
import { StartScreen } from "./components/StartScreen/StartScreen";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashboardScreen } from "./components/DashboardScreen/DashboardScreen";
import { CalendarView } from "./components/Calendar/CalendarView";
import { Calendar } from "./components/NewCalendar/Calendar";
import NewerCalendar from "./components/NewerCalendar/NewerCalendar";

function App() {
  return (
    <BrowserRouter>
      <div className="App"></div>
      <Routes>
        <Route path="/" Component={StartScreen} exact />
        <Route path="/dashboard" Component={DashboardScreen} />
        <Route path="/calendar" Component={Calendar} />
        <Route path="/cal" Component={CalendarView} />
        <Route path="/ncal" Component={NewerCalendar}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
