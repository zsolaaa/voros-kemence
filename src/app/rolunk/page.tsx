import type { Metadata } from "next";
import { Nav } from "@/components/pizza/nav";
import { Footer } from "@/components/pizza/footer";

export const metadata: Metadata = {
  title: "Rólunk — Pinocchio Pizza & Pasta",
  description:
    "Ismerd meg a Pinocchio Pizza & Pasta történetét, értékeinket és a szenvedélyes csapatot, akik minden nap a legjobb pizzát készítik Budapesten.",
};

export default function RolunkPage() {
  return (
    <>
      <Nav />

      <header className="vk-page-header">
        <p className="vk-page-header__number" aria-hidden="true">2009</p>
        <p className="vk-page-header__eyebrow">2009 óta</p>
        <h1 className="vk-page-header__title">A mi történetünk</h1>
      </header>

      <section className="vk-section vk-section--white">
        <div className="vk-container">
          <div className="vk-about-story">
            <div className="vk-about-story__aside">
              <p className="vk-about-story__year">2009</p>
              <p className="vk-about-story__year-label">Az alapítás éve</p>
            </div>
            <div className="vk-about-story__body">
              <p className="vk-about-story__lead">
                „Azt akartam, hogy mindenki úgy érezze magát, mint egy nápolyi
                kisvendéglőben — otthonosan, melegen, és jóllakottan."
              </p>
              <p className="vk-about-story__p">
                Kovács Péter 2009-ben nyitotta meg a Vörös Kemencét azzal az
                elhatározással, hogy igazi nápolyi pizzát hoz Budapestre. Nem
                gyorsétteremet álmodott, hanem egy helyet, ahol az emberek
                megpihennek, és ahol a pizza nem csupán étel, hanem élmény.
              </p>
              <p className="vk-about-story__p">
                Az első évben még kicsi volt a hely — hat asztal, egy kemence és
                egy séf. Ma már több mint 60 vendéget tudunk befogadni, de a szellem
                ugyanaz maradt: minden tészta kézzel készül, minden pizza pontosan
                90 másodpercig sül a 450°C-os kemencében.
              </p>
              <p className="vk-about-story__p">
                Alapanyagainkat gondosan válogatjuk: a San Marzano paradicsomot
                olasz partnerünktől rendeljük, a mozzarellát Campaniából szállítjuk,
                a friss zöldségeket pedig budapesti termelői piacokról szerezzük be
                naponta. Mert hisszük, hogy a minőségi alapanyag az egyetlen titok,
                ami igazán számít.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="vk-divider-img" role="img" aria-label="Pizza sütés fából tüzelt kemencében">
        <img
          src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1920&auto=format&fit=crop&q=80"
          alt="Pizzaiolo munkában a kemence előtt"
          loading="lazy"
          width={1920}
          height={600}
        />
        <div className="vk-divider-img__overlay" aria-hidden="true" />
      </div>

      <section className="vk-section">
        <div className="vk-container">
          <p className="vk-eyebrow">Amit képviselünk</p>
          <h2 className="vk-heading">Értékeink</h2>
          <div className="vk-values">
            <div className="vk-value">
              <p className="vk-value__num">01</p>
              <h3 className="vk-value__title">Minőség</h3>
              <p className="vk-value__body">
                Soha nem engedünk a minőségből. Csak a legjobb alapanyagokat
                használjuk, és minden pizzát ugyanolyan gondossággal készítünk el —
                legyen az az első vagy az utolsó aznap.
              </p>
            </div>
            <div className="vk-value">
              <p className="vk-value__num">02</p>
              <h3 className="vk-value__title">Hagyomány</h3>
              <p className="vk-value__body">
                A nápolyi pizzakészítés évszázados hagyományát tiszteljük és
                követjük. Receptjeink autentikusak, technikáink hagyományosak,
                és az élmény kortalan.
              </p>
            </div>
            <div className="vk-value">
              <p className="vk-value__num">03</p>
              <h3 className="vk-value__title">Közösség</h3>
              <p className="vk-value__body">
                Büszkék vagyunk arra, hogy a Pinocchio Pizza & Pasta valódi találkozóhely
                lett. Vendégeink visszajárnak — és minden alkalommal igyekszünk
                felülmúlni magunkat.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="vk-section vk-section--forest">
        <div className="vk-container">
          <p className="vk-eyebrow">Az emberek mögöttünk</p>
          <h2 className="vk-heading">Csapatunk</h2>
          <div className="vk-team-grid">
            {[
              {
                name: "Kovács Péter",
                role: "Alapító & Vezérséf",
                bio: "Nápoly utcáin tanulta a pizzakészítés művészetét. 15 éves tapasztalatával a Pinocchio Pizza & Pasta lelke és motorja — reggeltől estig a kemence mellett áll.",
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&auto=format&fit=crop&q=80",
              },
              {
                name: "Nagy Andrea",
                role: "Étteremvezető",
                bio: "Andrea gondoskodik arról, hogy minden vendég otthon érezze magát. 10 éve irányítja a csapatot, és tudja, hogy a tökéletes étkezés nemcsak az ételről szól.",
                img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&auto=format&fit=crop&q=80",
              },
              {
                name: "Tóth Marco",
                role: "Pizzaiolo",
                bio: "Olasz-magyar felmenőkkel büszkélkedő Marco a tészta mestere. Kezei alatt a legegyszerűbb Margherita is remekművé válik.",
                img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=160&auto=format&fit=crop&q=80",
              },
              {
                name: "Fekete Zsuzsa",
                role: "Vendéglátós",
                bio: "Zsuzsa az, akitől mindig mosolyogva lehet ajánlást kérni. 7 éve dolgozik velünk, és minden visszatérő vendéget névről ismer.",
                img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=160&auto=format&fit=crop&q=80",
              },
            ].map((member) => (
              <div key={member.name} className="vk-member">
                <img
                  src={member.img}
                  alt={member.name}
                  className="vk-member__avatar"
                  loading="lazy"
                  width={72}
                  height={72}
                />
                <div>
                  <h3 className="vk-member__name">{member.name}</h3>
                  <p className="vk-member__role">{member.role}</p>
                  <p className="vk-member__bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
