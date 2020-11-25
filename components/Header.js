import Head from "next/head";
import Link from "next/link";

export default function Nav() {
  return (
    <div>
      <header className="header">
        <Link href="/">
          <h1 className="header__logo-text">STROKA</h1>
        </Link>

        <nav className="header__nav">
          <Link href="/products">
            <a>Vörur</a>
          </Link>
          <Link href="/">
            <a>Meðferðir</a>
          </Link>
          <Link href="/">
            <a>Um Stroku</a>
          </Link>
        </nav>
      </header>

      <style jsx>{`
        .header__logo-text {
          font-family: "Waldorf-skrift";
          color: #5b2e03;
        }

        .header__nav {
          color: #5b2e03;
        }
      `}</style>
    </div>
  );
}
