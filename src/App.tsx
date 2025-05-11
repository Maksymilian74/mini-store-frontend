// Root component that applies the custom MUI theme and renders application routes.
import {AppRoutes} from './routes/Router';
import {ThemeProvider} from '@mui/material';
import {CartProvider} from './context/CartProvider';
import theme from './theme/theme';

function App() {
  return (
    <CartProvider>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </CartProvider>
  );
}

export default App;
