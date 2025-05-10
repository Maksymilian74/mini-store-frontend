// Reusable outlined button component
import {Button} from '@mui/material';
import {OutlinedButtonStyle} from './OutlinedButton.styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

type OutlinedButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const OutlinedButton = ({onClick, children}: OutlinedButtonProps) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      startIcon={<ArrowBackIcon />}
      sx={OutlinedButtonStyle}
    >
      {children}
    </Button>
  );
};

export default OutlinedButton;
