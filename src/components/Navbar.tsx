// Top navigation bar with logo, title, cart, and user icons
import {AppBar, Toolbar, Typography, IconButton, Stack} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  return (
    <AppBar position="static" color="transparent" elevation={3}>
      <Toolbar sx={{justifyContent: 'space-between'}}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <IconButton color="primary">
            <HomeIcon fontSize="large" />
          </IconButton>
          <Typography variant="h2">Mini Sklep</Typography>
        </Stack>

        <Stack direction="row" spacing={2} alignItems="center">
          <IconButton color="primary">
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
