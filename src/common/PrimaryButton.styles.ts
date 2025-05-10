import type {SxProps, Theme} from '@mui/material';

export const PrimaryButtonStyle: SxProps<Theme> = {
  backgroundColor: 'primary.main',
  color: '#FFF',
  borderRadius: '10px',
  textTransform: 'none',
  px: 1.5,
  py: 0.5,
  fontWeight: 400,
  '&:hover': {
    backgroundColor: 'primary.dark',
  },
};
