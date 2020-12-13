import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductBanner from "../components/ProductBanner";

function Home() {
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

        <ProductBanner />
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
      `}</style>
    </div>
  );
}

export default Home;
