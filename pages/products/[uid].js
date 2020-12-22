import { client } from "../../prismic-configuration";
import { RichText } from "prismic-reactjs";
import Link from "next/link";

export default function Product({ data }) {
  console.log(data);
  return (
    <div>
      <section className="product">
        <section className="container__navAndImgWrapper">
          <nav className="nav">
            <Link href="../products">
              <a className="nav__item">
                <img
                  className="nav__item__icon"
                  src="/images/arrow-left.svg"
                  alt="back to products"
                />
                Til baka
              </a>
            </Link>
          </nav>
          <div className="productImage__wrapper">
            <img
              className="productImage"
              key={data.images[0].image.url}
              alt={data.images[0].image.alt}
              src={data.images[0].image.url}
            />
          </div>
        </section>

        <section className="productInfo__wrapper">
          <h1 className="productInfo__title">{RichText.asText(data.title)}</h1>
          <div className="stockAndPrice__wrapper">
            <p className="stockStatus">Til á lager</p>
            <h1 className="price">{data.price} .kr</h1>
          </div>
          <p className="description__title">Lýsing</p>
          <p>{RichText.asText(data.description)}</p>
        </section>
      </section>

      <style jsx>{`
        .container__navAndImgWrapper {
          display: flex;
          flex-direction: column;
        }
        .nav {
          padding: 92px 28px 0 28px;
        }

        .nav__item {
          font-size: 18px;
          font-weight: 600;
          text-align: left;

          display: flex;
          flex-direction: row;
          align-items: center;
        }

        .nav__item__icon {
          margin-right: 10px;
        }

        .product {
          display: grid;
        }

        .productImage__wrapper {
          padding: 56px 0;

          display: flex;
          justify-content: center;
        }

        .productImage {
          width: 271px;
          height: 271px;
          object-fit: contain;
        }

        .productInfo__wrapper {
          padding: 56px 28px;
          background-color: #fff6ee;
        }

        .productInfo__title {
          font-size: 24px;
          font-weight: 600;
          text-align: left;
        }

        .stockAndPrice__wrapper {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: baseline;
        }

        .stockStatus {
          color: #a1a1a1;
        }

        .description__title {
          font-weight: 600;
          text-align: left;
        }

        @media screen and (min-width: 900px) {
          .product {
            height: 100vh;
            position: relative;
            display: grid;
            grid-template-columns: 1fr 1fr;
          }

          .nav {
            padding: 48px 0 0 100px;
          }

          .container__navAndImgWrapper {
            position: fixed;
            height: 100%;
            width: 50%;
          }

          .productInfo__wrapper {
            position: relative;
            left: 50vw;
            height: 100%;
          }

          .productImage__wrapper {
            height: 100%;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  console.log(params.uid);
  const { data } = await client.getByUID("product", params.uid);
  return {
    props: { data },
  };
}
