import { client } from "../prismic-configuration";
import { RichText } from "prismic-reactjs";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TermsOfService({ termsResponse }) {
  const chapters = termsResponse.data.terms_of_service_chapters;

  return (
    <div>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-logo__wrapper">
            <h1 className="logo__text">Notenda skilmálar</h1>
          </div>
        </section>

        <section className="legal">
          <h1 className="company__info__heading">
            {RichText.asText(termsResponse.data.company_info_title)}
          </h1>
          {RichText.render(termsResponse.data.company_info)}
          {chapters.map((chapter, index) => (
            <article className="chapter" key={index}>
              <h1 className="legal__chapter__heading">
                {RichText.asText(chapter.chapter_heading)}
              </h1>
              {RichText.render(chapter.chapter_text)}
            </article>
          ))}
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

        /* legal chapters */
        .legal {
          padding: 92px 16px;
        }

        .company__info__heading {
          margin: 52px 0 0 0;
          text-align: center;
        }

        .legal__chapter__heading {
          margin: 52px 0 0 0;
        }

        @media screen and (min-width: 667px) {
          .legal {
            width: 667px;
          }
        }
      `}</style>
    </div>
  );
}

export async function getStaticProps() {
  const termsResponse = await client.getSingle("terms_of_service");
  return {
    props: {
      termsResponse,
    },
  };
}
