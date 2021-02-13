import Prismic from "prismic-javascript";
import React, { useState, useEffect } from "react";
import { client } from "../prismic-configuration";

import Head from "next/head";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

function Catalog({ products, categories }) {
  const SORTED_CATEGORIES = categories.sort(function (a, b) {
    const nameA = a.data.name;
    const nameB = b.data.name;

    return nameA < nameB ? -1 : 1;
  });

  const [selectedCategory, setSelectedCategory] = useState(undefined);

  console.log(products[0]);
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

          <div className="hero-catalog__wrapper">
            <p>Hægt er að ná í vörur í búðina</p>
            <p>eða fá þær sent heim</p>
          </div>
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
                  key={category.id}
                  onClick={() => setSelectedCategory(category)}
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
              <div className="productSection__wrapper">
                <h1 key={category.uid}>{category.data.name}</h1>
                <div className="products">
                  {products
                    .filter(
                      (product) => category.uid == product.data.category.slug
                    )
                    .map((product) => {
                      return <ProductCard props={product} />;
                    })}
                </div>
              </div>
            ))}
          </div>
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
        .hero-catalog__wrapper {
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
          font-size: 44px;
          font-family: "Waldorf-skrift";
          text-align: center;
          color: #5b2e03;
          margin: 43px 0 0 0;
        }
        .hero-catalog__wrapper {
          margin-top: 134px;
        }
        .hero-catalog__wrapper p {
          text-align: center;
          margin: 0 0 16px 0;
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
