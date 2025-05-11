// Product card component displaying product name, price, quantity input, and add-to-cart button
import {useState} from 'react';
import {Card, CardContent, Typography, Stack} from '@mui/material';
import {ProductListCardStyle} from './ProductListCard.styles';
import PrimaryButton from '../../common/PrimaryButton/PrimaryButton';
import QuantityTextField from '../../common/QuantityTextField/QuantityTextField';

type ProductListCardProps = {
  id: number;
  name: string;
  price: number;
  onAddToCart: (quantity: number) => void;
};

const ProductListCard = ({name, price, onAddToCart}: ProductListCardProps) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <Card variant="outlined" sx={ProductListCardStyle}>
      <CardContent sx={{p: '2 !important'}}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack spacing={1} sx={{px: 1}}>
            <Typography variant="body1">{name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {price.toFixed(2)} PLN
            </Typography>
          </Stack>
          <Stack direction="row" spacing={3} alignItems="center" sx={{px: 1}}>
            <QuantityTextField value={quantity} onChange={setQuantity} />
            <PrimaryButton onClick={() => onAddToCart(quantity)}>
              Dodaj do koszyka
            </PrimaryButton>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProductListCard;
