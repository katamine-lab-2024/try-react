import { Box } from "@mui/material";

import { Button } from "@/components/ui/Button";

import { useFormHook } from "./hooks";
import RHFTextField from "./items/RHFTextField";
import RHFSelect from "./items/RHFSelect";

// フォームの入力値の型
export type FormInputs = {
  requiredInput: string;
  optionalInput?: string;
  requiredSelectValue: string;
  optionalSelectValue?: string;
};

type Props = {
  options: { value: string; label: string }[];
  onSubmit: () => void;
};

export const Form: React.FC<Props> = ({ options, onSubmit }) => {
  const {
    form: { control, handleSubmit }
  } = useFormHook();

  return (
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
  );
};
