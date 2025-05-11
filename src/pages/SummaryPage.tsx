// Summary page displaying purchased items and total amount
import {Typography, Container, Stack} from '@mui/material';
import SummaryCard from '../components/SummaryCard/SummaryCard';
import OutlinedButton from '../common/OutlinedButton/OutlinedButton';
import PrimaryButton from '../common/PrimaryButton/PrimaryButton';
import {useCart} from '../hooks/useCart';

function SummaryPage() {
  const {cartItems} = useCart();

  return (
    <Container sx={{width: '100%'}}>
      <Stack spacing={3} width="100%" alignItems="center" sx={{pb: 3}}>
        <Typography variant="h1" component="h1">
          Podsumowanie zakupów
        </Typography>
        {cartItems.map((item) => (
          <SummaryCard
            key={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
        <Stack
          spacing={2}
          direction="row"
          justifyContent="flex-end"
          sx={{width: '70%'}}
        >
          <Typography variant="body1">Łączna kwota</Typography>
          <Typography variant="body2">33.53 PLN</Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{width: '65%'}}
        >
          <OutlinedButton onClick={() => {}}>Powrót do koszyka</OutlinedButton>
          <PrimaryButton onClick={() => {}}>Złóż zamówienie</PrimaryButton>
        </Stack>
      </Stack>
    </Container>
  );
}

export default SummaryPage;
