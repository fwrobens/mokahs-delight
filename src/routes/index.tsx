import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import bobaImg from "@/assets/boba.jpg";
import coffeeImg from "@/assets/coffee.jpg";
import crepeImg from "@/assets/crepe.jpg";
import jianbingImg from "@/assets/jianbing.jpg";
import interiorImg from "@/assets/interior.jpg";
import g1 from "@/assets/gallery/g1.jpg";
import g2 from "@/assets/gallery/g2.jpg";
import g3 from "@/assets/gallery/g3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MŌKAH — East × West Café in Wynwood, Miami" },
      { name: "description", content: "Coffee, bubble tea, jianbings and crepes crafted between cultures. A calm street café in the middle of Wynwood. 34 NW 29th St, Miami." },
      { property: "og:title", content: "MŌKAH — East × West Café, Wynwood" },
      { property: "og:description", content: "Coffee · Bubble Tea · Bites crafted between cultures. Open daily in Wynwood, Miami." },
      { property: "og:image", content: heroImg },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

const reviews = [
  { quote: "The crepes are fire and the coffee is the best one in the area.", name: "Valentina A." },
  { quote: "Soft, calm, almost like you're not in the middle of Wynwood anymore.", name: "Camille M." },
  { quote: "Their bubble tea is sooo good — perfect amount of ice and sweetness.", name: "Edith C." },
  { quote: "Wonderful place with beautiful service and yummy food.", name: "Breyda O." },
  { quote: "Insanely good bubble tea, perfect amount of sweetness.", name: "Armando R." },
  { quote: "Got the Coffee Cloud — why is it the creamiest iced drink ever?", name: "Camille M." },
];

const menu = {
  west: [
    { name: "Coffee Cloud", note: "house iced signature, velvety cream top", price: "7" },
    { name: "Espresso", note: "single origin, pulled short", price: "4" },
    { name: "Cortado", note: "espresso · steamed milk", price: "5" },
    { name: "Sweet Crepe", note: "strawberries, powdered sugar", price: "9" },
    { name: "Savory Crepe", note: "egg, gruyère, herbs", price: "11" },
  ],
  east: [
    { name: "Brown Sugar Boba", note: "fresh tapioca, oat milk", price: "7" },
    { name: "Passion Green Tea", note: "jasmine, passionfruit, ice", price: "6" },
    { name: "Matcha Latte", note: "ceremonial grade, lightly sweet", price: "6" },
    { name: "Jianbing", note: "Beijing street crepe, scallion, hoisin", price: "12" },
    { name: "Taro Cloud", note: "stone-ground taro, sea-salt cream", price: "7" },
  ],
};

function Home() {
  return (
    <main className="min-h-screen bg-cream text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Story />
      <Menu />
      <Gallery />
      <Reviews />
      <Visit />
      <Footer />
    </main>
  );
}

function Gallery() {
  const shots = [
    { src: g1, alt: "Guests at MŌKAH" },
    { src: g2, alt: "MŌKAH café exterior in Wynwood" },
    { src: g3, alt: "Fresh bites from MŌKAH" },
  ];
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <p className="text-[12px] uppercase tracking-[0.22em] text-clay mb-4">From the corner</p>
            <h2 className="font-serif text-5xl md:text-7xl text-espresso leading-[0.9]">
              Snapshots of <em className="text-clay">a soft day.</em>
            </h2>
          </div>
          <a href="https://instagram.com/mokahmiami" target="_blank" rel="noreferrer"
             className="text-[12px] uppercase tracking-[0.2em] text-espresso underline-offset-4 hover:underline">
            More on Instagram →
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {shots.map((s, i) => (
            <figure key={i} className={`overflow-hidden ${i === 1 ? "md:translate-y-10" : ""}`}>
              <img src={s.src} alt={s.alt} loading="lazy"
                   className="w-full aspect-[3/4] object-cover hover:scale-[1.03] transition duration-700" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-cream/70 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-serif text-2xl tracking-tight text-espresso">
          MŌKAH<span className="text-clay">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-9 text-[13px] uppercase tracking-[0.18em] text-espresso/80">
          <a href="#story" className="hover:text-clay transition">Story</a>
          <a href="#menu" className="hover:text-clay transition">Menu</a>
          <a href="#reviews" className="hover:text-clay transition">Reviews</a>
          <a href="#visit" className="hover:text-clay transition">Visit</a>
        </nav>
        <a
          href="tel:+13056978809"
          className="text-[11px] md:text-[12px] uppercase tracking-[0.15em] md:tracking-[0.18em] px-3 md:px-4 py-2 border border-espresso text-espresso hover:bg-espresso hover:text-cream transition whitespace-nowrap"
        >
          Order <span className="hidden sm:inline">pickup</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-28 md:pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-7 rise">
          <div className="flex items-center gap-3 text-[12px] uppercase tracking-[0.22em] text-clay">
            <span className="h-px w-10 bg-clay" />
            Wynwood · Miami
          </div>
          <h1 className="font-serif text-[16vw] md:text-[10.5rem] leading-[0.9] md:leading-[0.88] mt-6 text-espresso text-balance">
            East <em className="text-clay not-italic font-serif">×</em> West,<br />
            <span className="italic text-clay/90">poured slow.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-espresso/80">
            Coffee, bubble tea, jianbings and crepes — crafted between cultures
            on a quiet corner of 29th Street. Open early, stays soft.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#menu" className="px-6 py-3 bg-espresso text-cream text-[12px] uppercase tracking-[0.2em] hover:bg-clay transition">
              See the menu
            </a>
            <a href="#visit" className="px-6 py-3 border border-espresso text-espresso text-[12px] uppercase tracking-[0.2em] hover:bg-espresso hover:text-cream transition">
              Find us
            </a>
          </div>
          <div className="mt-12 flex items-center gap-6 text-sm text-espresso/70">
            <div className="flex items-center gap-2">
              <span className="text-clay text-lg tracking-tighter">★★★★★</span>
              <span>5.0 · Google</span>
            </div>
            <span className="h-4 w-px bg-border" />
            <span>Opens 7 AM Mon</span>
          </div>
        </div>

        <div className="md:col-span-5 relative">
          <div className="absolute -top-6 -left-6 font-cjk text-[8rem] text-clay/15 leading-none select-none pointer-events-none">
            東西
          </div>
          <img
            src={heroImg}
            alt="Brown sugar boba and crepe on a marble table at MŌKAH"
            width={1080}
            height={1920}
            className="relative w-full aspect-[4/5] object-cover shadow-[0_30px_80px_-30px_oklch(0.28_0.04_35/0.4)]"
          />
          <div className="absolute -bottom-5 -right-5 bg-cream border border-border p-4 max-w-[200px] hidden md:block">
            <p className="font-serif italic text-espresso leading-snug">
              "the creamiest iced drink ever."
            </p>
            <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-clay">— Google</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Coffee", "Bubble Tea", "Jianbing", "Crepes", "Matcha", "Cold Brew", "Bites", "東 × 西"];
  return (
    <div className="border-y border-border bg-espresso text-cream overflow-hidden py-5">
      <div className="marquee-track flex gap-12 whitespace-nowrap font-serif text-3xl md:text-4xl">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            {t}
            <span className="text-clay">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Story() {
  return (
    <section id="story" className="py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5">
          <img
            src={interiorImg}
            alt="MŌKAH café interior with warm wood counter and hanging plants"
            width={1600}
            height={1100}
            loading="lazy"
            className="w-full aspect-[5/6] object-cover"
          />
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <p className="text-[12px] uppercase tracking-[0.22em] text-clay mb-6">Our story</p>
          <h2 className="font-serif text-5xl md:text-6xl leading-[0.95] text-espresso text-balance">
            A street café <em className="text-clay">between</em> two coasts.
          </h2>
          <p className="mt-8 text-espresso/80 text-lg leading-relaxed">
            MŌKAH is a love letter to both sides of the table — espresso from one
            tradition, tapioca pearls from another, jianbing folded next to a
            buttered crepe. We opened on 29th Street to give Wynwood a quieter
            corner: a soft room with good light, real ingredients, and people
            who care that you got home okay.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 text-espresso">
            <Stat k="5.0" l="Google rating" />
            <Stat k="11+" l="5-star reviews" />
            <Stat k="7 AM" l="Open daily" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ k, l }: { k: string; l: string }) {
  return (
    <div className="border-t border-espresso/30 pt-4">
      <div className="font-serif text-4xl text-clay">{k}</div>
      <div className="text-[11px] uppercase tracking-[0.18em] mt-1 text-espresso/70">{l}</div>
    </div>
  );
}

function Menu() {
  return (
    <section id="menu" className="py-28 md:py-40 bg-espresso text-cream relative overflow-hidden">
      <div className="absolute inset-0 grain opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <p className="text-[12px] uppercase tracking-[0.22em] text-ember mb-4">The menu</p>
            <h2 className="font-serif text-6xl md:text-7xl leading-[0.9] text-balance">
              Two halves of <br/> the same table.
            </h2>
          </div>
          <p className="max-w-sm text-cream/70">
            A rotating selection — daily bakes, seasonal teas, single-origin pours.
            Highlights below; full menu in store.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-20">
          <MenuColumn label="West" cjk="" img={coffeeImg} alt="Iced coffee being poured" items={menu.west} />
          <MenuColumn label="East" cjk="東" img={bobaImg} alt="Brown sugar boba" items={menu.east} reverse />
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-10">
          <FeatureCard img={crepeImg} title="Sweet & savory crepes" copy="French technique, Miami fruit. Folded to order." />
          <FeatureCard img={jianbingImg} title="Beijing jianbing" copy="Thin egg crepe, hoisin, scallion, crispy wonton crunch." />
        </div>
      </div>
    </section>
  );
}

function MenuColumn({
  label, cjk, img, alt, items, reverse,
}: { label: string; cjk: string; img: string; alt: string; items: typeof menu.west; reverse?: boolean }) {
  return (
    <div className={reverse ? "md:pt-20" : ""}>
      <div className="flex items-baseline justify-between mb-8">
        <h3 className="font-serif text-4xl text-cream">
          {label}
          {cjk && <span className="font-cjk text-ember text-2xl ml-3">{cjk}</span>}
        </h3>
        <span className="text-[11px] uppercase tracking-[0.2em] text-cream/50">{label === "West" ? "西" : ""}</span>
      </div>
      <img src={img} alt={alt} width={1024} height={1280} loading="lazy"
           className="w-full aspect-[4/5] object-cover mb-8" />
      <ul className="divide-y divide-cream/15">
        {items.map((it) => (
          <li key={it.name} className="py-4 flex items-baseline gap-4">
            <span className="font-serif text-2xl text-cream">{it.name}</span>
            <span className="flex-1 border-b border-dotted border-cream/25 translate-y-[-4px]" />
            <span className="font-serif text-2xl text-ember">${it.price}</span>
            <span className="hidden md:block basis-full text-sm text-cream/60 italic mt-1">{it.note}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FeatureCard({ img, title, copy }: { img: string; title: string; copy: string }) {
  return (
    <div className="group relative overflow-hidden">
      <img src={img} alt={title} width={1024} height={1280} loading="lazy"
           className="w-full aspect-[16/10] object-cover transition duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h4 className="font-serif text-3xl">{title}</h4>
        <p className="text-cream/80 mt-1">{copy}</p>
      </div>
    </div>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <p className="text-[12px] uppercase tracking-[0.22em] text-clay mb-4">Loved in Wynwood</p>
            <h2 className="font-serif text-6xl md:text-7xl text-espresso leading-[0.9]">
              5.0 on Google,<br/>
              <em className="text-clay">earnestly.</em>
            </h2>
          </div>
          <a href="https://www.google.com/search?q=MŌKAH+miami" target="_blank" rel="noreferrer"
             className="text-[12px] uppercase tracking-[0.2em] text-espresso underline-offset-4 hover:underline">
            Read all reviews →
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <figure key={i} className="bg-card border border-border p-7 flex flex-col">
              <span className="text-clay tracking-tighter text-lg">★★★★★</span>
              <blockquote className="font-serif text-2xl text-espresso leading-snug mt-5 flex-1 text-balance">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-6 text-[11px] uppercase tracking-[0.2em] text-espresso/60">
                — {r.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section id="visit" className="py-28 md:py-40 bg-clay text-cream relative overflow-hidden">
      <div className="absolute -top-32 -right-20 font-cjk text-[28rem] leading-none text-cream/5 select-none">
        摩
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 relative">
        <div className="md:col-span-7">
          <p className="text-[12px] uppercase tracking-[0.22em] text-cream/70 mb-6">Visit</p>
          <h2 className="font-serif text-6xl md:text-8xl leading-[0.88] text-balance">
            Come slow down<br/>on 29th.
          </h2>
          <p className="mt-8 text-cream/85 text-lg max-w-md">
            Park anywhere on the block. Order at the counter. Stay as long as you'd like —
            the wifi is fast and the music is low.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="https://maps.google.com/?q=34+NW+29th+St+Miami+FL+33127" target="_blank" rel="noreferrer"
               className="px-6 py-3 bg-cream text-clay text-[12px] uppercase tracking-[0.2em] hover:bg-espresso hover:text-cream transition">
              Get directions
            </a>
            <a href="tel:+13056978809"
               className="px-6 py-3 border border-cream text-cream text-[12px] uppercase tracking-[0.2em] hover:bg-cream hover:text-clay transition">
              (305) 697-8809
            </a>
          </div>
        </div>

        <div className="md:col-span-5 space-y-8 md:pt-6">
          <InfoBlock label="Address" body={<>34 NW 29th Street<br/>Miami, FL 33127</>} />
          <InfoBlock label="Hours" body={<>
            Mon–Fri · 7am – 7pm<br/>
            Sat–Sun · 8am – 8pm
          </>} />
          <InfoBlock label="Order" body={<>
            Pickup & delivery via DoorDash<br/>
            <a href="https://instagram.com/mokahmiami" target="_blank" rel="noreferrer" className="underline underline-offset-4">@mokahmiami</a>
          </>} />
        </div>
      </div>
    </section>
  );
}

function InfoBlock({ label, body }: { label: string; body: React.ReactNode }) {
  return (
    <div className="border-t border-cream/30 pt-5">
      <p className="text-[11px] uppercase tracking-[0.22em] text-cream/60 mb-2">{label}</p>
      <p className="font-serif text-2xl leading-snug">{body}</p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-espresso text-cream/70 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-wrap items-center justify-between gap-6">
        <div className="font-serif text-2xl text-cream">
          MŌKAH<span className="text-clay">.</span>
          <span className="font-cjk text-base text-cream/40 ml-3">東 × 西</span>
        </div>
        <p className="text-sm">© {new Date().getFullYear()} MŌKAH Miami. Crafted between cultures.</p>
        <div className="flex gap-6 text-[12px] uppercase tracking-[0.2em]">
          <a href="https://instagram.com/mokahmiami" target="_blank" rel="noreferrer" className="hover:text-cream">Instagram</a>
          <a href="tel:+13056978809" className="hover:text-cream">Call</a>
        </div>
      </div>
    </footer>
  );
}
