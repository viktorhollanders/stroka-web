import Head from "next/head";
import Link from "next/link";

export default function Nav() {
  return (
    <div>
      <header className="header">
        <Link href="/">
          <h1 className="header__logo-text">STROKA</h1>
        </Link>

        <nav className="header-nav">
          <Link href="/products">
            <a className="header-nav__item">Vörur</a>
          </Link>
          <Link href="/">
            <a className="header-nav__item">Meðferðir</a>
          </Link>
          <Link href="/">
            <a className="header-nav__item">Um Stroku</a>
          </Link>
        </nav>
      </header>

      <style jsx>{`
        header {
          position: fixed;
          width: 100vw;
          background-color: #fff;
          z-index: 1;
          top: 0;
          left: 0;

          padding: 48px 24px 0px 24px;
        }

        .header__logo-text {
          font-size: 24px;
          text-align: center;
          margin: 0;
        }

        .header__logo-text {
          font-family: "Waldorf-skrift";
          color: #5b2e03;
        }

        .header-nav {
          display: flex;
          flex-direction: row;
          justify-content: space-between;

          padding: 16px 0 9px 0;
        }

        .header-nav__item {
          font-size: 14px;
          font-weight: 600;
          color: #5b2e03;
        }
      `}</style>
    </div>
  );
}
