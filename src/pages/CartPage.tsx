// Cart page displaying a list of cart item cards and summary
import {Container, Stack, Typography} from '@mui/material';
import CartCard from '../components/CartCard/CartCard';
import CartSummaryBox from '../components/CartSummaryBox';

function CartPage() {
  return (
    <Container sx={{width: '100%'}}>
      <Stack spacing={3} width="100%" alignItems="center" sx={{pb: 3}}>
        <Typography variant="h1" component="h1">
          Twój koszyk
        </Typography>
        <Stack
          spacing={3}
          direction="row"
          justifyContent="space-between"
          sx={{width: '100%'}}
        >
          <Stack spacing={2} sx={{width: '100%'}}>
            <CartCard
              name="Banany BIO"
              price={3.49}
              quantity={2}
              onQuantityChange={() => {}}
              onRemove={() => {}}
            />
          </Stack>
          <Stack sx={{minWidth: '25%'}}>
            <CartSummaryBox
              total={10.43}
              onBack={() => {}}
              onProceed={() => {}}
            />
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}

export default CartPage;
