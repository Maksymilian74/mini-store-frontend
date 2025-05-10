// Style for the SecondaryButton component
import type {SxProps, Theme} from '@mui/material';

export const SecondaryButtonStyle: SxProps<Theme> = {
  backgroundColor: 'secondary.main',
  color: '#FFF',
  borderRadius: '10px',
  textTransform: 'none',
  px: 1,
  py: 0.5,
  fontWeight: 600,
  '&:hover': {
    backgroundColor: 'secondary.dark',
  },
};
