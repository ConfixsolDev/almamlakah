import { ArrowRight, CheckCircle2, ChevronRight, Snowflake, ShieldCheck, Ship } from 'lucide-react';
import type { ReactNode } from 'react';
import Image from 'next/image';

type PageProps = {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  image: string;
  children: ReactNode;
};

export function InnerPage({ eyebrow, title, intro, image, children }: PageProps) {
  return (
    <main className="inner-page">
      <header className="inner-header shell">
        <a className="brand-logo" href="/" aria-label="almamlakah LLC home"><Image src="/almamlakah-mark.svg" alt="" width={42} height={42} /><span className="brand-name brand-primary">almamlakah <small>LLC</small></span></a>
        <nav aria-label="Primary navigation">
          <a href="/story">Our Story</a><a href="/breeds">Breeds</a><a href="/process">Process</a><a href="/products">Products</a><a href="/export-journey">Export Journey</a><a href="/quality">Quality</a>
        </nav>
        <a className="gold-button" href="/#contact">Partner with us <ArrowRight /></a>
      </header>
      <section className="inner-hero">
        <Image className="inner-hero-media" src={image} alt="" fill priority sizes="100vw" />
        <div className="shell inner-hero-copy"><p className="section-label">{eyebrow}</p><h1>{title}</h1><p>{intro}</p></div>
      </section>
      <div className="shell inner-content">{children}</div>
      <section className="inner-cta"><div className="shell"><p className="section-label">Ready for the next shipment?</p><h2>Build a dependable meat programme.</h2><a className="gold-button" href="/#contact">Start a partnership <ArrowRight /></a></div></section>
      <footer className="inner-footer"><div className="shell"><span>© {new Date().getFullYear()} almamlakah LLC</span><a href="https://faujimeat.com" target="_blank" rel="noreferrer">Fauji Meat <ArrowRight /></a><span>Pakistan · GCC markets</span></div></footer>
    </main>
  );
}

export function ProcessPill({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return <article className="process-pill"><div className="process-pill-icon">{icon}</div><div><h3>{title}</h3><p>{text}</p></div></article>;
}

export const cutTypes = [
  ['01', 'Tenderloin', 'Centre-cut medallions for premium dining.'],
  ['02', 'Striploin', 'Clean, even steaks with a refined fat edge.'],
  ['03', 'Ribeye', 'Marbled, full-flavour steaks for grill menus.'],
  ['04', 'Top Sirloin', 'Lean, versatile portions for consistent service.'],
  ['05', 'Rump Steak', 'Robust flavour and excellent portion control.'],
  ['06', 'T-Bone', 'Bone-in presentation cut for signature plates.'],
  ['07', 'Tomahawk', 'Long-bone showpiece for sharing menus.'],
  ['08', 'Short Ribs', 'Slow-cook ready with generous meat coverage.'],
  ['09', 'Brisket', 'Structured for low-and-slow barbecue applications.'],
  ['10', 'Chuck Roll', 'Reliable texture for roasts and premium mince.'],
  ['11', 'Topside', 'Lean roasting cut with clean slicing performance.'],
  ['12', 'Silverside', 'Uniform, trim-ready muscle for catering.'],
  ['13', 'Knuckle', 'Practical, low-waste cut for portioned dishes.'],
  ['14', 'Oxtail', 'Rich, collagen-led cut for slow braises.'],
  ['15', 'Mutton Chops', 'Bone-in chops with a tender, meaty finish.'],
  ['16', 'Mutton Leg', 'Whole or portioned for roasts and curries.'],
  ['17', 'Mutton Shoulder', 'Layered flavour for slow cooking and sharing.'],
  ['18', 'Mutton Loin', 'Elegant portions for plated dining.'],
  ['19', 'Mutton Diced', 'Kitchen-ready cubes for controlled recipes.'],
];

export function ProcessSteps() {
  return <div className="process-steps"><ProcessPill icon={<CheckCircle2 />} title="Debone & trim" text="Skilled butchery follows the agreed specification, removing bone, excess fat, silverskin, and uneven edges while protecting yield." /><ProcessPill icon={<Snowflake />} title="Chill & protect" text="Product moves quickly into controlled cooling so the cold chain begins at the cutting table, not at the loading bay." /><ProcessPill icon={<ShieldCheck />} title="Inspect & pack" text="Weights, trim, appearance, seal integrity, labelling, and lot traceability are checked before release." /><ProcessPill icon={<Ship />} title="Export to spec" text="Cartons are palletised, documented, and handed to temperature-managed freight under shipment SOPs." /></div>;
}

export function CutGrid() {
  const cutImages = ['/product-ribeye.png', '/product-lamb.png', '/product-chef-cuts.png'];
  return <div className="cut-grid">{cutTypes.map(([number, name, text], index) => <article className="cut-card" key={number}><Image className="cut-card-image" src={cutImages[index % cutImages.length]} alt="" width={640} height={821} sizes="(max-width: 680px) 50vw, 33vw" /><div className="cut-card-content"><span>{number}</span><h3>{name}</h3><p>{text}</p><ChevronRight /></div></article>)}</div>;
}
