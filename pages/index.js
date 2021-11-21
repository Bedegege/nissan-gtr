import Head from "next/head";
import Layout from "../src/components/Layout";
import {
  Grid,
} from "@material-ui/core";

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>Web Landing</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Grid container spacing={2} style={{marginTop: 50, marginBottom: 70}}>
          <Grid item xs={6}>
            <p style={{color: '#fff', fontFamily: 'Gotham', fontSize: 20}}>
              Nissan has marketed vehicles under a few names, including the Datsun brand name. In 1999 Nissan entered a two way alliance with Renault S.A. of France, which now owns 43.4% of Nissan while Nissan holds 15% of Renault shares. Today Nissan also produces a range of luxury models branded as Infiniti.
            </p>
          </Grid>
          <Grid item xs={6}>
            <div className="logo-head">
              <img src="/next.svg" alt="Next Logo" className="logo" />
              <img src="/cross.svg" alt="Cross" className="cross" />
              <img src="/art.svg" alt="Mejik Art Logo" className="logo" />
            </div>
          </Grid>
        </Grid>

        <style jsx>{`
          a {
            color: inherit;
            text-decoration: none;
          }

          .title a {
            color: #0070f3;
            text-decoration: none;
          }

          .title-head {
            font-size: 2rem;
          }

          .title a:hover,
          .title a:focus,
          .title a:active {
            text-decoration: underline;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }

          .title,
          .description {
            text-align: left;
          }

          .description {
            line-height: 1.5;
            font-size: 1.5rem;
            max-width: 584px;
            padding: 10px;
            color: "#FFF";
            font-family: "Gotham";
          }

          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }

          .logo-head {
            display: flex;
            flex-direction: column;
            padding: 20px;
            align-items: center;
          }

          .logo {
            height: 120px;
          }

          .cross {
            width: 20px;
            height: 20px;
            margin-top: 30px;
            margin-bottom: 30px;
          }
        `}</style>
      </Layout>
    </>
  );
}
