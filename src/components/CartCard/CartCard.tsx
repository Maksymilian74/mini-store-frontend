// Cart card component displaying product name, price, subtotal, quantity input, and a remove button.
import {Card, CardContent, Typography, Stack} from '@mui/material';
import QuantityTextField from '../../common/QuantityTextField/QuantityTextField';
import {CartCardStyle} from './CartCard.styles';
import SecondaryButton from '../../common/SecondaryButton/SecondaryButton';

type CartCardProps = {
  name: string;
  price: number;
  quantity: number;
  onQuantityChange: (newQuantity: number) => void;
  onRemove: () => void;
};

const CartCard = ({
  name,
  price,
  quantity,
  onQuantityChange,
  onRemove,
}: CartCardProps) => {
  const subtotal = (price * quantity).toFixed(2);

  return (
    <Card variant="outlined" sx={CartCardStyle}>
      <CardContent>
        <Stack spacing={1}>
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
            <Typography variant="body1">Suma częściowa</Typography>
            <Typography variant="body2">{subtotal} PLN</Typography>
          </Stack>

          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="flex-end"
            sx={{px: 2}}
          >
            <QuantityTextField value={quantity} onChange={onQuantityChange} />
            <SecondaryButton onClick={onRemove}>Usuń</SecondaryButton>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CartCard;
