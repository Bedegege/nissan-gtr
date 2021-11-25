import Head from "next/head";
import Layout from "../src/components/Layout";
import {
  Grid, 
  Typography,
  ButtonBase
} from "@material-ui/core";

export default function History() {
  return (
    <>
      <Layout background="/skyline-history.png">
        <Head>
          <title>Web Landing</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Grid container spacing={2} style={{position: 'relative', zIndex: 150}}>
          <Grid item xs={4}>
            <Typography style={{color: '#fff', fontFamily: 'Bebas', fontSize: 80, fontWeight: 300, marginLeft: 20, marginTop: 145}}>
              HISTORY
            </Typography>
            <Typography style={{color: '#fff', fontFamily: 'Gotham', fontSize: 20, fontWeight: 300, marginLeft: 20, marginTop: 15}}>
              Nissan’s beginnings go all the way back to 1911 when Masujiro Hashimoto founded Kwaishinsha Motor Car Works. The company produced its first car three years later and called it the DAT. The name ‘Nissan’ originated during the 1930s as an abbreviation used on the Tokyo stock market for Nippon Sangyo. In 1930, Aikawa merged Tobata Casting’s automobile parts department with DAT Motors. As Tobata Casting was a Nissan company, this was the beginning of Nissan’s automobile manufacturing.
            </Typography>
          </Grid>
          <Grid container item xs={8} justifyContent="flex-end">
            <Grid direction="column">
              <Typography style={{color: '#fff', fontFamily: 'Bebas', fontSize: 40, marginRight: 26, marginTop: 680, textAlign: 'right'}}>
                <img
                  style={{ width: 300, height: 5, marginRight: 20, marginBottom: 10 }}
                  src="/strip.png"
                  alt=""
                />
                02
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
