import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema, formSchema } from "../util/schema";
import { FormInputs } from "..";

export const useFormHook = () => {
  const [inputValue, setInputValue] = useState<FormInputs>({
    requiredInput: "",
    optionalInput: "",
    requiredSelectValue: "",
    optionalSelectValue: ""
  });

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

  // レンタリングの度に4回とか呼ばれてうざいので、errorsの変更時のみ呼ばれるようにした
  useEffect(() => {
    console.log("errors", errors);
  }, [errors]);

  // zodの値変換+型チェックを通過した場合のみonSubmitが呼ばれる
  const onSubmit = (data: FormSchema) => {
    // zodの値変換+型チェックを通過した値
    setInputValue(data);
  };

  return {
    inputValue,
    form: {
      control,
      handleSubmit,
      onSubmit
    }
  };
};
