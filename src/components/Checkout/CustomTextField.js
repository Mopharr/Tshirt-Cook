import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { TextField, Grid } from "@material-ui/core";

function FormInput({ name, label, required }) {
  const { control } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        defaultValue=""
        control={control}
        name={name}
        render={({ field }) => (
          <TextField
            {...field}
            name={name}
            label={label}
            required={required}
            fullWidth
          />
        )}
      />
    </Grid>
  );
}

export default FormInput;
