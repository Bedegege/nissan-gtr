import {
  ButtonBase,
  Grid,
  Container,
} from "@material-ui/core";
import Link from "next/link";
import NavButton from "./NavButton";
import { Fragment } from "react";

const navButtons = [
  {
    label: "History",
    path: "/history"
  },
  {
    label: "Performance",
    path: "/performance"
  },
  {
    label: "Dealers",
    path: "/dealers"
  }
];

const NavBar = () => {
  const [navActive, setNavActive] = React.useState(true);

  const hideNav = (e) => {
    if (navActive == true)
      setNavActive(false);
    else
      setNavActive(true);
  }

  return (
    <div className="container">
    <Grid container justifyContent="center">
      <Container maxWidth="xl" disableGutters>
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
                  style={{ paddingTop: 20, paddingBottom: 14, width: 250 }}
                  src="/logo-skyline.png"
                  alt=""
                />
              </a>
            </Link>
          </Grid>

          <Grid item justifyContent="space-around" container spacing={0} xs>
            {navActive && navButtons.map((button, i) => (
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

          <Grid>
            <ButtonBase
              style={{
                borderRadius: 4,
                textTransform: "none",
                marginLeft: 20
              }}
              disableRipple
              onClick={hideNav}
            >
              <img
                style={{ width: 35 }}
                src="/menu.png"
                alt=""
              />
            </ButtonBase>
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
          z-index: 300;
        }
      `}</style>
    </div>
  )
}

export default NavBar
