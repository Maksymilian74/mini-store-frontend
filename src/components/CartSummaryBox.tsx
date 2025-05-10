// Cart summary component displaying total price
import {Card, CardContent, Typography, Stack} from '@mui/material';
import OutlinedButton from '../common/OutlinedButton/OutlinedButton';
import PrimaryButton from '../common/PrimaryButton/PrimaryButton';

type CartSummaryBoxProps = {
  total: number;
  onBack: () => void;
  onProceed: () => void;
};

const CartSummaryBox = ({total, onBack, onProceed}: CartSummaryBoxProps) => {
  return (
    <Stack spacing={2} alignItems="flex-end">
      <OutlinedButton onClick={onBack}>Powrót do przeglądania</OutlinedButton>

      <Card variant="outlined" sx={{borderRadius: 2}}>
        <CardContent>
          <Stack spacing={1} alignItems="flex-end" sx={{p: 1.5}}>
            <Typography variant="body1">Łączna kwota</Typography>
            <Typography variant="body2">{total.toFixed(2)} PLN</Typography>
            <PrimaryButton onClick={onProceed}>
              Przejdź do podsumowania
            </PrimaryButton>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default CartSummaryBox;
