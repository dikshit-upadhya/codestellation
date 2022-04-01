import * as React from 'react';
import Button from '@mui/material/Button';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

export default function Button1(props) {
  return (
    <Button variant="contained" onClick={props.onClick} startIcon={<AddRoundedIcon />}
      sx={{
    
        fontSize: "10px",
        fontWeight: "bold",
      }}>
      {props.children}
    </Button>
  );
}