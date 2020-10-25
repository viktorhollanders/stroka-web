import Head from "next/head";
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
            {RichText.asText(product.data.title)}
          </article>
        ))}
      </div>
    </section>
  );
}

// async function data() {
//   const apiEndpoint = "https://stroka.cdn.prismic.io/api/v2";
//   const client = Prismic.client(apiEndpoint);

//   const response = await client.query(
//     Prismic.Predicates("document-type", "product"),
//     { orderings: "[product desc]" }
//   );
//   console.log(data);
//   if (response) {
//     return data;
//   }
// }

export async function getServerSideProps() {
  const apiEndpoint = "https://stroka.cdn.prismic.io/api/v2";
  const client = Prismic.client(apiEndpoint);
  const productsResponse = await client.query(
    Prismic.Predicates.at("document.type", "product")
  );

  return { props: { products: productsResponse.results } };
}
