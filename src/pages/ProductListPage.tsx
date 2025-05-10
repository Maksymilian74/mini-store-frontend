import {Typography, Container, Stack} from '@mui/material';

function ProductListPage() {
  return (
    <Container maxWidth="lg">
      <Stack spacing={3}>
        <Typography variant="h1" component="h1">
          Wszystkie produkty
        </Typography>
      </Stack>
    </Container>
  );
}

export default ProductListPage;
