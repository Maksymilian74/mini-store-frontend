// Product card component displaying product name, price, quantity input, and add-to-cart button
import {useState} from 'react';
import {Card, CardContent, Typography, Stack} from '@mui/material';
import {ProductListCardStyle} from './ProductListCard.styles';
import PrimaryButton from '../common/PrimaryButton';
import QuantityTextField from '../common/QuantityTextField';

type ProductListCardProps = {
  name: string;
  price: number;
};

const ProductListCard = ({name, price}: ProductListCardProps) => {
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
            <PrimaryButton onClick={() => {}}>Dodaj do koszyka</PrimaryButton>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProductListCard;
