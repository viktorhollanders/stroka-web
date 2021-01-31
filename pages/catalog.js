import Prismic from "prismic-javascript";
import { client } from "../prismic-configuration";

import Head from "next/head";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

import { RichText } from "prismic-reactjs";
import Link from "next/link";

function Catalog({ products, categories }) {
  const SORTED_CATEGORIES = categories.sort(function (a, b) {
    const nameA = a.data.name;
    const nameB = b.data.name;

    return nameA < nameB ? -1 : 1;
  });

  return (
    <div>
      <Head>
        <title>Stroka</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main>
        <div className="hero">
          <div className="hero-logo__wrapper">
            <img className="logo__image" src="/images/products-logo.svg" />
            <h1 className="logo__text">Products</h1>
          </div>

          <div className="hero-products__wrapper">
            <p>Hægt er að ná í vörur í búðina</p>
            <p>eða fá þær sent heim</p>
          </div>
        </div>
        <div className="sort">
          <h1>Flokka eftir</h1>
          <div>
            {SORTED_CATEGORIES.map((category) => (
              <p key={category.id}>{category.data.name}</p>
            ))}
          </div>
        </div>
        <div className="cataloge">
          {SORTED_CATEGORIES.map((category) => (
            <section className="catagory">
              <h1 key={category.id}>{category.data.name}</h1>
              <div className="products">
                {products.map((product) => {
                  if (category.uid == product.data.category.slug) {
                    return <ProductCard props={product} />;
                  }
                })}
              </div>
            </section>
          ))}
        </div>
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
          padding-top: 134px;
        }
        .hero-logo__wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .hero-products__wrapper {
          font-size: 16px;
          margin: 0 0 16px 0;
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
        .hero-products__wrapper {
          margin-top: 134px;
        }
        .hero-products__wrapper p {
          text-align: center;
          margin: 0 0 16px 0;
        }
        /* cataloge */
        .catagory {
          margin: 92px 0;
        }

        .products {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 13px;
        }

        @media screen and (min-width: 500px) {
          .products {
            grid-gap: 40px;
          }
        }
        @media screen and (min-width: 600px) {
          .products {
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 40px;
          }
        }
        @media screen and (min-width: 1000px) {
          .products {
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-gap: 60px;
          }
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  const productsResponse = await client.query(
    Prismic.Predicates.at("document.type", "product"),
    { pageSize: 600 }
  );

  const categoryResponse = await client.query(
    Prismic.Predicates.at("document.type", "category"),
    { pageSize: 10 }
  );

  return {
    props: {
      products: productsResponse.results,
      categories: categoryResponse.results,
    },
  };
}

export default Catalog;
