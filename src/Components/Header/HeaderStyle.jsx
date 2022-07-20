import { makeStyles } from "@material-ui/core";
import { blue, blueGrey } from "@mui/material/colors";

export const useStyles = makeStyles((theme) => {
  // console.log(theme.breakpoints);
  return {
    //header
    wrapper: {
      width: "100%",
      minHeight: "100vh",
      height: "auto",
      background: "#efefef",
      boxSizing: "border-box",
      padding: "70px 24px 24px 270px",
      [theme.breakpoints.down("sm")]: {
        padding: "70px 24px 24px 24px",
      },
    },

    // logo: {
    //   lineHeight: "47px",
    //   color: "inherit",
    // },

    // navbar styles

    // toolbar: {
    //   display: "flex",
    //   flexFlow: "row wrap",
    //   justifyContent: "space-between",
    // },

    // brandBox: {
    //   display: "flex",
    //   flexFlow: "row wrap",
    // },

    //sidenav
    drawerPaper: {
      width: "250px",
      marginTop: "64px",
      [theme.breakpoints.down("xs")]: {
        marginTop: "0px",
        display: "none",
      },
    },

    // navlink: {
    //   color: blueGrey[700],
    //   transition: "0.8s",
    //   "&:hover  div": {
    //     color: blue["A400"],
    //   },
    // },

    // navButton: { width: "100%", textTransform: "capitalize" },

    selectedNav: {
      color: `${blue[800]} !important`,
      fontWeight: " bolder",
      " & div": {
        color: `${blue[800]} !important`,
      },
    },
  };
});
