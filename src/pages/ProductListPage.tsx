// Product list page displaying product cards
import {Typography, Container, Stack} from '@mui/material';
import ProductListCard from '../components/ProductListCard/ProductListCard';
import products from '../data/products.json';
import {useCart} from '../hooks/useCart';
import type {Product} from '../types/Product';
import {toast} from 'react-toastify';

const typedProducts: Product[] = products;

function ProductListPage() {
  const {addToCart} = useCart();

  return (
    <Container sx={{width: '100%', pb: 3}}>
      <Stack spacing={3} width="100%" alignItems="center">
        <Typography variant="h1" component="h1">
          Wszystkie produkty
        </Typography>
        {typedProducts.map((product) => (
          <ProductListCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price.main + product.price.fractional / 100}
            onAddToCart={(quantity) => {
              addToCart({
                id: product.id,
                name: product.name,
                price: product.price.main + product.price.fractional / 100,
                quantity,
              });
              toast.success(`Dodano do koszyka`);
            }}
          />
        ))}
      </Stack>
    </Container>
  );
}

export default ProductListPage;
