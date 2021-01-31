import { RichText } from "prismic-reactjs";
import Link from "next/link";

function ProductCard({ props }) {
  return (
    <div className="">
      <Link href={`/products/${props.uid}`} key={props.id}>
        <div className="productCard">
          <img
            className="productCard__image"
            src={props.data.images[0].image.url}
            alt={props.data.title}
          />
          <h1 className="productCard__price">{props.data.price} kr</h1>
          <p className="productCard__title">
            {RichText.asText(props.data.title)}
          </p>
        </div>
      </Link>

      <style jsx>{`
        .productCard {
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: #fff;
          box-shadow: 0px 4px 40px rgba(91, 46, 3, 0.11);
          border-radius: 15px;
          padding: 16px;
        }
        .productCard__image {
          height: 101px;
          width: 101px;
          object-fit: contain;
        }
        .productCard__price {
          font-size: 24px;
          font-weight: 600;
          width: 133px;
          margin: 23px 0 16px 0;
        }
        .productCard__title {
          font-size: 14px;
          font-weight: 600;
          width: 133px;
          margin: 0;
        }
      `}</style>
    </div>
  );
}

export default ProductCard;