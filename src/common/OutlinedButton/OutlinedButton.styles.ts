// Style for the OutlinedButton component
import type {SxProps, Theme} from '@mui/material';

export const OutlinedButtonStyle: SxProps<Theme> = {
  backgroundColor: 'background.paper',
  color: 'text.primary',
  borderRadius: '10px',
  border: '0.5px solid',
  textTransform: 'none',
  px: 1,
  py: 0.5,
  fontWeight: 600,
  '&:hover': {
    backgroundColor: '${alpha(text.primary, 0.2)',
  },
};
