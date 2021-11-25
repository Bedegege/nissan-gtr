import Head from "next/head";
import Layout from "../src/components/Layout";
import {
  Grid, 
  Typography,
  ButtonBase
} from "@material-ui/core";

export default function Dealers() {
  return (
    <>
      <Layout background="/skyline-dealer.png">
        <Head>
          <title>Web Landing</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Grid container spacing={2} style={{position: 'relative', zIndex: 150}}>
          <Grid item xs={4}>
            <Grid container xs={12} direction="row" style={{marginTop: 145}}>
              <Typography style={{color: '#fff', fontFamily: 'Bebas', fontSize: 80, fontWeight: 300, marginLeft: 20}}>
                DEALERS
              </Typography>
              <img
                style={{ width: 60, objectFit: "contain", marginLeft: 40, marginTop: 5 }}
                src="/dealer.png"
                alt=""
              />
            </Grid>
            <img
              style={{ width: "95%", objectFit: "contain", marginLeft: 10, marginTop: 5 }}
              src="/dealer-text.png"
              alt=""
            />
          </Grid>
          <Grid container item xs={8} justifyContent="flex-end">
            <Grid direction="column">
              <Typography style={{color: '#fff', fontFamily: 'Bebas', fontSize: 40, marginRight: 26, marginTop: 680, textAlign: 'right'}}>
                <img
                  style={{ width: 300, height: 5, marginRight: 20, marginBottom: 10 }}
                  src="/strip.png"
                  alt=""
                />
                04
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <div style={{position: 'relative', opacity: 0.3, background: '#3257A7', height: "200%", width: "35%", marginTop: -1000}}>
        </div>
      </Layout>
    </>
  );
}
