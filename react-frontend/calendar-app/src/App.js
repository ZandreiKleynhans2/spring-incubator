import './App.css';
import { MuiTypography } from './components/MuiTypography';
import { MuiButton } from './components/MuiButton';
import { StartScreen } from './components/StartScreen';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//   },
// });
function App() {
  return (
    
    <div className="App">
      {/* <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
      </ThemeProvider> */}
      <header className="App-header">
        {/* <MuiTypography></MuiTypography> */}
        {/* <MuiButton/> */}
      <StartScreen></StartScreen>
        
      </header>
    </div>
  );
}
  
export default App;

