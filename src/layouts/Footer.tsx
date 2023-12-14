import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import config from "@/configs/footer.config.json";

export default function Footer() {
  const classes = useStyles();

  return (
    <Grid container className={classes.centerAligned}>
      <Grid item xs={12}>
        <Typography variant="h3" color="honeydew">
          {config.mainline}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" color="GrayText">
          {config.captionText}
        </Typography>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles({
  centerAligned: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: "6rem",
  },
});
