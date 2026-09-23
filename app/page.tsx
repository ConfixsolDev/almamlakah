import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Camera,
  CheckCircle2,
  Globe2,
  Play,
  ScanLine,
  ShieldCheck,
  Ship,
  Snowflake,
  Sparkles,
  UsersRound,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Image from 'next/image';
import { JourneyGallery } from './journey-gallery';
import { whatsappNumber, whatsappUrl } from './contact';

const navItems = [
  ['Our Story', '/story'],
  ['Breeds', '/breeds'],
  ['Process', '/process'],
  ['Products', '/products'],
  ['Export Journey', '/export-journey'],
  ['Quality', '/quality'],
];

const journey = [
  {
    number: '01',
    title: 'Breed selection',
    text: 'Bhagnari and selected Pakistani cattle chosen for strength, yield, and consistent quality.',
    image: '/multi-breed-premium.png',
  },
  {
    number: '02',
    title: 'Responsible raising',
    text: 'Livestock raised in carefully managed environments with attention to feed and wellbeing.',
    image: '/responsible-raising-premium.png',
  },
  {
    number: '03',
    title: 'Precision processing',
    text: 'Halal processing, hygienic handling, and disciplined controls at every stage.',
    image: '/journey-processing.png',
  },
  {
    number: '04',
    title: 'The export journey',
    text: 'Quality preserved. Confidence delivered.',
    image: '/journey-cold-chain.png',
  },
  {
    number: '05',
    title: 'GCC distribution',
    text: 'A focused supply corridor connecting Pakistan with importers across GCC markets.',
    image: '/gcc-corridor.png',
    imagePosition: '72% center',
  },
  {
    number: '06',
    title: 'Fine dining destination',
    text: 'Premium cuts prepared for restaurants, hotels, retailers, and food-service partners.',
    image: '/journey-fine-dining.png',
  },
];

const products = [
  {
    title: 'Bhagnari Beef',
    text: 'A distinguished Pakistani breed selected for bold flavour and premium culinary performance.',
    image: '/real-beef-cutting-board.jpg',
  },
  {
    title: 'Premium Lamb',
    text: 'Tender, versatile cuts prepared for hospitality, retail, and specialist food service.',
    image: '/product-authentic-mutton.webp',
  },
  {
    title: 'Chef-Ready Cuts',
    text: 'Consistent specifications and practical formats for professional kitchens and buyers.',
    image: '/product-chef-cuts.png',
  },
];

const standards: Array<[LucideIcon, string, string]> = [
  [BadgeCheck, 'Halal integrity', 'Clear controls from approved source to packed product.'],
  [ShieldCheck, 'Hygiene & safety', 'Disciplined handling designed around food-safety requirements.'],
  [Snowflake, 'Cold-chain discipline', 'Temperature control through storage, freight, and delivery.'],
  [ScanLine, 'Quality checks', 'Defined checkpoints and documented product specifications.'],
  [Globe2, 'Export readiness', 'Documentation and logistics structured for GCC import needs.'],
];

function BrandLockup({ footer = false }: { footer?: boolean }) {
  return (
    <div className="brand-lockup">
      <a className="brand-logo" href="#home" aria-label="Al-Mamlakah W.L.L. home">
        <Image className="official-brand-mark" src="/almamlakah-official-mark.svg" alt="" width={72} height={43} />
        <span className="brand-name brand-primary">Al-Mamlakah <small>W.L.L.</small></span>
      </a>
      {footer && <>
        <span className="brand-divider" />
        <a className="footer-fauji-link" href="https://faujimeat.com" target="_blank" rel="noreferrer" aria-label="Visit Fauji Meat website">
          Fauji Meat <ArrowRight />
        </a>
      </>}
    </div>
  );
}

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-origin-media" aria-hidden="true">
          <Image className="hero-media" src="/hero-cattle-origin.png" alt="" fill priority sizes="100vw" />
        </div>
        <header className="site-header shell">
          <BrandLockup />
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          </nav>
          <a className="gold-button header-button" href={whatsappUrl} target="_blank" rel="noreferrer">Partner with us <ArrowRight /></a>
        </header>
        <nav className="mobile-nav shell" aria-label="Mobile navigation">
          {navItems.slice(0, 5).map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>

        <div className="hero-content shell">
          <p className="eyebrow">Premium Pakistani meat. Crafted for the Gulf.</p>
          <h1>Pakistan&apos;s finest<br />breeds. Prepared for<br />Gulf tables.</h1>
          <p className="hero-kicker">Shared values. One trusted partnership.</p>
          <p className="hero-subtitle">Halal integrity from origin to table</p>
          <div className="hero-actions">
            <a className="gold-button" href="#journey">Explore the journey <ArrowRight /></a>
            <a className="outline-button" href={whatsappUrl} target="_blank" rel="noreferrer">Request partnership</a>
          </div>
        </div>

        <div className="hero-trust shell" aria-label="Our promises">
          <div><Globe2 /><span><strong>Pakistan to GCC</strong>One trusted corridor</span></div>
          <div><UsersRound /><span><strong>Premium protein</strong>For a healthier region</span></div>
          <div><ShieldCheck /><span><strong>Trusted standards</strong>From source to shipment</span></div>
          <div><Sparkles /><span><strong>Excellence</strong>In every cut</span></div>
        </div>
      </section>

      <section className="journey-section section-pad" id="story">
        <div className="shell">
          <div className="section-intro split-intro">
            <div>
              <p className="section-label">The journey</p>
              <h2>From Pakistan&apos;s farms<br />to Gulf tables</h2>
            </div>
            <div className="intro-copy">
              <p>A focused partnership, a shared commitment. From carefully selected Pakistani livestock to dining tables across the GCC, we bring together responsible sourcing, disciplined processing, and dependable export logistics.</p>
              <a className="text-link" href="#journey">Discover our process <ArrowRight /></a>
            </div>
          </div>

          <div id="journey"><JourneyGallery items={journey} /></div>
        </div>
      </section>

      <section className="products-section section-pad" id="products">
        <div className="shell products-layout">
          <div className="products-copy" id="breeds">
            <p className="section-label">Our premium range</p>
            <h2>Pakistani origin.<br />Crafted for Gulf kitchens.</h2>
            <p>Premium halal meat selected for consistency, flavour, tenderness, and the demands of GCC hospitality and retail partners.</p>
            <a className="outline-rect" href={whatsappUrl} target="_blank" rel="noreferrer">Discuss your requirements <ArrowRight /></a>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.title}>
                <Image className="product-visual" src={product.image} alt="" width={640} height={821} sizes="(max-width: 680px) 100vw, (max-width: 1120px) 33vw, 24vw" />
                <div className="product-copy">
                  <div>
                    <h3>{product.title}</h3>
                    <p>{product.text}</p>
                  </div>
                  <ArrowRight />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="corridor-section" id="export-journey">
        <Image className="corridor-media" src="/gcc-corridor.png" alt="" fill sizes="100vw" />
        <div className="shell corridor-content">
          <div className="corridor-copy">
            <p className="section-label">A focused trade corridor</p>
            <h2>From Pakistan.<br />Across the GCC.</h2>
            <p>One export platform designed to serve importers, distributors, hotels, restaurants, retailers, and institutional buyers across the Gulf.</p>
            <div className="route-line">
              <strong>Pakistan</strong><span><Ship /> Refrigerated export</span><strong>GCC markets</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="quality-section section-pad" id="quality">
        <div className="shell">
          <div className="quality-heading">
            <div>
              <p className="section-label">Our commitment</p>
              <h2>Halal integrity.<br />Quality without compromise.</h2>
            </div>
            <p>Quality is not a final inspection. It is a chain of deliberate choices—from livestock selection and halal handling to cold storage, documentation, and delivery.</p>
          </div>
          <div className="standards-grid">
            {standards.map(([Icon, title, text]) => (
              <article className="standard" key={title}>
                <div className="standard-icon"><Icon /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section" id="contact">
        <Image className="cta-media" src="/journey-fine-dining.png" alt="" fill sizes="100vw" />
        <div className="shell cta-content">
          <p className="section-label">Partnerships built for growth</p>
          <h2>Premium Pakistani meat.<br />Built for Gulf business.</h2>
          <p>Tell us about your market, product specifications, volumes, and delivery needs. We&apos;ll shape the right Pakistan-to-GCC supply conversation.</p>
          <a className="gold-button" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label={`Contact Al-Mamlakah on WhatsApp at ${whatsappNumber}`}>WhatsApp {whatsappNumber} <ArrowRight /></a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="shell footer-main">
          <BrandLockup footer />
          <div className="footer-statement">
            <strong>Pakistani origin. Crafted for the Gulf.</strong>
            <span>Premium halal meat with quality in every detail</span>
          </div>
          <nav aria-label="Footer navigation">
            {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          </nav>
          <div className="socials" aria-label="Social channels">
            <a href="#contact" aria-label="Business profile"><BriefcaseBusiness /></a>
            <a href="#contact" aria-label="Photo gallery"><Camera /></a>
            <a href="#contact" aria-label="Video channel"><Play /></a>
          </div>
        </div>
        <div className="shell footer-bottom">
          <span>© {year} Al-Mamlakah W.L.L. · Fauji Meat partnership</span>
          <a className="image-credit" href="https://www.magnific.com" target="_blank" rel="noreferrer">Photography: Designed by Magnific</a>
          <span><CheckCircle2 /> Halal integrity · responsible sourcing · cold-chain discipline</span>
        </div>
      </footer>
    </main>
  );
}
