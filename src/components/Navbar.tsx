// Top navigation bar with logo, title, cart, and user icons
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Stack,
  Badge,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useNavigate} from 'react-router-dom';
import {useCart} from '../hooks/useCart';

const Navbar = () => {
  const navigate = useNavigate();
  const {cartItems} = useCart();

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <AppBar position="fixed" elevation={3} sx={{bgcolor: 'background.paper'}}>
      <Toolbar sx={{justifyContent: 'space-between'}}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <IconButton color="primary" onClick={() => navigate('/list')}>
            <HomeIcon fontSize="large" />
          </IconButton>
          <Typography variant="h2">Mini Sklep</Typography>
        </Stack>

        <Stack direction="row" spacing={2} alignItems="center">
          <IconButton color="primary" onClick={() => navigate('/cart')}>
            <Badge badgeContent={totalQuantity} color="primary">
              <ShoppingCartOutlinedIcon fontSize="large" />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <AccountCircleIcon fontSize="large" />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
