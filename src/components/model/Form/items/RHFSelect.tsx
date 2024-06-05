import {
  FieldPath,
  Control,
  FieldValues,
  useController
} from "react-hook-form";
import {
  FormControl,
  MenuItem,
  Select,
  SelectProps,
  Stack,
  Typography
} from "@mui/material";

// RHFSelectは, 元のpropsであるSelectPropsに加えて, nameとcontrolを受け取る
type SelectControlProps<FORM_TYPE extends FieldValues> = {
  name: FieldPath<FORM_TYPE>;
  control: Control<FORM_TYPE>;
} & SelectProps;

export type SelectOptions = Readonly<{ value: string; label: string }[]>;

export const RHFSelect = <FORM_TYPE extends FieldValues>({
  name,
  control,
  label,
  options
}: SelectControlProps<FORM_TYPE> & {
  options: SelectOptions;
}) => {
  const {
    field: { value, ref, ...rest },
    formState: { errors }
  } = useController({ name, control });

  const errorMessage = errors?.[name]?.message as string;

  return (
    <Stack direction="row" alignItems="center" m={2}>
      <Typography variant="body1" mr={2}>
        {label}:
      </Typography>
      <Stack direction="column">
        <FormControl variant="outlined" sx={{ minWidth: 250 }}>
          <Select
            error={Boolean(errorMessage)}
            value={value ?? ""}
            inputRef={ref}
            {...rest}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {options.map((option, i) => (
              <MenuItem key={`${option.value}-${i}`} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {errorMessage && (
          <Typography variant="caption" color="red">
            {errorMessage}
          </Typography>
        )}
      </Stack>
    </Stack>
  );
};

export default RHFSelect;
