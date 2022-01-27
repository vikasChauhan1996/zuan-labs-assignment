import {
  AppBar,
  Box,
  createStyles,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import Hamburger from "./assets/images/hamburger.png";
import Search from "./assets/images/search.png";
import Avatar from "./assets/images/avatar.png";
import Bookmark from "./assets/images/bookmark.png";
import Suitcase from "./assets/images/suitcase.png";

const Homepage = () => {
  const classes = useStyles();
  return (
    <Box>
      <AppBar className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Box display="flex" alignItems="center">
            <img src={Hamburger} width="20px" />
            <Typography className={classes.logo}>ZUAN</Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            width={"20%"}
          >
            <img src={Search} width="20px" />
            <img src={Avatar} width={"150px"} />
            <img src={Bookmark} width={"12px"} />
            <img src={Suitcase} width={"12px"} />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    appbar: {
      backgroundColor: "#ffffff",
      filter: "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.08))",
      boxShadow: "none",
    },
    logo: {
      color: "#DCC394",
      fontFamily: "Times",
      marginLeft: "10px",
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
  })
);

export default Homepage;
