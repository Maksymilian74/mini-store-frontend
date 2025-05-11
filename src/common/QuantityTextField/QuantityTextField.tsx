// Numeric input field component for selecting quantity
import {TextField} from '@mui/material';
import {QuantityTextFieldStyle} from './QuantityTextField.styles.ts';
import {useState, useEffect} from 'react';

type QuantityTextFieldProps = {
  value: number;
  onChange: (value: number) => void;
};

const QuantityTextField = ({value, onChange}: QuantityTextFieldProps) => {
  const [inputValue, setInputValue] = useState(value.toString());

  useEffect(() => {
    setInputValue(value.toString());
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    if (val === '') {
      setInputValue('');
      return;
    }

    if (!/^\d+$/.test(val)) return;

    const parsed = Number(val);
    if (!isNaN(parsed) && parsed >= 0) {
      setInputValue(val);
      onChange(parsed);
    }
  };

  return (
    <TextField
      type="number"
      size="small"
      value={inputValue}
      onChange={handleChange}
      inputProps={{min: 0}}
      sx={QuantityTextFieldStyle}
    />
  );
};

export default QuantityTextField;
