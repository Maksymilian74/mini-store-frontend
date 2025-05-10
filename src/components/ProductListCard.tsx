import {Card, CardContent, Typography, Stack} from '@mui/material';
import {ProductListCardStyle} from './ProductListCard.styles.ts';

type ProductListCardProps = {
  name: string;
  price: number;
};

const ProductListCard = ({name, price}: ProductListCardProps) => (
  <Card variant="outlined" sx={ProductListCardStyle}>
    <CardContent sx={{p: '2 !important'}}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack spacing={1} sx={{px: 1}}>
          <Typography variant="body1">{name}</Typography>
          <Typography variant="body2" color="text.secondary">
            {price.toFixed(2)} PLN
          </Typography>
        </Stack>
      </Stack>
    </CardContent>
  </Card>
);

export default ProductListCard;
