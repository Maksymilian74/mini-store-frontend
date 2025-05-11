// Cart summary component displaying total price
import {Card, CardContent, Typography, Stack} from '@mui/material';
import OutlinedButton from '../common/OutlinedButton/OutlinedButton';
import PrimaryButton from '../common/PrimaryButton/PrimaryButton';
import {useNavigate} from 'react-router-dom';

type CartSummaryBoxProps = {
  total: number;
};

const CartSummaryBox = ({total}: CartSummaryBoxProps) => {
  const navigate = useNavigate();

  return (
    <Stack spacing={2} alignItems="flex-end">
      <OutlinedButton onClick={() => navigate('/list')}>
        Powrót do przeglądania
      </OutlinedButton>

      <Card variant="outlined" sx={{borderRadius: 2}}>
        <CardContent>
          <Stack spacing={1} alignItems="flex-end" sx={{p: 1.5}}>
            <Typography variant="body1">Łączna kwota</Typography>
            <Typography variant="body2">{total.toFixed(2)} PLN</Typography>
            <PrimaryButton onClick={() => navigate('/summary')}>
              Przejdź do podsumowania
            </PrimaryButton>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default CartSummaryBox;
