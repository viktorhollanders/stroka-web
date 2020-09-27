import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Stroka</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/waldorfskrift.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>

      <main>
        <header>
          <img className="logo" src="/images/logo.png" />
          <h1 className="logo-text">STROKA</h1>

          <div className="openingHouers">
            <p>Opið</p>
            <p>
              Mánudag <strong>11–14</strong> og <strong>16–17</strong>
            </p>
            <p>
              Miðvikudag <strong>11–14</strong>
            </p>
          </div>
        </header>

        <p className="text">
          Við erum að setja nýja vefsíðu í loftið. Vef verslunin verður óvirk á
          meðan en hér að neðan er hægt að finna helstu upplýsingar um Stroku.
        </p>

        <footer>
          <div className="footer__contact-wrapper">
            <div className="contact-item">
              <h3 className="contact-title">Staðsetning</h3>
              <p className="contact-text">Nýbýlavegi 8 (Portið),</p>
              <p className="contact-text">200 Kópavogur</p>
            </div>
            <div className="contact-item">
              <h3 className="contact-title">Hafa samband</h3>
              <p className="contact-text">S: 699-3096</p>
              <a src="mailto:stroka.mail@gmail.com">stroka.mail@gmail.com</a>
            </div>
            <div className="contact-item">
              <h3 className="contact-title">Fylgstu með</h3>
              <div className="contact-images">
                <a href="https://www.facebook.com/stroka.is/" target="_blank">
                  <img
                    className="contact-image"
                    src="/images/stroka facebook.png"
                  />
                </a>
                <a href="https://www.instagram.com/stroka.is/" target="_blank">
                  <img
                    className="contact-image"
                    src="/images/stroka instagram.png"
                  />
                </a>
              </div>
            </div>
          </div>
          <p className="footer__tax-info">
            Sigríður Þorbergsdóttir | Kt: 030572-5649 |banki: 0130-26-013087 |
            Vsk númer: 131706
          </p>
        </footer>
        <style jsx>{`
          main {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          /* header */

          header {
            width: 100vw;
            display: flex;
            flex-direction: column;
            align-items: center;

            padding: 112px 0 48px;
          }

          .logo {
            height: 160px;
            width: 160px;
          }

          .logo-text {
            font-family: "Waldorf-skrift";
            text-align: center;
            color: #5b2e03;
          }

          .openingHouers {
            margin-top: px;
          }

          .openingHouers p {
            text-align: center;
          }

          .text {
            max-width: 500px;
            margin: 100px 16px;
          }

          /* footer */

          footer {
            color: #5b2e03;
          }

          .footer__contact-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .contact-item {
            margin-bottom: 30px;
            max-width: 200px;
            text-align: center;
          }

          .contact-title {
            color: #5b2e03;
          }

          .contact-images {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
          }

          .contact-image {
            width: 32px;
            height: 32px;
          }

          .footer__tax-info {
            margin: 18px 16px;
          }

          @media screen and (min-width: 760px) {
            .footer__contact-wrapper {
              flex-direction: row;
              flex-wrap: wrap;
              align-items: flex-start;
              justify-content: space-around;
            }
          }
        `}</style>
      </main>
    </div>
  );
}
