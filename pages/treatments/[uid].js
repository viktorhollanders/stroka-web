import { client } from "../../prismic-configuration";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { RichText } from "prismic-reactjs";

export default function Treatment({ data }) {
  return (
    <div>
      <Header />
      <main>
        <h1 className="treatment__title">{RichText.asText(data.title)}</h1>

        <article className="treatmentBody">
          {data.body.map((slice, index) => {
            if (slice.slice_type === "text") {
              return (
                <p className="treatmentBody__text" key={index}>
                  {RichText.asText(slice.primary.text_content)}
                </p>
              );
            } else if (slice.slice_type === "image") {
              return (
                <img
                  key={index}
                  className="treatmentBody__image"
                  src={slice.primary.image_content.url}
                />
              );
            } else if (slice.slice_type === "quot") {
              return (
                <p className="treatmentBody__quot" key={index}>
                  "{RichText.asText(slice.primary.quot_content)}"
                </p>
              );
            } else {
              return null;
            }
          })}
        </article>
      </main>

      <Footer />

      <style jsx>{`
        main {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 138px;
        }

        .treatment__title {
          font-size: 44px;
          font-family: "Waldorf-skrift";
          color: #5b2e03;
          margin-top: 100px;
        }

        /* treatment body */

        .treatmentBody {
          padding: 0 16px;
          margin-top: 60px;
        }

        .treatmentBody__text {
          font-size: 18px;
          line-height: 1.6;
        }

        .treatmentBody__image {
          height: auto;
          width: 100%;
          margin: 32px 0;
        }

        .treatmentBody__quot {
          font-size: 28px;
          font-weight: 600;
          font-family: "Waldorf-skrift";
          text-align: center;
          color: #5b2e03;
        }

        @media screen and (min-width: 650px) {
          .treatmentBody {
            max-width: 600px;
          }
        }

        @media screen and (min-width: 800px) {
          .treatmentBody {
            max-width: 700px;
          }
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { data } = await client.getByUID("treatments", params.uid);
  return {
    props: { data },
  };
}
