// Reusable secondary color button component
import {Button} from '@mui/material';
import {SecondaryButtonStyle} from './SecondaryButton.styles';

type SecondaryButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const SecondaryButton = ({onClick, children}: SecondaryButtonProps) => {
  return (
    <Button variant="contained" onClick={onClick} sx={SecondaryButtonStyle}>
      {children}
    </Button>
  );
};

export default SecondaryButton;
