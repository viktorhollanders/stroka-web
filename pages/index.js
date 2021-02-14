import Prismic from "prismic-javascript";
import { client } from "../prismic-configuration";

import Head from "next/head";
import Header from "../components/Header";
import TreatmentCard from "../components/TreatmentCard"
import Footer from "../components/Footer";

import { RichText } from "prismic-reactjs";
import Link from "next/link";

function Home({ homeResponse, treatments }) {
  console.log(treatments);
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
          <div className="anouncement__wrapper">
            <h1 className="anouncement__titile">Tilkynningar</h1>
            <p className="anouncement__text">
              {RichText.asText(homeResponse.data.anouncment)}
            </p>
          </div>

          <div className="treatment__wrapper">
            <h1 className="anouncement__titile">Meðferðir</h1>
            <div className="treatmentCards">
              {treatments.map((treatment) => {
                return <TreatmentCard props={treatment} />;
              })}
            </div>
          </div>

          <div className="productsBanner__wrapper">
            <h1 className="productsBanner__title">Vörur</h1>
            <p className="productsBanner__text">
              {RichText.asText(homeResponse.data.product_banner_text)}
            </p>

            <Link href="/catalog">
              <button className="productBanner__button">
                Fara í netverslun
              </button>
            </Link>
          </div>
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
          font-size: 44px;
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

        .anouncement__titile,
        .productsBanner__title,
        .anouncement__titile {
          font-size: 24px;
          font-weight: 600;
          text-align: center;

          margin: 0 0 32px 0;
        }

        .anouncement__wrapper,
        .productsBanner__wrapper,
        .treatment__wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;

          max-width: 700px;
          margin: 0 16px 92px 16px;
        }

        .productBanner__button {
          height: 66px;
          width: 263px;
          background-color: #5b2e03;
          border: solid #5b2e03;
          border-radius: 15px;

          font-size: 20px;
          color: #fff;
          font-weight: 700;

          margin-top: 56px;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  const homeResponse = await client.getSingle("home");

  const treatmentsResponse = await client.query(
    Prismic.Predicates.at("document.type", "treatments")
  );

  return {
    props: {
      homeResponse,
      treatments: treatmentsResponse.results,
    },
  };
}

export default Home;
