import Head from "next/head";
import Image from "next/image";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";

export default function Products({ products }) {
  console.log("products", products);
  return (
    <section>
      <h1>Products</h1>
      <div>
        {products.map((product) => (
          <article key={product.id}>
            <Image
              src={product.data.images[0].image.url}
              width={100}
              height={100}
            />
            {RichText.asText(product.data.title)}
            <p>Verð {product.data.price}kr</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export async function getServerSideProps() {
  const apiEndpoint = "https://stroka.cdn.prismic.io/api/v2";
  const client = Prismic.client(apiEndpoint);
  const productsResponse = await client.query(
    Prismic.Predicates.at("document.type", "product")
  );

  return { props: { products: productsResponse.results } };
}
