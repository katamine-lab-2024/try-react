import { DialogContent, DialogTitle, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
  handleClose: () => void;
};

export const DialogContents: React.FC<Props> = ({
  title,
  children,
  handleClose
}) => {
  return (
    <>
      <DialogTitle>{title}</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500]
        }}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent>{children}</DialogContent>
    </>
  );
};
