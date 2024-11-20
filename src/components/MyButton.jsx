
import Button from '@mui/material/Button';

const MyButton = ({ onClick, label }) => {
  return (
    <Button variant="contained" color="secondary" onClick={onClick}>
      {label}
    </Button>
  );
};

export default MyButton;
