import Head from "next/head";
import Layout from "../src/components/Layout";
import {
  Grid, 
  Typography,
  ButtonBase
} from "@material-ui/core";
import { useRouter } from 'next/router';
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

export default function Performance() {
  const router = useRouter();

  const handleWheelUp = (e) => {
    e.preventDefault();
    router.push('/history');
  }

  const handleWheelDown = (e) => {
    e.preventDefault();
    router.push('/dealers');
  }

  return (
    <ReactScrollWheelHandler  upHandler={handleWheelUp} downHandler={handleWheelDown}>
      <Layout background="/skyline-performance.png">
        <Head>
          <title>Web Landing</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Grid container spacing={2} style={{position: 'relative', zIndex: 150}}>
          <Grid item xs={4}>
            <Typography style={{color: '#fff', fontFamily: 'Bebas', fontSize: 80, fontWeight: 300, marginLeft: 20, marginTop: 145}}>
              PERFORMANCE
            </Typography>
            <Grid container xs={12} direction="row" style={{marginBottom: 60}}>
              <img
                style={{ width: 75, objectFit: "contain", marginLeft: 20 }}
                src="/top-speed.png"
                alt=""
              />
              <Grid container xs={6} direction="column" style={{ marginLeft: 10 }}>
                <Typography style={{color: '#fff', fontFamily: 'Bebas', fontSize: 30, fontWeight: 300, marginLeft: 20, marginTop: 3}}>
                  251 KPH
                </Typography>
                <Typography style={{color: '#fff', fontFamily: 'Bebas', fontSize: 30, fontWeight: 300, marginLeft: 20, marginTop: -10}}>
                  0-60 KPH 2.4 S
                </Typography>
              </Grid>
            </Grid>
            <Grid container xs={12} direction="row" style={{marginBottom: 60}}>
              <img
                style={{ width: 75, objectFit: "contain", marginLeft: 20 }}
                src="/weight.png"
                alt=""
              />
              <Grid container xs={6} direction="column" style={{ marginLeft: 10 }}>
                <Typography style={{color: '#fff', fontFamily: 'Bebas', fontSize: 30, fontWeight: 300, marginLeft: 20, marginTop: 15}}>
                  1560-1607 KG
                </Typography>
              </Grid>
            </Grid>
            <Grid container xs={12} direction="row" style={{marginBottom: 60}}>
              <img
                style={{ width: 75, objectFit: "contain", marginLeft: 20 }}
                src="/acceleration.png"
                alt=""
              />
              <Grid container xs={6} direction="column" style={{ marginLeft: 10 }}>
                <Typography style={{color: '#fff', fontFamily: 'Bebas', fontSize: 30, fontWeight: 300, marginLeft: 20, marginTop: 15}}>
                  225 KPH 23.1 S
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid container item xs={8} justifyContent="flex-end">
            <Grid direction="column">
              <Typography style={{color: '#fff', fontFamily: 'Bebas', fontSize: 40, marginRight: 26, marginTop: 680, textAlign: 'right'}}>
                <img
                  style={{ width: 300, height: 5, marginRight: 20, marginBottom: 10 }}
                  src="/strip.png"
                  alt=""
                />
                03
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
