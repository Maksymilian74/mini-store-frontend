// Root component that applies the custom MUI theme and renders application routes.
import {AppRoutes} from './routes/Router';
import {ThemeProvider} from '@mui/material';
import {CartProvider} from './context/CartProvider';
import theme from './theme/theme';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <CartProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename="/mini-store-frontend">
          <AppRoutes />
        </BrowserRouter>
        <ToastContainer position="top-center" autoClose={1000} />
      </ThemeProvider>
    </CartProvider>
  );
}

export default App;
