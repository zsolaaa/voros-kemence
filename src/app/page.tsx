import Link from "next/link";
import { Nav } from "@/components/pizza/nav";
import { Footer } from "@/components/pizza/footer";

const pizzas = [
  {
    name: "Pinocchio",
    desc: "Paradicsomszósz, mozzarella, rukkola, pármai sonka, parmezán forgács",
    price: "3 590 Ft",
    tag: "Házi kedvenc",
    img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Tartufo e N'duja",
    desc: "Tejszínes szarvasgomba krém, mozzarella, gomba, olasz csípős kolbászkrém (N'duja)",
    price: "3 890 Ft",
    tag: "Prémium",
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Margherita",
    desc: "Paradicsomszósz, mozzarella",
    price: "2 690 Ft",
    tag: "Klasszikus",
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop&q=80",
  },
];

export default function HomePage() {
  return (
    <>
      <Nav />

      {/* ── HERO (split screen) ──────────────────────────────── */}
      <section className="vk-hero" aria-label="Főoldal hős szekció">
        <div className="vk-hero__left">
<p className="vk-hero__eyebrow vk-au vk-au-1">
            Baja szívében · Olasz lélekkel
          </p>
          <h1 className="vk-hero__title vk-au vk-au-2">
            Pinocchio<br /><em>Pizza & Pasta</em>
          </h1>
          <p className="vk-hero__tagline vk-au vk-au-3">
            Egy szelet elég — de soha nem leszel meg eggyel.
          </p>
          <div className="vk-hero__actions vk-au vk-au-4">
            <a href="tel:+36307556846" className="vk-btn vk-btn--primary">Rendelj most</a>
          </div>
        </div>

        <div className="vk-hero__right" role="img" aria-label="Frissen sült pizza a kemencéből">
          <img
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&auto=format&fit=crop&q=80"
            alt=""
            className="vk-hero__img"
            aria-hidden="true"
          />
          <div className="vk-hero__img-gradient" aria-hidden="true" />
        </div>
      </section>

      {/* ── MENU ─────────────────────────────────────────────── */}
      <section id="menu" className="vk-section vk-section--white">
        <div className="vk-container">
          <p className="vk-eyebrow">Étlapunkból</p>
          <h2 className="vk-heading">Kedvenceink</h2>
          <div className="vk-menu-rows" style={{ marginBottom: "var(--vk-s-10)" }}>
            {pizzas.map((pizza, i) => (
              <article key={pizza.name} className="vk-menu-row">
                <span className="vk-menu-row__num" aria-hidden="true">0{i + 1}</span>
                <div className="vk-menu-row__info">
                  <h3 className="vk-menu-row__name">{pizza.name}</h3>
                  <p className="vk-menu-row__desc">{pizza.desc}</p>
                  <span className="vk-menu-row__tag">{pizza.tag}</span>
                </div>
                <p className="vk-menu-row__price">{pizza.price}</p>
                <div className="vk-menu-row__thumb" aria-hidden="true">
                  <img
                    src={pizza.img}
                    alt=""
                    loading="lazy"
                    width={320}
                    height={220}
                  />
                </div>
              </article>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <Link href="/etlap" className="vk-btn vk-btn--outline-dark">
              Teljes étlap megtekintése
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────── */}
      <div className="vk-stats" role="complementary" aria-label="A Pinocchio Pizza & Pasta számokban">
        <div className="vk-stats__grid">
          {[
            { num: "2026",  label: "Alapítás éve" },
            { num: "450°C", label: "Kemence hőmérséklete" },
            { num: "90s",   label: "Sütési idő" },
            { num: "100%",  label: "Kézzel nyújtott tészta" },
          ].map(({ num, label }) => (
            <div key={num} className="vk-stat">
              <p className="vk-stat__num">{num}</p>
              <p className="vk-stat__label">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── STORY ────────────────────────────────────────────── */}
      <section className="vk-section vk-section--cream">
        <div className="vk-container">
          <div className="vk-story-quote">
            <blockquote className="vk-story-quote__text">
              Minden pizza egy kis olasz történet.
            </blockquote>
            <p className="vk-story-quote__attr">Kovács Péter, alapító</p>
          </div>

          <div className="vk-story-cols">
            <div className="vk-story-cols__aside">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&auto=format&fit=crop&q=80"
                alt="A Pinocchio Pizza & Pasta belső tere — meleg, hangulatos étterem"
                className="vk-story-cols__img"
                loading="lazy"
                width={700}
                height={875}
              />
            </div>
            <div className="vk-story-cols__text">
              <p className="vk-eyebrow">A mi históriánk</p>
              <h2 className="vk-story-cols__heading">Egy kemence,<br />ezer történet</h2>
              <p className="vk-story-cols__p">
                A Pinocchio Pizza & Pasta 2026 óta süti pizzáit ugyanolyan szenvedéllyel,
                mint az alapítás első napján. Nápolyi tészta, helyi alapanyagok,
                és egy fából tüzelt kemence — ez a mi titkunk.
              </p>
              <p className="vk-story-cols__p">
                Étteremünk Baja szívében várja vendégeit, ahol a meleg fények
                és az autentikus ízek egy délolasz kisvendéglő hangulatát idézik.
                Minden egyes pizzát kézzel nyújtunk, és pontosan 90 másodpercig
                sütjük a 450°C-os kemencében.
              </p>
              <Link
                href="/rolunk"
                className="vk-btn vk-btn--outline-dark"
                style={{ alignSelf: "flex-start" }}
              >
                Ismerj meg minket
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── INFO STRIP ───────────────────────────────────────── */}
      <div className="vk-infostrip" role="complementary" aria-label="Nyitvatartás és elérhetőség">
        <div className="vk-infostrip__inner">
          <div className="vk-infostrip__item">
            <span className="vk-infostrip__label">Nyitva&nbsp;</span>
            <span className="vk-infostrip__value">H–P 11:00–23:00</span>
          </div>
          <div className="vk-infostrip__sep" aria-hidden="true" />
          <div className="vk-infostrip__item">
            <span className="vk-infostrip__label">Cím&nbsp;</span>
            <span className="vk-infostrip__value">6500 Baja, Tóth Kálmán tér 5.</span>
          </div>
          <div className="vk-infostrip__sep" aria-hidden="true" />
          <div className="vk-infostrip__item">
            <span className="vk-infostrip__label">Tel&nbsp;</span>
            <span className="vk-infostrip__value">+36 30 755 6846</span>
          </div>
        </div>
      </div>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section id="foglales" className="vk-cta">
        <div className="vk-cta__inner">
          <p className="vk-cta__label">Foglalás</p>
          <h2 className="vk-cta__title">Foglaljon asztalt</h2>
          <p className="vk-cta__sub">
            Különleges alkalom, születésnap vagy csak egy jó vacsora?
            Keressen minket bátran — örömmel helyet foglalunk az Ön számára.
          </p>
          <a href="tel:+36307556846" className="vk-cta__phone">+36 30 755 6846</a>
          <div className="vk-cta__actions">
            <a href="tel:+36307556846" className="vk-btn vk-btn--primary">Telefonos foglalás</a>
            <a href="mailto:info@pinocchiopizza.hu" className="vk-btn vk-btn--outline">E-mail küldése</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
