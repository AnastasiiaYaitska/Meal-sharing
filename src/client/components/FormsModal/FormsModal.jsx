import React from "react";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { Backdrop } from "./FormsModal.styled";

const FormsModal = ({ children, buttonText }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpen} color="warning" variant="contained">
        {buttonText}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Backdrop>{children(handleClose)}</Backdrop>
      </Modal>
    </>
  );
};

export default FormsModal;
