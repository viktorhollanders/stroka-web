import { RichText } from "prismic-reactjs";
import Link from "next/link";

function TreatmentCard({ props }) {
  return (
    <div>
      <Link href="#">
        <div className="treatmentCard">
          <img
            className="treatmentCard__image"
            src={props.data.treatment_cover_image.url}
          />
          <h1 className="treatmentCard__text">
            {RichText.asText(props.data.title)}
          </h1>
        </div>
      </Link>
      <style jsx>{`
        .treatmentCard {
          position: relative;

          display: flex;
          justify-content: center;
          align-items: center;

          margin-bottom: 52px;
        }

        .treatmentCard__image {
          height: 146px;
          width: 343px;
          border-radius: 15px;
        }

        .treatmentCard__text {
          position: absolute;
          font-size: 24px;
          font-weight: 700;
          color: #fff;
        }
      `}</style>
    </div>
  );
}

export default TreatmentCard;
