import Head from "next/head";
import Layout from "../src/components/Layout";
import {
  Grid, 
  Typography,
  ButtonBase
} from "@material-ui/core";
import { useRouter } from 'next/router'
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

export default function Home() {
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    router.push('/history');
  }

  const handleWheelDown = (e) => {
    e.preventDefault();
    router.push('/history');
  }

  return (
    <ReactScrollWheelHandler downHandler={handleWheelDown}>
      <Layout background="/skyline-homepage.png">
        <Head>
          <title>Web Landing</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Grid container spacing={2} style={{position: 'relative', zIndex: 150}}>
          <Grid item xs={4}>
            <Typography style={{color: '#fff', fontFamily: 'Gotham', fontSize: 20, fontWeight: 300, marginLeft: 20, marginTop: 280}}>
              Nissan has marketed vehicles under a few names, including the Datsun brand name. In 1999 Nissan entered a two way alliance with Renault S.A. of France, which now owns 43.4% of Nissan while Nissan holds 15% of Renault shares. Today Nissan also produces a range of luxury models branded as Infiniti.
            </Typography>
          </Grid>
          <Grid container item xs={8} justifyContent="flex-end">
            <Grid direction="column">
              <Typography style={{color: '#fff', fontFamily: 'Vartek', fontSize: 100, fontWeight: 500, marginRight: 70, marginTop: 110, textAlign: 'right'}}>
                SKY<span style={{color: '#ED2024'}}>LINE</span>
              </Typography>
              <ButtonBase disableRipple onClick={handleLogin} style={{ width: 150, height: 150, marginTop: 270, marginLeft: 300 }}>
                <img
                  style={{ width: 150, height: 150 }}
                  src="/explore.png"
                  alt=""
                />
              </ButtonBase>

              <Typography style={{color: '#fff', fontFamily: 'Bebas', fontSize: 40, marginRight: 30, textAlign: 'right'}}>
                <img
                  style={{ width: 300, height: 5, marginRight: 20, marginBottom: 10 }}
                  src="/strip.png"
                  alt=""
                />
                01
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <div style={{position: 'relative', opacity: 0.3, background: '#3257A7', height: "200%", width: "35%", marginTop: -1000}}>
        </div>
      </Layout>
    </ReactScrollWheelHandler>
  );
}
