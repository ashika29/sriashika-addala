import { UseSnackbarProps } from "@/types/Components";
import { IconButton, Slide } from "@mui/material";
import { useSnackbar as usePkgSnackbar } from "notistack";
import React from "react";

function useSnackbar(props: UseSnackbarProps) {
  const { enqueueSnackbar, closeSnackbar } = usePkgSnackbar();
  const { message, variant = "info", action = "default" } = props;

  const snackbarId = enqueueSnackbar({
    ...props,
    message: formatMessage(message),
    variant,
    anchorOrigin: {
      vertical: "top",
      horizontal: "right",
    },
    action: formatAction(action),
    persist: true,
    TransitionComponent: Slide,
  });

  function close() {
    closeSnackbar(snackbarId);
  }

  function formatMessage(Message: UseSnackbarProps["message"]) {
    if (typeof Message === "string") {
      return <span dangerouslySetInnerHTML={{ __html: Message }} />;
    } else if (typeof Message === "function") {
      return <Message />;
    } else {
      return Message;
    }
  }

  function formatAction(action: UseSnackbarProps["action"]) {
    if (action === "default") {
      return (
        <IconButton color="info" onClick={() => close()}>
          🆇
        </IconButton>
      );
    } else {
      return action;
    }
  }

  return { snackbarId, close };
}

export default useSnackbar;
