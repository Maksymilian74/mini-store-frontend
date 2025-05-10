// Layout component that wraps all pages with a Navbar
import Navbar from '../components/Navbar';
import {Container, Toolbar} from '@mui/material';
import {Outlet} from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Toolbar />
      <Container
        maxWidth="lg"
        sx={{bgcolor: 'background.paper', minHeight: '100vh', pt: 4}}
      >
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
