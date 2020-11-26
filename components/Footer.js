import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-info">
          <h3 className="footer-info__title">Hér erum við</h3>
          <a className="footer-info__item" href="">
            Nýbýlavegi 8 (Portið),
          </a>
          <p className="footer-info__item">200 Kópavogur</p>
        </div>
        <div className="footer-info">
          <h3 className="footer-info__title">Hafa samband</h3>
          <a className="footer-info__item" href="mailto:stroka.mail@gmail.com">
            stroka.mail@gmail.com
          </a>
          <a className="footer-info__item" href="tel:6993096">
            699-3096
          </a>
        </div>
        <div className="footer-info">
          <h3 className="footer-info__title">Fylgstu með</h3>
          <img className="footer-info__social-icon" src="" alt="" />
          <img className="footer-info__social-icon" src="" alt="" />
        </div>
        <div className="footer-info">
          <h3 className="footer-info__title">Skilmálar</h3>
          <Link href="#">
            <a className="footer-info__item">Notenda skilmálar</a>
          </Link>
        </div>
        <p className="footer__tax-info">
          Sigríður Þorbergsdóttir | Kt: 030572-5649 |banki: 0130-26-013087 | Vsk
          númer: 131706
        </p>
      </footer>
      <style jsx>{`
        footer {
          
        }  
      `}</style>
    </div>
  );
}
