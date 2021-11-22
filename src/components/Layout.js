import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

const sectionMargin = margin => margin * 15;
const useStyles = makeStyles(theme => ({
  mainWrap: {
    position: "relative",
    width: "100%",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center"
  }
}));

const Layout = props => {
  const classes = useStyles();

  return (
    <div className="background">
      <NavBar />
      <main className={classes.mainWrap} style={{ minHeight: "100vh" }}>
        <Container maxWidth="xl" disableGutters>{props.children}</Container>
      </main>
      <style jsx>{`
        .background {
          background-image: url('/skyline-homepage.png');
          background-position: center;
          background-size: cover;
        }
      `}</style>
    </div>
  );
};

export default Layout;
