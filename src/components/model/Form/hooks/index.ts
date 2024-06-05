import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema, formSchema } from "./schema";
import { useEffect } from "react";

export const useFormHook = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
    // useFormのジェネリクスにはdefaultValuesの型を渡す
  } = useForm<FormSchema>({
    // modeをonBlurにすることで、初回validation時を検索ボタンが押されたタイミングに設定できる
    mode: "onSubmit",
    // reValidateModeをonBlurにすることで、検索ボタンが押された後は常に入力値が変更されたタイミングでvalidationが走る
    reValidateMode: "onBlur",
    // デフォルト状態のフォーム要素
    defaultValues: {
      requiredInput: "",
      optionalInput: "",
      requiredSelectValue: "",
      optionalSelectValue: ""
    },
    // zodResolverの引数にvalidation時に実行するschemaを渡す
    resolver: zodResolver(formSchema)
  });

  useEffect(() => {
    console.log("errors", errors);
  }, [errors]);

  // zodの値変換+型チェックを通過した場合のみonSubmitが呼ばれる
  const onSubmit = (data: FormSchema) => {
    // zodの値変換+型チェックを通過した値
    console.log("data", data);
  };

  return {
    form: {
      control,
      handleSubmit,
      onSubmit
    }
  };
};
