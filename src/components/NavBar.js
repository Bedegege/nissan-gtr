import {
  Button,
  Grid,
  Container,
} from "@material-ui/core";
import Link from "next/link";
import NavButton from "./NavButton";
import { Fragment } from "react";

const navButtons = [
  {
    label: "History",
    path: "/"
  },
  {
    label: "Performance"
  },
  {
    label: "Dealers"
  },
  {
    label: "News"
  },
  {
    label: "Gallery"
  }
];

const NavBar = () => {
  return (
    <div className="container">
    <Grid container justifyContent="center">
      <Container maxWidth="lg">
        <Grid
          container
          style={{ paddingLeft: 32, paddingRight: 32 }}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item style={{ flexDirection: "column" }} xs={4}>
            <Link href="/">
              <a>
                <img
                  style={{ paddingTop: 20, paddingBottom: 14, width: 200 }}
                  src="/logo-skyline.png"
                  alt=""
                />
              </a>
            </Link>
          </Grid>

          <Grid item justifyContent="flex-end" container spacing={3} xs>
            {navButtons.map((button, i) => (
              <Fragment key={i}>
                  <Grid item key={i}>
                    <NavButton
                      key={button.path}
                      path={button.path || ""}
                      label={button.label}
                    />
                  </Grid>
              </Fragment>
            ))}
          </Grid>

          <Grid style={{ marginLeft: 60 }}>
            <NavButton path="#" label="Login" />
          </Grid>

          <Grid>
            <Button
              variant="contained"
              color="secondary"
              style={{
                background: "#8854D0",
                borderRadius: 4,
                textTransform: "none",
                marginLeft: 20
              }}
              disableRipple
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Grid>

    <style jsx>{`
        .container {
          width: 100%;
          height: 88px;
          background-color: transparent;
          position: fixed;
          display: flex;
          z-index: 99;
        }
      `}</style>
    </div>
  )
}

export default NavBar
