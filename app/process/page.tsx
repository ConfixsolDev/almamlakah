import { ArrowRight, ClipboardCheck, ThermometerSnowflake } from 'lucide-react';
import { CutGrid, InnerPage, ProcessSteps } from '../inner-page';

export default function ProcessPage() {
  return <InnerPage eyebrow="Precision processing" title={<>Cut with intent.<br />Ship with confidence.</>} intro="Expertly prepared beef and mutton, precisely deboned, portioned, chilled, and quality-checked to meet the exact specifications of restaurant and food-service partners across the GCC." image="/journey-processing.png">
    <section className="detail-intro"><div><p className="section-label">The cutting room</p><h2>From primal piece<br />to plate-ready specification</h2></div><p>Every cut is planned around the customer’s menu, yield, portion size, packaging format, and delivery window. Our process protects the product’s natural character while giving buyers the repeatability a professional kitchen needs.</p></section>
    <ProcessSteps />
    <section className="spec-band"><div><ThermometerSnowflake /><h3>Cooling is part of the cut</h3><p>Controlled cooling, hygienic handling, and disciplined handover preserve texture and freshness from deboning through export.</p></div><div><ClipboardCheck /><h3>Specification is the SOP</h3><p>Each order can be defined by cut, trim, weight range, pack format, label, lot, and destination documentation.</p></div></section>
    <section className="cuts-section"><p className="section-label">The premium 19</p><h2>One cutting room.<br />Nineteen dining possibilities.</h2><p className="section-lede">A practical range spanning signature steaks, bone-in centrepieces, slow-cook favourites, and kitchen-ready mutton formats.</p><CutGrid /></section>
    <section className="detail-callout"><div><p className="section-label">For chefs, buyers & importers</p><h2>Tell us your cut sheet.</h2><p>Share your menu, target weights, carton plan, and destination. We will shape a cutting and shipment SOP around it.</p></div><a className="gold-button" href="/#contact">Discuss a specification <ArrowRight /></a></section>
  </InnerPage>;
}
