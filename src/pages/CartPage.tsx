// Cart page displaying a list of cart item cards and summary
import {Container, Stack, Typography} from '@mui/material';
import CartCard from '../components/CartCard/CartCard';
import CartSummaryBox from '../components/CartSummaryBox';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useCart} from '../hooks/useCart';
import {toast} from 'react-toastify';
import {sumCartValue} from '../utils/sumCartValue';

function CartPage() {
  const {cartItems, removeFromCart, changeQuantity} = useCart();

  const total = sumCartValue(cartItems);

  return (
    <Container sx={{width: '100%'}}>
      <Stack spacing={3} width="100%" alignItems="center" sx={{pb: 3}}>
        <Typography variant="h1" component="h1">
          Twój koszyk
        </Typography>

        <Stack
          spacing={3}
          direction="row"
          justifyContent="center"
          sx={{width: '100%'}}
        >
          {cartItems.length === 0 ? (
            <Stack direction="row" alignItems="center" spacing={1}>
              <ShoppingCartIcon />
              <Typography variant="h2" sx={{py: 4}}>
                Twój koszyk jest pusty
              </Typography>
            </Stack>
          ) : (
            <Stack spacing={2} sx={{width: '100%'}}>
              {cartItems.map((item) => (
                <CartCard
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  onQuantityChange={(q) => changeQuantity(item.id, q)}
                  onRemove={() => {
                    removeFromCart(item.id);
                    toast.info(`Usunięto z koszyka`);
                  }}
                />
              ))}
            </Stack>
          )}
          <Stack sx={{minWidth: '25%'}}>
            <CartSummaryBox total={total} />
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}

export default CartPage;
