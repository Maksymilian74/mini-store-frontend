// Top navigation bar with logo, title, cart, and user icons
import {AppBar, Toolbar, Typography, IconButton, Stack} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useNavigate} from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

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
            <ShoppingCartOutlinedIcon fontSize="large" />
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
