// Product list page displaying product cards
import {Typography, Container, Stack} from '@mui/material';
import ProductListCard from '../components/ProductListCard';
import products from '../data/products.json';
import type {Product} from '../types/Product';

const typedProducts: Product[] = products;

function ProductListPage() {
  return (
    <Container sx={{width: '100%'}}>
      <Stack spacing={3} width="100%" alignItems="center">
        <Typography variant="h1" component="h1">
          Wszystkie produkty
        </Typography>
        {typedProducts.map((product) => (
          <ProductListCard
            key={product.id}
            name={product.name}
            price={product.price.main + product.price.fractional / 100}
          />
        ))}
      </Stack>
    </Container>
  );
}

export default ProductListPage;
