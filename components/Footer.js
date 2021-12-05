import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-info__wrapper capped">
          <div className="footer-info">
            <h3 className="footer-info__title">Hér erum við</h3>
            <a className="footer-info__item" href="">
              Hvannhólma 24,
            </a>
            <p className="footer-info__item">200 Kópavogur</p>
          </div>
          <div className="footer-info">
            <h3 className="footer-info__title">Hafa samband</h3>
            <a
              className="footer-info__item"
              href="mailto:stroka.mail@gmail.com"
            >
              stroka.mail@gmail.com
            </a>
            <a className="footer-info__item" href="tel:6993095">
              699-3095
            </a>
          </div>
          <div className="footer-info">
            <h3 className="footer-info__title">Fylgstu með</h3>
            <div className="social-media">
              <a
                className="social-media__link"
                href="https://www.facebook.com/stroka.is"
                target="_blank"
              >
                <img
                  className="social-media__icon"
                  src="/images/facebook-logo.svg"
                  alt="facebook icon"
                />
              </a>
              <a
                className="social-media__link"
                href="https://www.instagram.com/stroka.is/"
                target="_blank"
              >
                <img
                  className="social-media__icon"
                  src="/images/instagram-logo.svg"
                  alt="instagram icon"
                />
              </a>
            </div>
          </div>
          <div className="footer-info">
            <h3 className="footer-info__title">Skilmálar</h3>
            <Link href="../termsOfService">
              <a className="footer-info__item">Notenda skilmálar</a>
            </Link>
            <Link href="../privacyPolicy">
              <a className="footer-info__item">Lög og varnarþing</a>
            </Link>
          </div>
        </div>
        <p className="footer__tax-info">
          Sigríður Þorbergsdóttir | Kt: 030572-5649 | banki: 0130-26-013087 |
          Vsk númer: 131706
        </p>
      </footer>
      <style jsx>{`
        footer {
          display: flex;
          flex-direction: column;
          align-items: center;

          background-color: #FEEBCF;
          padding: 60px 0;
          margin-top: 100px;
        }

        .footer-info__wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .footer-info {
          margin-bottom: 55px;
          display: flex;
          flex-direction: column;
        }

        .footer-info__title {
          font-size: 24px;
          text-align: center;
          color: #5b2e03;
          margin: 0;
        }

        .footer-info__item {
          font-size: 16px;
          line-height: 1.7;
          text-align: center;
          color: #5b2e03;
          margin-top: 16px;
        }

        .social-media {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin-top: 16px;
        }

        .social-media__icon {
          height: 44px;
          width: 44px;
        }

        .footer__tax-info {
          font-size: 12px;
          width: 255px;
          color: #5b2e03;
        }

        @media screen and (min-width: 980px) {
          .capped {
            width: 980px;
          }
          
          .footer-info__wrapper {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: flex-start;
          }

          .footer__tax-info {
            text-align: center;
            width: 100vw;
          }

          @media screen and (min-width: 1000px) {
          .capped {
            width: 1000px;
          }
          
        }
      `}</style>
    </div>
  );
}
