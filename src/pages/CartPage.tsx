// Cart page displaying a list of cart item cards and summary
import {Container, Stack, Typography} from '@mui/material';
import CartCard from '../components/CartCard/CartCard';
import CartSummaryBox from '../components/CartSummaryBox';
import {useCart} from '../hooks/useCart';

function CartPage() {
  const {cartItems, removeFromCart, changeQuantity} = useCart();

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
            {cartItems.map((item) => (
              <CartCard
                key={item.id}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                onQuantityChange={(q) => changeQuantity(item.id, q)}
                onRemove={() => removeFromCart(item.id)}
              />
            ))}
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
