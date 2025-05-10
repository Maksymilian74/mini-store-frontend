import {Button} from '@mui/material';
import {PrimaryButtonStyle} from './PrimaryButton.styles';

type PrimaryButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const PrimaryButton = ({onClick, children}: PrimaryButtonProps) => {
  return (
    <Button variant="contained" onClick={onClick} sx={PrimaryButtonStyle}>
      {children}
    </Button>
  );
};

export default PrimaryButton;
