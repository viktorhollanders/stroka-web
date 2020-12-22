import { client } from "../prismic-configuration";
import { RichText } from "prismic-reactjs";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function privacyPolicy({ policyResponse }) {
  const chapters = policyResponse.data.privacy_policy_chapters;
  console.log(policyResponse.data);

  return (
    <div>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-logo__wrapper">
            <h1 className="logo__text">Lög og varnarþing</h1>
          </div>
        </section>

        <section className="legal">
          {chapters.map((chapter) => (
            <article className="chapter">
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

        .legal__chapter__heading {
          margin: 52px 0 0 0;
          text-align: center;
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
  const policyResponse = await client.getSingle("privacy_policy");
  return {
    props: {
      policyResponse,
    },
  };
}
