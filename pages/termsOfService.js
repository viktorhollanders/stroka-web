import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TermsOfService(termsResponse) {
  return (
    <div>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-logo__wrapper">
            <h1 className="logo__text">Notenda skilmálar</h1>
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

        .logo__text {
          font-family: "Waldorf-skrift";
          text-align: center;
          color: #5b2e03;
          margin: 43px 0 0 0;
        }
      `}</style>
    </div>
  );
}

export async function getStaticProps() {
  const termsResponse = await client.getSingle("home");
  return {
    props: {
      termsResponse,
    },
  };
}