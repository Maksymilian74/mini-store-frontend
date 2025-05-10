// Style for QuantityTextField
import type {SxProps, Theme} from '@mui/material';

export const QuantityTextFieldStyle: SxProps<Theme> = {
  width: 50,
  '& input': {
    textAlign: 'center',
    padding: '4px 8px',
    fontSize: '0.85rem',
    fontWeight: '400',
  },
  '& .MuiOutlinedInput-root': {
    borderRadius: '6px',
  },
};
