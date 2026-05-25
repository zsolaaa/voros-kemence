import type { Metadata } from "next";
import { Nav } from "@/components/pizza/nav";
import { Footer } from "@/components/pizza/footer";

export const metadata: Metadata = {
  title: "Étlap — Pinocchio Pizza & Pasta",
  description:
    "Pinocchio Pizza & Pasta teljes étlapja: 20 féle pizza, 11 féle pasta, saláták, desszertek, italok és kávék. Baján, 2026 óta.",
};

const pizzak = [
  { nev: "Margherita", leiras: "Paradicsomszósz, mozzarella", ar: "2 690", tag: "Klasszikus" },
  { nev: "Salame", leiras: "Paradicsomszósz, mozzarella, olasz (dolce) szalámi", ar: "3 090" },
  { nev: "Salame Piccante", leiras: "Paradicsomszósz, mozzarella, olasz csípős szalámi", ar: "3 090", tag: "Csípős" },
  { nev: "Funghi", leiras: "Paradicsomszósz, mozzarella, gomba", ar: "2 790", tag: "Vegán" },
  { nev: "Pinocchio", leiras: "Paradicsomszósz, mozzarella, rukkola, pármai sonka, parmezán forgács", ar: "3 590", tag: "Házi kedvenc" },
  { nev: "Amore", leiras: "Paradicsomszósz, mozzarella, rukkola, pármai sonka, koktélparadicsom", ar: "3 590" },
  { nev: "Ungherese", leiras: "Paradicsomszósz, mozzarella, lilahagyma, olasz csípős szalámi, bacon, csípős pepperoni", ar: "3 590", tag: "Csípős" },
  { nev: "Salame Piccante e Gorgonzola", leiras: "Paradicsomszósz, mozzarella, olasz csípős szalámi, gorgonzola sajt", ar: "3 290", tag: "Csípős" },
  { nev: "Tonno e Cipolla", leiras: "Paradicsomszósz, mozzarella, lilahagyma, tonhal, olivaolaj", ar: "3 290" },
  { nev: "4 Formaggi", leiras: "Paradicsomszósz, mozzarella, parmezán sajt, pecorino sajt, gorgonzola sajt", ar: "3 290" },
  { nev: "Cotto", leiras: "Paradicsomszósz, mozzarella, olasz főtt sonka", ar: "3 190" },
  { nev: "Cotto e Funghi", leiras: "Paradicsomszósz, mozzarella, olasz főtt sonka, gomba", ar: "3 290" },
  { nev: "Prosciutto di Parma", leiras: "Paradicsomszósz, mozzarella, pármai sonka", ar: "3 290" },
  { nev: "Valmar", leiras: "Paradicsomszósz, 4 sajtos alap, olasz csípős szalámi", ar: "3 590", tag: "Csípős" },
  { nev: "Bruno", leiras: "Paradicsomszósz, 4 sajtos alap, olasz főtt sonka", ar: "3 590" },
  { nev: "Doppio", leiras: "Paradicsomszósz, mozzarella, olasz csípős szalámi, olasz főtt sonka, fokhagymás olivaolaj", ar: "3 590", tag: "Csípős" },
  { nev: "Diavola Verde", leiras: "Paradicsomszósz, mozzarella, olasz csípős szalámi, rukkola, koktélparadicsom", ar: "3 590", tag: "Csípős" },
  { nev: "Vega", leiras: "Paradicsomszósz, mozzarella, gomba, lilahagyma, rukkola, olivabogyó, koktélparadicsom", ar: "3 490", tag: "Vegetáriánus" },
  { nev: "Capricciosa", leiras: "Paradicsomszósz, mozzarella, articsóka, olasz főtt sonka, fekete olivabogyó", ar: "3 590" },
  { nev: "Tartufo e N'duja", leiras: "Tejszínes szarvasgomba krém, mozzarella, gomba, olasz csípős kolbászkrém (N'duja)", ar: "3 890", tag: "Prémium" },
];

const pastak = [
  { nev: "Arabiata", leiras: "Paradicsomszósz, fokhagymás olivaolaj, chili, koktélparadicsom, parmezán — spagetti", ar: "2 990", tag: "Csípős" },
  { nev: "Pomodoro", leiras: "Paradicsomszósz, fokhagymás olivaolaj, koktélparadicsom, parmezán — spagetti", ar: "2 890" },
  { nev: "Carbonara", leiras: "Tojássárgája, parmezán, guanciale (olasz tokaszalonna), fekete bors — spagetti (kérésre tejszínes változatban is)", ar: "3 390" },
  { nev: "Bolognai", leiras: "Paradicsomszósz, tradicionális bolognai ragú, parmezán — tagliatelle", ar: "3 390" },
  { nev: "Pasta al Tartufo", leiras: "Szarvasgomba, tejszín, fokhagymás olivaolaj, shiitake gomba, parmezán — tagliatelle", ar: "3 690", tag: "Prémium" },
  { nev: "Pasta con Zucchine", leiras: "Grillezett cukkini, fokhagymás olivaolaj, parmezán — tagliatelle", ar: "3 190", tag: "Vegetáriánus" },
  { nev: "Gnocchi al Formaggi", leiras: "Tejszínes gnocchi, parmezán, gorgonzola", ar: "3 190" },
  { nev: "Gnocchi e Funghi", leiras: "Tejszínes gnocchi, gomba, fokhagymás olivaolaj, fekete bors", ar: "3 190" },
  { nev: "Pi'gnocchio", leiras: "Paradicsomszósz, fehérbor, fokhagymás olivaolaj, parmezán, rukkola", ar: "2 990" },
  { nev: "Pasta al Pesto", leiras: "Pesto, fokhagymás olivaolaj, koktélparadicsom, parmezán — spagetti", ar: "3 190", tag: "Vegetáriánus" },
  { nev: "Aglio e Vegetable", leiras: "Fokhagymás olivaolaj, grillezett cukkini, koktélparadicsom, fekete olivabogyó, rukkola — spagetti", ar: "3 990", tag: "Vegetáriánus" },
];

const salatak = [
  { nev: "Vegetariana", leiras: "Jégsaláta, rukkola, fekete olivabogyó, mozzarella, parmezán sajt, olivaolaj, balzsamkrém, koktélparadicsom, Focaccia", ar: "2 890", tag: "Vegetáriánus" },
  { nev: "Tonno e Olive", leiras: "Vegetáriánus saláta alap, tonhal, fokhagymás olivaolaj, Focaccia", ar: "2 990" },
  { nev: "Parma e Pomodori", leiras: "Vegetáriánus saláta alap, pármai sonka, Focaccia", ar: "2 990" },
];

const italok = [
  { nev: "Birra Moretti csapolt sör", leiras: "pohár / korsó", ar: "800 / 1 200" },
  { nev: "Peroni sör", leiras: "0,33 l", ar: "700" },
  { nev: "Heineken", leiras: "0,33 l", ar: "800" },
  { nev: "Heineken 0.0%", leiras: "0,33 l", ar: "700" },
  { nev: "Gösser Citrom 2%", leiras: "dobozos", ar: "700" },
  { nev: "Gösser Citrom 0.0%", leiras: "dobozos", ar: "700" },
  { nev: "Jäger", leiras: "2 cl / 4 cl", ar: "660 / 1 100" },
  { nev: "Unicum", leiras: "2 cl / 4 cl", ar: "660 / 1 100" },
  { nev: "Pálinka", leiras: "2 cl / 4 cl", ar: "750 / 1 500" },
];

const uditok = [
  { nev: "Üdítők", leiras: "0,33 l — Coca Cola, Coca Cola Zéró, Fanta, Sprite", ar: "700" },
  { nev: "Cappy Juice", leiras: "0,25 l — Alma, Eper, Körte, Őszibarack, Narancs", ar: "700" },
  { nev: "Fuzetea", leiras: "0,25 l — Citrom, Őszibarack", ar: "700" },
  { nev: "Lemonsoda", leiras: "0,33 l — Lemon, Mojito, Oran, Zeró", ar: "700" },
  { nev: "Naturaqua", leiras: "0,33 l üveges — szénsavas / szénsavmentes", ar: "400" },
];

const kavek = [
  { nev: "Espresso kávé", ar: "600" },
  { nev: "Hosszú kávé", ar: "600" },
  { nev: "Cappuccino", ar: "700" },
  { nev: "Latte", ar: "900" },
  { nev: "Melange", ar: "1 000" },
];

const tagColors: Record<string, string> = {
  "Klasszikus":     "var(--vk-forest-pale)",
  "Csípős":         "oklch(0.85 0.12 25)",
  "Prémium":        "var(--vk-gold-pale)",
  "Házi kedvenc":   "var(--vk-forest-pale)",
  "Vegetáriánus":   "oklch(0.88 0.10 148)",
  "Vegán":          "oklch(0.88 0.10 148)",
};

function Tag({ label }: { label: string }) {
  return (
    <span style={{
      display: "inline-block",
      fontSize: "0.65rem",
      fontWeight: 700,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      padding: "0.2em 0.65em",
      borderRadius: "3px",
      background: tagColors[label] ?? "var(--vk-smoke)",
      color: "var(--vk-ink)",
      flexShrink: 0,
    }}>
      {label}
    </span>
  );
}

function MenuRow({ num, nev, leiras, ar, tag }: {
  num: number; nev: string; leiras: string; ar: string; tag?: string;
}) {
  return (
    <div className="vk-etlap-sor">
      <span className="vk-etlap-sor__szam">{String(num).padStart(2, "0")}</span>
      <div className="vk-etlap-sor__info">
        <div className="vk-etlap-sor__nev-sor">
          <h3 className="vk-etlap-sor__nev">{nev}</h3>
          {tag && <Tag label={tag} />}
        </div>
        <p className="vk-etlap-sor__leiras">{leiras}</p>
      </div>
      <p className="vk-etlap-sor__ar">{ar} Ft</p>
    </div>
  );
}

function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div style={{ marginBottom: "var(--vk-s-8)" }}>
      <p className="vk-eyebrow">{eyebrow}</p>
      <h2 className="vk-heading">{title}</h2>
    </div>
  );
}

export default function EtlapPage() {
  return (
    <>
      <Nav />

      <header className="vk-page-header">
        <p className="vk-page-header__number" aria-hidden="true">Étlap</p>
        <p className="vk-page-header__eyebrow">Bajai autentikus olasz konyha</p>
        <h1 className="vk-page-header__title">Étlapunk</h1>
      </header>

      {/* ── PIZZA ── */}
      <section className="vk-section vk-section--white">
        <div className="vk-container">
          <SectionHead eyebrow="Kemencéből" title="Pizzák" />
          <div className="vk-etlap-lista">
            {pizzak.map((p, i) => (
              <MenuRow key={p.nev} num={i + 1} {...p} />
            ))}
          </div>
          <div className="vk-etlap-lablec">
            <span>Csomagolás: 200 Ft</span>
            <span>Pizzaszósz: 300 Ft</span>
            <span>Csípős pizzaszósz: 300 Ft</span>
          </div>
        </div>
      </section>

      {/* ── PASTA ── */}
      <section className="vk-section vk-section--cream">
        <div className="vk-container">
          <SectionHead eyebrow="Frissen készítve" title="Pasták" />
          <div className="vk-etlap-lista">
            {pastak.map((p, i) => (
              <MenuRow key={p.nev} num={i + 1} {...p} />
            ))}
          </div>
          <p className="vk-etlap-megjegyzes">
            Igény szerint cserélhető tészta: Tagliatelle · Spagetti · Gnocchi · Penne
          </p>
        </div>
      </section>

      {/* ── SALÁTÁK ── */}
      <section className="vk-section vk-section--white">
        <div className="vk-container">
          <SectionHead eyebrow="Friss" title="Saláták" />
          <div className="vk-etlap-lista">
            {salatak.map((s, i) => (
              <MenuRow key={s.nev} num={i + 1} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── DESSZERT ── */}
      <section className="vk-section vk-section--cream">
        <div className="vk-container">
          <SectionHead eyebrow="Az étkezés végére" title="Desszertek" />
          <div className="vk-etlap-desszert">
            <p className="vk-etlap-desszert__cim">Napi desszert</p>
            <p className="vk-etlap-desszert__leiras">
              Profiterol · Tiramisu · Pana cotta · Epres süti
            </p>
            <p className="vk-etlap-desszert__info">
              Napi desszert kínálatunkról érdeklődjél a pultnál!
            </p>
          </div>
        </div>
      </section>

      {/* ── ITALOK + ÜDÍTŐK + KÁVÉK ── */}
      <section className="vk-section vk-section--white">
        <div className="vk-container">
          <div className="vk-etlap-italok-grid">

            <div>
              <SectionHead eyebrow="Szomjra" title="Italok" />
              <div className="vk-etlap-lista">
                {italok.map((it, i) => (
                  <MenuRow key={it.nev} num={i + 1} nev={it.nev} leiras={it.leiras} ar={it.ar} />
                ))}
              </div>
            </div>

            <div>
              <SectionHead eyebrow="Alkoholmentes" title="Üdítők" />
              <div className="vk-etlap-lista" style={{ marginBottom: "var(--vk-s-12)" }}>
                {uditok.map((u, i) => (
                  <MenuRow key={u.nev} num={i + 1} nev={u.nev} leiras={u.leiras} ar={u.ar} />
                ))}
              </div>

              <SectionHead eyebrow="Forró" title="Kávék" />
              <div className="vk-etlap-lista">
                {kavek.map((k, i) => (
                  <MenuRow key={k.nev} num={i + 1} nev={k.nev} leiras="" ar={k.ar} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── EXTRA FELTÉTEK ── */}
      <section className="vk-section vk-section--cream">
        <div className="vk-container">
          <SectionHead eyebrow="Pizzához, pastához" title="Extra feltétek" />
          <div className="vk-etlap-extra-grid">
            <div className="vk-etlap-extra-blokk">
              <p className="vk-etlap-extra-blokk__cim">Sajtok</p>
              {[
                { nev: "Mozzarella sajt (Fior di Latte)", ar: "350" },
                { nev: "Parmezán sajt forgács", ar: "450" },
                { nev: "Gorgonzola sajt", ar: "350" },
              ].map(f => (
                <div key={f.nev} className="vk-etlap-extra-sor">
                  <span>{f.nev}</span>
                  <span>{f.ar} Ft</span>
                </div>
              ))}
            </div>
            <div className="vk-etlap-extra-blokk">
              <p className="vk-etlap-extra-blokk__cim">Húsok & hal</p>
              {[
                { nev: "Salame — olasz dolce szalámi", ar: "400" },
                { nev: "Salame Piccante — olasz csípős szalámi", ar: "400" },
                { nev: "Cotto — olasz főtt sonka", ar: "400" },
                { nev: "Prosciutto di Parma — pármai sonka", ar: "600" },
                { nev: "Pancetta — bacon", ar: "400" },
                { nev: "Tonno — tonhal", ar: "450" },
              ].map(f => (
                <div key={f.nev} className="vk-etlap-extra-sor">
                  <span>{f.nev}</span>
                  <span>{f.ar} Ft</span>
                </div>
              ))}
            </div>
            <div className="vk-etlap-extra-blokk">
              <p className="vk-etlap-extra-blokk__cim">Zöldségek</p>
              {[
                { nev: "Lilahagyma", ar: "250" },
                { nev: "Kukorica", ar: "250" },
                { nev: "Rukkola", ar: "350" },
                { nev: "Fekete olivabogyó", ar: "250" },
                { nev: "Koktélparadicsom", ar: "350" },
                { nev: "Pepperoni (csípős)", ar: "300" },
                { nev: "Gomba", ar: "300" },
              ].map(f => (
                <div key={f.nev} className="vk-etlap-extra-sor">
                  <span>{f.nev}</span>
                  <span>{f.ar} Ft</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="vk-etlap-afa-megjegyzes">
        <p>Az árak forintban (HUF) értendők és tartalmazzák az ÁFÁ-t.</p>
        <p>Az étlapon feltüntetett árak szervízdíjat nem tartalmazzák.</p>
        <p>Ételeinknek tartalmazó allergénekről tájékozódj pultos kollégáinknál!</p>
      </div>

      <Footer />
    </>
  );
}
