import { ArrowRight, CheckCircle2, ChevronRight, Snowflake, ShieldCheck, Ship } from 'lucide-react';
import type { ReactNode } from 'react';
import Image from 'next/image';
import { whatsappUrl } from './contact';

type PageProps = {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  image: string;
  imagePosition?: string;
  children: ReactNode;
};

export function InnerPage({ eyebrow, title, intro, image, imagePosition, children }: PageProps) {
  return (
    <main className="inner-page">
      <header className="inner-header shell">
        <a className="brand-logo" href="/" aria-label="Al-Mamlakah W.L.L. home"><Image className="official-brand-mark" src="/almamlakah-official-mark.svg" alt="" width={72} height={43} /><span className="brand-name brand-primary">Al-Mamlakah <small>W.L.L.</small></span></a>
        <nav aria-label="Primary navigation">
          <a href="/story">Our Story</a><a href="/breeds">Breeds</a><a href="/process">Process</a><a href="/products">Products</a><a href="/export-journey">Export Journey</a><a href="/quality">Quality</a>
        </nav>
        <a className="gold-button" href={whatsappUrl} target="_blank" rel="noreferrer">Partner with us <ArrowRight /></a>
      </header>
      <section className="inner-hero">
        <Image className="inner-hero-media" src={image} alt="" fill priority sizes="100vw" style={imagePosition ? { objectPosition: imagePosition } : undefined} />
        <div className="shell inner-hero-copy"><p className="section-label">{eyebrow}</p><h1>{title}</h1><p>{intro}</p></div>
      </section>
      <div className="shell inner-content">{children}</div>
      <section className="inner-cta"><div className="shell"><p className="section-label">Built around your market</p><h2>Premium cuts. Reliable supply.<br />Made for your business.</h2><p className="inner-cta-copy">Tell us the cuts, volumes, packaging, and delivery requirements you need. We align responsible sourcing, halal processing, quality control, and cold-chain delivery from Pakistan to the GCC.</p><a className="gold-button" href={whatsappUrl} target="_blank" rel="noreferrer">Plan your meat programme <ArrowRight /></a></div></section>
      <footer className="inner-footer"><div className="shell"><span>© {new Date().getFullYear()} Al-Mamlakah W.L.L.</span><a href="https://faujimeat.com" target="_blank" rel="noreferrer">Fauji Meat <ArrowRight /></a><a className="image-credit" href="https://www.magnific.com" target="_blank" rel="noreferrer">Photography: Designed by Magnific</a><span>Pakistan · GCC markets</span></div></footer>
    </main>
  );
}

export function ProcessPill({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return <article className="process-pill"><div className="process-pill-icon">{icon}</div><div><h3>{title}</h3><p>{text}</p></div></article>;
}

const cutGroups = [
  {
    id: 'beef',
    eyebrow: 'Premium beef',
    title: 'From signature steaks to slow-cook favourites',
    text: 'Bone-in, boneless, primal, sub-primal, portion-controlled, and kitchen-ready formats prepared to specification.',
    image: '/real-beef-bone-in.jpg',
    imageAlt: 'Fresh bone-in raw beef cut photographed on a preparation board',
    cuts: [
      ['Tenderloin', 'Centre-cut, whole, or portioned for premium dining.'],
      ['Striploin', 'Clean steaks and roasting portions with a refined fat edge.'],
      ['Ribeye', 'Marbled steaks, whole ribeye rolls, and grill-ready portions.'],
      ['Top sirloin', 'Lean, versatile steaks with dependable portion control.'],
      ['Rump', 'Robust flavour for steaks, roasts, and catering portions.'],
      ['T-bone & porterhouse', 'Bone-in presentation cuts for signature menus.'],
      ['Tomahawk', 'Long-bone centrepiece cuts for premium sharing occasions.'],
      ['Short ribs', 'Meat-rich ribs prepared for braising and barbecue.'],
      ['Brisket', 'Whole or divided for low-and-slow applications.'],
      ['Chuck roll', 'Versatile muscle for roasts, steaks, and premium mince.'],
      ['Topside', 'Lean roasting cut with clean slicing performance.'],
      ['Silverside', 'Uniform, trim-ready muscle for roasting and catering.'],
      ['Knuckle', 'Lean, practical cut for steaks, roasting, and portioning.'],
      ['Shank', 'Collagen-rich bone-in or boneless slow-cook cut.'],
      ['Flank', 'Full-flavoured flat cut for grilling and slicing.'],
      ['Skirt', 'Loose-grained cut suited to fast cooking and marinades.'],
      ['Oxtail', 'Rich, segmented cut for broths and slow braises.'],
      ['Diced & minced beef', 'Kitchen-ready formats produced to agreed fat ratios.'],
    ],
  },
  {
    id: 'mutton',
    eyebrow: 'Mutton & lamb',
    title: 'Traditional favourites. Professional formats.',
    text: 'Premium sheep products can be prepared as whole joints, bone-in cuts, boneless muscles, portions, cubes, or mince.',
    image: '/authentic-mutton-cuts.webp',
    imageAlt: 'Professional assortment of premium raw mutton and lamb cuts',
    cuts: [
      ['Whole leg', 'Bone-in centrepiece for roasting and traditional menus.'],
      ['Boneless leg', 'Rolled, netted, or divided into controlled muscles.'],
      ['Shoulder', 'Whole, boned, or portioned for slow cooking.'],
      ['Rack', 'French-trimmed or standard presentation for premium dining.'],
      ['Loin', 'Whole loin, saddle, or refined boneless portions.'],
      ['Chops', 'Evenly cut loin or rib chops to target thickness.'],
      ['Neck', 'Bone-in rounds or boneless meat for rich slow-cooked dishes.'],
      ['Breast', 'Economical, flavourful cut for rolling and slow cooking.'],
      ['Ribs', 'Single, sheet, or portioned ribs for grills and braises.'],
      ['Shank', 'Front or hind shanks for premium slow-cook service.'],
      ['Diced mutton', 'Consistent cubes for curries, stews, and production kitchens.'],
      ['Mutton mince', 'Prepared to the required grind and fat specification.'],
    ],
  },
  {
    id: 'offal',
    eyebrow: 'Offal & variety meats',
    title: 'Carefully cleaned. Precisely prepared.',
    text: 'Selected edible offal and secondary products are hygienically prepared, chilled, and packed according to destination requirements.',
    image: '/cuts-premium-offal.webp',
    imageAlt: 'Clean professional presentation of edible offal and variety meats',
    cuts: [
      ['Liver', 'Trimmed whole or sliced to buyer specification.'],
      ['Heart', 'Cleaned, trimmed, and packed whole or portioned.'],
      ['Kidneys', 'Carefully cleaned and supplied whole or prepared.'],
      ['Tongue', 'Trimmed whole tongue for slow cooking and specialist menus.'],
      ['Tripe', 'Thoroughly cleaned and prepared to market requirements.'],
      ['Cheek', 'Rich, tender slow-cook meat with strong culinary value.'],
      ['Marrow bones', 'Cross-cut or canoe-cut for stocks and premium service.'],
      ['Tail', 'Portioned for broths, stews, and slow-braised dishes.'],
    ],
  },
];

const carcassFormats = ['Whole carcass', 'Half carcass', 'Forequarter', 'Hindquarter', 'Primal cuts', 'Sub-primal cuts', 'Bone-in or boneless', 'Portion-controlled'];

const supplyFormats = ['Fresh chilled', 'Frozen', 'Vacuum packed', 'Food-service cartons', 'Retail-ready packs', 'Custom weights', 'Private-label ready', 'Export documented'];

export function ProcessSteps() {
  return <div className="process-steps"><ProcessPill icon={<CheckCircle2 />} title="Debone & trim" text="Skilled butchery follows the agreed specification, removing bone, excess fat, silverskin, and uneven edges while protecting yield." /><ProcessPill icon={<Snowflake />} title="Chill & protect" text="Product moves quickly into controlled cooling so the cold chain begins at the cutting table, not at the loading bay." /><ProcessPill icon={<ShieldCheck />} title="Inspect & pack" text="Weights, trim, appearance, seal integrity, labelling, and lot traceability are checked before release." /><ProcessPill icon={<Ship />} title="Export to spec" text="Cartons are palletised, documented, and handed to temperature-managed freight under shipment SOPs." /></div>;
}

export function CutGrid() {
  let cutNumber = 0;

  return <div className="cut-catalogue">
    <section className="carcass-formats" aria-labelledby="carcass-formats-title">
      <div><p className="section-label">Whole-carcass capability</p><h3 id="carcass-formats-title">Every stage of the breakdown</h3></div>
      <ul>{carcassFormats.map((format) => <li key={format}>{format}</li>)}</ul>
    </section>

    {cutGroups.map((group) => <section className="cut-group" id={`cuts-${group.id}`} key={group.id}>
      <Image className="cut-group-image" src={group.image} alt={group.imageAlt} width={1600} height={900} sizes="(max-width: 680px) 100vw, 1200px" />
      <div className="cut-group-heading"><div><p className="section-label">{group.eyebrow}</p><h3>{group.title}</h3></div><p>{group.text}</p></div>
      <div className="cut-grid">{group.cuts.map(([name, text]) => {
        cutNumber += 1;
        const number = String(cutNumber).padStart(2, '0');
        return <article className="cut-card" key={`${group.id}-${name}`}><span>{number}</span><h3>{name}</h3><p>{text}</p><ChevronRight /></article>;
      })}</div>
    </section>)}

    <section className="supply-formats" aria-labelledby="supply-formats-title">
      <div><p className="section-label">Prepared for your operation</p><h3 id="supply-formats-title">Specify the product. We shape the programme.</h3></div>
      <ul>{supplyFormats.map((format) => <li key={format}>{format}</li>)}</ul>
    </section>
  </div>;
}
