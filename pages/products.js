import Prismic from "prismic-javascript";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { RichText } from "prismic-reactjs";
import Link from "next/link";

function Products({ products, catagotys }) {
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
        </div>

        <div className="hero-products__wrapper">
          <p>Hægt er að ná í vörur í búðina</p>
          <p>eða fá þær sent heim</p>
        </div>

        <section className="products">
          {products.map((product) => (
            <article className="product" key={product.id}>
              <img
                className="product__image"
                src={product.data.images[0].image.url}
                alt={product.data.title}
              />
              <h1 className="product__price">{product.data.price} .kr</h1>
              <p className="product__title">
                {RichText.asText(product.data.title)}
              </p>
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

        .hero-products__wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-products__wrapper p {
          font-size: 16px;
          margin: 0 0 16px 0;
        }

        .logo__image {
          height: 160px;
          width: 160px;
        }

        .logo__text {
          font-family: "Waldorf-skrift";
          text-align: center;
          color: #5b2e03;
        }

        .hero-openingHouers_wrapper p {
          text-align: center;
        }

        /* producs */

        .products {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        .product {
          display: flex;
          flex-direction: column;
          align-items: center;

          background-color: #fff;
          box-shadow: 0px 4px 40px rgba(91, 46, 3, 0.11);
          border-radius: 15px;
          padding: 16px;
          margin: 13px;
        }

        .product__image {
          height: 101px;
          width: 101px;
          object-fit: contain;
        }

        .product__price {
          font-size: 24px;
          font-weight: 600;
          width: 133px;
          margin: 23px 0 16px 0;
        }

        .product__title {
          font-size: 14px;
          font-weight: 600;
          width: 133px;
          margin: 0;
        }

        @media screen and (min-width: 760px) {
          .products {
            grid-template-columns: 1fr 1fr 1fr;
          }
          .product {
            margin: 20px 40px;
          }
        }

        @media screen and (min-width: 1000px) {
          .products {
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .product {
            margin: 20px 40px;
          }
        }

        @media screen and (min-width: 1200px) {
          .product {
            margin: 40px 80px;
          }
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  const apiEndpoint = "https://stroka.cdn.prismic.io/api/v2";
  const client = Prismic.client(apiEndpoint);

  const productsResponse = await client.query(
    Prismic.Predicates.at("document.type", "product"),
    { pageSize: 300 }
  );

  const catagoryResponse = await client.query(
    Prismic.Predicates.at("document.type", "catagory")
  );

  return {
    props: {
      products: productsResponse.results,
      catagotys: catagoryResponse.results,
    },
  };
}

export default Products;
