// Root component that applies the custom MUI theme and renders application routes.
import {AppRoutes} from './routes/Router';
import {ThemeProvider} from '@mui/material';
import theme from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
