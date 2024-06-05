import { Stack, TextField, TextFieldProps } from "@mui/material";
import Typography from "@mui/material/Typography";
import {
  FieldPath,
  Control,
  FieldValues,
  useController
} from "react-hook-form";

// RHFSelectは, 元のpropsであるSelectPropsに加えて, nameとcontrolを受け取る
type InputControlProps<FORM_TYPE extends FieldValues> = {
  name: FieldPath<FORM_TYPE>;
  control: Control<FORM_TYPE>;
} & TextFieldProps;

const RHFTextField = <FORM_TYPE extends FieldValues>({
  name,
  control,
  label
}: InputControlProps<FORM_TYPE>) => {
  const {
    field,
    formState: { errors }
  } = useController({ name, control });

  const errorMessage = errors?.[name]?.message as string;

  return (
    <Stack direction="row" alignItems="center" m={2}>
      <Typography variant="body1" mr={2}>
        {label}:
      </Typography>
      <Stack direction="column">
        <TextField
          sx={{ minWidth: 250 }}
          error={Boolean(errorMessage)}
          value={field.value ?? ""}
          inputRef={field.ref}
          name={field.name}
          onChange={field.onChange}
          onBlur={field.onBlur}
        />
        {errorMessage && (
          <Typography variant="caption" color="red">
            {errorMessage}
          </Typography>
        )}
      </Stack>
    </Stack>
  );
};

export default RHFTextField;
