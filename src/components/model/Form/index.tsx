import { Box, Stack } from "@mui/material";

import { Button } from "@/components/ui/Button";

import { useFormHook } from "./hooks";
import RHFTextField from "./items/RHFTextField";
import RHFSelect from "./items/RHFSelect";
import { ShowFormValue } from "./items/ShowFormValue";

// フォームの入力値の型
export type FormInputs = {
  requiredInput: string;
  optionalInput?: string;
  requiredSelectValue: string;
  optionalSelectValue?: string;
};

const options = [
  { value: "option1", label: "選択肢1" },
  { value: "option2", label: "選択肢2" },
  { value: "option3", label: "選択肢3" }
];

export const Form = () => {
  const {
    inputValue,
    form: { control, handleSubmit, onSubmit }
  } = useFormHook();

  return (
    <Stack direction="row" alignItems="center" spacing={8}>
      <Box
        component="form"
        // handleSubmitはvalidationが通った時のみ実行される
        onSubmit={handleSubmit(onSubmit)}
        p={3}
        borderRadius={4}
      >
        <RHFTextField name="requiredInput" control={control} label="必須入力" />
        <RHFTextField name="optionalInput" control={control} label="任意入力" />
        <RHFSelect
          name="requiredSelectValue"
          label="必須選択"
          control={control}
          options={options}
        />
        <RHFSelect
          name="optionalSelectValue"
          label="任意選択"
          control={control}
          options={options}
        />
        <Button variant="primary">Submit!</Button>
      </Box>

      <ShowFormValue {...inputValue} />
    </Stack>
  );
};
