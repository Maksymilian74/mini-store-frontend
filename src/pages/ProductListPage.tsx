import {Typography, Container, Stack} from '@mui/material';
import ProductListCard from '../components/ProductListCard.tsx';

function ProductListPage() {
  return (
    <Container maxWidth="md">
      <Stack spacing={3} width="100%" alignItems="center">
        <Typography variant="h1" component="h1">
          Wszystkie produkty
        </Typography>
        <ProductListCard price={3.49} name={'Banany BIO'} />
      </Stack>
    </Container>
  );
}

export default ProductListPage;
