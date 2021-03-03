import Prismic from "prismic-javascript";
import React, { useState } from "react";
import { client } from "../prismic-configuration";

import Head from "next/head";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

import { RichText } from "prismic-reactjs";

function Catalog({ products, categories, catalog }) {
  const SORTED_CATEGORIES = categories.sort(function (a, b) {
    return a.data.name < b.data.name ? -1 : 1;
  });

  const [selectedCategory, setSelectedCategory] = useState(undefined);

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
            <h1 className="logo__text">Vörur</h1>
          </div>
        </div>

        <div className="hero-catalog__wrapper">
          {catalog.map((catalog, index) => (
            <p key={index}>{RichText.asText(catalog.data.catalog_about)}</p>
          ))}

          <a href="mailto:stroka.mail@gmail.com">
            <button className="contactUs__button">Sendu fyrirspurn</button>
          </a>
        </div>

        <div className="catalog-sort__wrapper">
          <h1 className="catalog-sort__title">Flokka eftir</h1>
          <div className="catalog-sort__buttons">
            <div
              onClick={() => setSelectedCategory(undefined)}
              className={
                !selectedCategory
                  ? "catalog-sort__button catalog-sort__button--active"
                  : "catalog-sort__button"
              }
            >
              <span>Allar vörur</span>
            </div>
            {SORTED_CATEGORIES.map((category) => {
              const selectedClass =
                selectedCategory == category
                  ? "catalog-sort__button catalog-sort__button--active"
                  : "catalog-sort__button";

              return (
                <div
                  className={selectedClass}
                  onClick={() => setSelectedCategory(category)}
                  key={category.id}
                >
                  <span>{category.data.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="cataloge">
          <div className="catagory">
            {SORTED_CATEGORIES.filter((category) =>
              selectedCategory ? selectedCategory.uid === category.uid : true
            ).map((category) => (
              <div className="productSection__wrapper" key={category.id}>
                <h1>{category.data.name}</h1>
                <div className="products">
                  {products
                    .filter(
                      (product) => category.uid == product.data.category.uid
                    )
                    .map((product) => {
                      return <ProductCard props={product} key={product.id} />;
                    })}
                </div>
              </div>
            ))}
          </div>
          <p className="endOfCataloge">Endi á vörulista</p>
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

        /* hero */

        .hero {
          padding-top: 134px;
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

        /* hero catalog wrapper */

        .hero-catalog__wrapper {
          margin: 90px 16px 0 16px;
          max-width: 280px;
          text-align: center;
        }

        .hero-catalog__wrapper p {
          margin: 0;
        }

        .contactUs__button {
          height: 50px;
          width: 200px;
          background-color: #5b2e03;
          border: solid #5b2e03;
          border-radius: 15px;

          font-size: 16px;
          color: #fff;
          font-weight: 700;

          margin-top: 56px;
        }

        /* catalog sort */
        .catalog-sort__wrapper {
          margin-top: 92px;
        }

        .catalog-sort__title {
          font-size: 24px;
          font-weight: 600;
          text-align: center;
          margin: 0 0 32px 0;
        }

        .catalog-sort__buttons {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          padding: 0 16px;
        }

        .catalog-sort__button {
          background-color: #f4f4f4;
          border-radius: 5px;
          font-weight: 600;
          color: #7b7b7b;

          padding: 6px 8px;
          margin: 0 18px 18px 0;

          cursor: pointer;
        }

        .catalog-sort__button--active {
          background-color: #ffb800;
          color: black;
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

        .endOfCataloge {
          text-align: center;
          color: #999999;
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
    {
      pageSize: 600,
    }
  );

  const categoryResponse = await client.query(
    Prismic.Predicates.at("document.type", "category"),
    {
      pageSize: 10,
    }
  );

  const catalogResponse = await client.query(
    Prismic.Predicates.at("document.type", "catalog")
  );

  return {
    props: {
      products: productsResponse.results,
      categories: categoryResponse.results,
      catalog: catalogResponse.results,
    },
  };
}

export default Catalog;
