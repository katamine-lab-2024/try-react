import { Stack } from "@mui/material";
import { FormInputs } from "..";

type ShowFormValueProps = FormInputs;

export const ShowFormValue: React.FC<ShowFormValueProps> = ({
  requiredInput,
  optionalInput,
  requiredSelectValue,
  optionalSelectValue
}) => {
  return (
    <Stack direction="column">
      <p>必須入力: {requiredInput}</p>
      <p>任意入力: {optionalInput}</p>
      <p>必須選択: {requiredSelectValue}</p>
      <p>任意選択: {optionalSelectValue}</p>
    </Stack>
  );
};
