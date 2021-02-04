import { client } from "../prismic-configuration";
import { RichText } from "prismic-reactjs";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

function About({ aboutResponse }) {
  return (
    <div>
      <Head>
        <title>Stroka</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <section className="hero">
        <div className="hero-logo__wrapper">
          <h1 className="logo__text">Um Stroku</h1>
        </div>
      </section>

      <section className="about-content">
        <p className="about-text">
          {RichText.asText(aboutResponse.data.about_text)}
        </p>

        <img
          className="about-owner-image"
          src={aboutResponse.data.about_owner_image.url}
          alt="owner photo"
        />

        <h1 className="about-owner-title">
          {RichText.asText(aboutResponse.data.about_owner_title)}
        </h1>

        <p className="about-owner-text">
          {RichText.asText(aboutResponse.data.about_owner_text)}
        </p>
      </section>

      <Footer />

      <style jsx>{`
        .about-content {
          display: flex;
          flex-direction: column;
          align-items: center;

          margin-top: 138px;
        }

        .hero {
          padding-top: 300px;
        }

        .hero-logo__wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .logo__text {
          font-size: 44px;
          font-family: "Waldorf-skrift";
          text-align: center;
          color: #5b2e03;
          margin: 100px 0 0 0;
        }

        /* about main content */

        .about-text,
        .about-owner-text {
          padding: 0 16px;
        }

        .about-owner-image {
          height: 151px;
          width: 151px;
          border-radius: 50%;

          margin-top: 100px;
        }

        .about-owner-title {
          text-align: center;
          margin: 32px 0;
        }

        @media screen and (min-width: 600px) {
          .about-text,
          .about-owner-text {
            padding: 0;
            width: 500px;
          }

        @media screen and (min-width: 800px) {
          .about-text,
          .about-owner-text {
            padding: 0;
            width: 740px;
          }
        }
      `}</style>
    </div>
  );
}

export async function getStaticProps() {
  const aboutResponse = await client.getSingle("about");
  return {
    props: {
      aboutResponse,
    },
  };
}

export default About;
