export default function Footer() {
  return (
    <div>
      <footer>
        <div className="footer__contact-wrapper">
          <div className="contact-item">
            <h3 className="contact-title">Við erum hér</h3>
            <p className="contact-text">Nýbýlavegi 8 (Portið),</p>
            <p className="contact-text">200 Kópavogur</p>
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
          <div className="contact-item">
            <h3 className="contact-title">Hafa samband</h3>
            <p className="contact-text">S: 699-3096</p>
            <a src="mailto:stroka.mail@gmail.com">stroka.mail@gmail.com</a>
          </div>
        </div>
        <p className="footer__tax-info">
          Sigríður Þorbergsdóttir | Kt: 030572-5649 |banki: 0130-26-013087 | Vsk
          númer: 131706
        </p>
      </footer>
      <style jsx>{`
        
      `}</style>
    </div>
  );
}
