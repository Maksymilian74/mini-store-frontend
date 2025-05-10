// Numeric input field component for selecting quantity
import {TextField} from '@mui/material';
import {QuantityTextFieldStyle} from './QuantityTextField.styles';

type QuantityTextFieldProps = {
  value: number;
  onChange: (value: number) => void;
};

const QuantityTextField = ({value, onChange}: QuantityTextFieldProps) => {
  return (
    <TextField
      type="number"
      size="small"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      inputProps={{min: 0}}
      sx={QuantityTextFieldStyle}
    />
  );
};

export default QuantityTextField;
