import Link from "next/link";

export default function ProductBanner() {
  return (
    <section className="productBanner">
      <img className="productBanner__background" src="/images/kanina.jpeg" />
      <Link href="/products">
        <button className="productBanner__button">Sjá vöruúrval</button>
      </Link>

      <style jsx>{`
        .productBanner {
          margin: 30px 0;
        }

        .productBanner {
          display: flex;
          justify-content: center;
          align-items: center
        }

        .productBanner img {
          positin: relative;
          height: 500px;
          width: 90%;
          border-radius: 15px
        }

        .productBanner__button {
          position: absolute;
          width: 233px;
          height: 65px;

          background: rgba(255, 255, 255, 0.58);
          border: 2px solid #5b2e03;
          box-sizing: border-box;
          border-radius: 15px;

          font-size: 16px;
          font-weight: 600;
          color: #5b2e03;
        }
      `}</style>
    </section>
  );
}
