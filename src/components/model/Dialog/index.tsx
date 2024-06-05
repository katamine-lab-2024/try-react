import * as React from "react";
import Dialog from "@mui/material/Dialog";

import { Button } from "@/components/ui/Button";
import { DialogContents } from "./DialogContent";
import { Form, FormInputs } from "../Form";

type Props = {
  options: { value: string; label: string }[];
  onSubmit: React.Dispatch<React.SetStateAction<FormInputs>>;
};

export const FormDialog: React.FC<Props> = ({ options, onSubmit }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    onSubmit;
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        // PaperProps={{
        //   component: "form",
        //   onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
        //     event.preventDefault();
        //     const formData = new FormData(event.currentTarget);
        //     const formJson = Object.fromEntries(formData.entries());
        //     const email = formJson.email;
        //     console.log(email);
        //     handleClose();
        //   }
        // }}
      >
        <DialogContents title="Subscribe" handleClose={handleClose}>
          <Form options={options} onSubmit={handleSubmit} />
        </DialogContents>
      </Dialog>
    </>
  );
};
