import { styled } from "@mui/material";
import { MaterialDesignContent } from "notistack";

const Snackbar = styled(MaterialDesignContent)(() => {
  return {
    "&.notistack-MuiContent": {
      boxShadow:
        "-5px 6px 7px 4px rgb(74 67 67 / 20%), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)",
      backdropFilter: "blur(10rem)",
      "-webkit-backdrop-filter": "blur(10rem)",
      "& .MuiIconButton-root": {
        color: "white",
        fontSize: "0.8rem",
        opacity: "35%",
        "&:hover": { opacity: "75%" },
      },
    },
    "&.notistack-MuiContent-success": {
      background:
        "linear-gradient(to left, transparent, #2D7738) rgb(11 37 15 / 77%)",
    },
    "&.notistack-MuiContent-error": {
      background:
        "linear-gradient(to left, transparent, #970C0C) rgb(51 15 15 / 77%)",
    },
    "&.notistack-MuiContent-info": {
      background:
        "linear-gradient(to right, transparent, rgb(var(--background-end-rgb)) ) rgb(22 55 68 / 77%)",
    },
    "&.notistack-MuiContent-default": {
      background:
        "linear-gradient(to left, transparent, grey) rgb(22 55 68 / 77%)",
    },
    "&.notistack-MuiContent-warning": {
      background:
        "linear-gradient(to left, transparent, #d9b830) rgb(219 76 0 / 78%)",
    },
  };
});

export default Snackbar;
