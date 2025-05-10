// Cart card component displaying product name, price, subtotal, quantity input, and a remove button.
import {Card, CardContent, Typography, Stack} from '@mui/material';
import {SummaryCardStyle} from './SummaryCard.styles';

type SummaryCardProps = {
  name: string;
  price: number;
  quantity: number;
};

const SummaryCard = ({name, price, quantity}: SummaryCardProps) => {
  const subtotal = (price * quantity).toFixed(2);

  return (
    <Card variant="outlined" sx={SummaryCardStyle}>
      <CardContent>
        <Stack spacing={2} sx={{px: 3}}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body1">{name}</Typography>
            <Typography variant="body2">{price.toFixed(2)} PLN</Typography>
          </Stack>

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body1">Ilość</Typography>
            <Typography variant="body2">{quantity} szt.</Typography>
          </Stack>

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body1">Suma częściowa</Typography>
            <Typography variant="body2">{subtotal} PLN</Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
