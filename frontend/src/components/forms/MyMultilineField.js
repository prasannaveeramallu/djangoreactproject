import * as React from 'react';
import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';


export default function MyMultilineField(props) {
    const {label, placeholder, name, control, width} = props
  return (
    <Controller
    name = {name}
    control = {control}
    render = {({
        field: {onChange, value},
        fieldState:{error},
        formState,

    }) => (

        <TextField
        sx={{width:{width}}} 
        id="standard-multiline-static"
        label={label}
        multiline
        onChange={onChange}
        value={value}
        rows={1}
        
        variant="standard"
        placeholder={placeholder}
        error = {!!error} 
      helperText = {error?.message}
      />

        
    )}
      
    />
  );
}

