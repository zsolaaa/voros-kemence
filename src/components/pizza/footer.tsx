import Link from "next/link";

export function Footer() {
  return (
    <footer className="vk-footer">
      <div className="vk-footer__inner">
        <div className="vk-footer__top">
          <div>
            <p className="vk-footer__brand">Pinocchio Pizza & Pasta</p>
            <p className="vk-footer__tagline">
              Autentikus olasz pizza és pasta, fából tüzelt kemencéből sütve.
              Minden nap friss alapanyagok, szeretettel és szenvedéllyel készítve
              Baja szívében.
            </p>
          </div>
          <address className="vk-footer__contact">
            <p className="vk-footer__contact-line">1052 Baja, Váci utca 42.</p>
            <p className="vk-footer__contact-line">
              <a href="tel:+3612345678">+36 1 234 5678</a>
            </p>
            <p className="vk-footer__contact-line">
              <a href="mailto:info@pinocchiopizza.hu">info@pinocchiopizza.hu</a>
            </p>
            <p className="vk-footer__contact-line">H–P 11:00–23:00 · Szo–V 12:00–24:00</p>
          </address>
        </div>

        <div className="vk-footer__bottom">
          <nav className="vk-footer__nav" aria-label="Lábléc navigáció">
            <Link href="/" className="vk-footer__nav-link">Főoldal</Link>
            <Link href="/rolunk" className="vk-footer__nav-link">Rólunk</Link>
            <Link href="/galeria" className="vk-footer__nav-link">Galéria</Link>
            <Link href="tel:+3612345678" className="vk-footer__nav-link">Foglalás</Link>
          </nav>
          <p className="vk-footer__copy">© 2024 Pinocchio Pizza & Pasta. Minden jog fenntartva.</p>
        </div>
      </div>
    </footer>
  );
}
