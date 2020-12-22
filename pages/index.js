import { client } from "../prismic-configuration";
import { RichText } from "prismic-reactjs";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home({ homeResponse }) {
  return (
    <div>
      <Head>
        <title>Stroka</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-logo__wrapper">
            <img className="logo__image" src="/images/stroka-logo.svg" />
            <h1 className="logo__text">STROKA</h1>

            <div className="hero-openingHouers_wrapper">
              <p>
                Mánudag <strong>11–14</strong> og <strong>16–17</strong>
              </p>
              <p>
                Miðvikudag <strong>11–14</strong>
              </p>
            </div>
          </div>
        </section>

        <section className="home-content">
          <h1 className="anouncement__header">Tilkynningar</h1>
          <div className="anouncement__wrapper">
            <p className="anouncement__text">
              {RichText.asText(homeResponse.data.anouncment)}
            </p>
          </div>

          <h1 className="productsBanner__header">Vörur</h1>

          <Link href="/products">
            <div className="productBanner">
              <img
                className="productBanner__image"
                src={homeResponse.data.product_banner_image.url}
              />
              <h1 className="productBanner__text">Sjá vöruúrval</h1>
            </div>
          </Link>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        main {
          display: flex;
          flex-direction: column;
          align-items: center;

          margin-top: 138px;
        }

        .hero {
          padding-top: 100px;
        }

        .hero-logo__wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .logo__image {
          height: 160px;
          width: 160px;
        }

        .logo__text {
          font-family: "Waldorf-skrift";
          text-align: center;
          color: #5b2e03;
          margin: 43px 0 0 0;
        }

        .hero-openingHouers_wrapper {
          margin-top: 134px;
        }

        .hero-openingHouers_wrapper p {
          text-align: center;
          margin: 0 0 16px 0;
        }

        /* home main content */

        .home-content {
          margin: 92px 0;
        }

        .anouncement__header,
        .productsBanner__header {
          font-size: 24px;
          font-weight: 600;
          text-align: center;

          margin: 0 0 32px 0;
        }

        .anouncement__wrapper {
          margin-bottom: 92px;
        }

        .productBanner {
          position: relative;

          display: flex;
          justify-content: center;
          align-items: center;
        }

        .productBanner__image {
          height: 146px;
          width: 343px;
          border-radius: 15px;
        }

        .productBanner__text {
          position: absolute;
          font-size: 24px;
          font-weight: 700;
          color: #fff;
        }
      `}</style>
    </div>
  );
}

export async function getStaticProps() {
  const homeResponse = await client.getSingle("home");
  return {
    props: {
      homeResponse,
    },
  };
}

export default Home;
