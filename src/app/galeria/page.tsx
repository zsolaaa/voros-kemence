import type { Metadata } from "next";
import { Nav } from "@/components/pizza/nav";
import { Footer } from "@/components/pizza/footer";

export const metadata: Metadata = {
  title: "Galéria — Pinocchio Pizza & Pasta",
  description:
    "Képek a Pinocchio Pizza & Pasta pizzáiról, belső teréről és a kemence mögötti szenvedélyes munkáról.",
};

const photos = [
  { src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=700&auto=format&fit=crop&q=80", caption: "Margherita", w: 700, h: 700 },
  { src: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&auto=format&fit=crop&q=80", caption: "Tűz és tészta", w: 600, h: 800 },
  { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=80", caption: "Belső tér", w: 600, h: 400 },
  { src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80", caption: "Pizza felülről", w: 600, h: 600 },
  { src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&auto=format&fit=crop&q=80", caption: "Pizzaiolo munkában", w: 600, h: 900 },
  { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop&q=80", caption: "Esti hangulat", w: 600, h: 400 },
  { src: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=600&auto=format&fit=crop&q=80", caption: "Diavola", w: 600, h: 700 },
  { src: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=600&auto=format&fit=crop&q=80", caption: "Friss alapanyagok", w: 600, h: 500 },
  { src: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&auto=format&fit=crop&q=80", caption: "Tészta gyúrás", w: 600, h: 800 },
  { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop&q=80", caption: "Quattro Stagioni", w: 600, h: 600 },
  { src: "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?w=600&auto=format&fit=crop&q=80", caption: "Terítés", w: 600, h: 450 },
  { src: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=600&auto=format&fit=crop&q=80", caption: "Fából tüzelt kemence", w: 600, h: 700 },
];

export default function GaleriaPage() {
  return (
    <>
      <Nav />

      <header className="vk-page-header">
        <p className="vk-page-header__number" aria-hidden="true">Galéria</p>
        <p className="vk-page-header__eyebrow">Képeink</p>
        <h1 className="vk-page-header__title">Galéria</h1>
      </header>

      <section className="vk-section vk-section--white">
        <div className="vk-container">
          <p className="vk-eyebrow">Pillanatok</p>
          <h2 className="vk-heading">A kemence világa</h2>
          <div className="vk-gallery" role="list" aria-label="Fotógaléria">
            {photos.map((photo, i) => (
              <figure
                key={i}
                className="vk-gallery-item"
                role="listitem"
                tabIndex={0}
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  loading="lazy"
                  width={photo.w}
                  height={photo.h}
                />
                <div className="vk-gallery-item__overlay" aria-hidden="true">
                  <figcaption>{photo.caption}</figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
