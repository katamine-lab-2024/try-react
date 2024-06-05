import { FormDialog } from "@/components/model/Dialog";
import { FormInputs } from "@/components/model/Form";
import { ShowFormValue } from "@/components/model/Form/items/ShowFormValue";
import { Header } from "@/components/ui/Header";
import { useState } from "react";

export const Top = () => {
  const [inputValue, setInputValue] = useState<FormInputs>({
    requiredInput: "",
    optionalInput: "",
    requiredSelectValue: "",
    optionalSelectValue: ""
  });

  return (
    <>
      <Header />
      <p>Top</p>
      <FormDialog
        onSubmit={setInputValue}
        options={[
          { value: "1", label: "1" },
          { value: "2", label: "2" },
          { value: "3", label: "3" }
        ]}
      />
      <ShowFormValue {...inputValue} />
    </>
  );
};
