// Cart page displaying a list of cart item cards and summary
import {Container, Stack, Typography} from '@mui/material';
import CartCard from '../components/CartCard/CartCard';

function CartPage() {
  return (
    <Container sx={{width: '100%'}}>
      <Stack spacing={3} width="100%" alignItems="center">
        <Typography variant="h1" component="h1">
          Twój koszyk
        </Typography>
        <Stack>
          <CartCard
            name="Banany BIO"
            price={3.49}
            quantity={2}
            onQuantityChange={() => {}}
            onRemove={() => {}}
          />
        </Stack>
      </Stack>
    </Container>
  );
}

export default CartPage;
