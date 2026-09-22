import Image from 'next/image';
import { InnerPage } from '../inner-page';

const breedProfiles = [
  {
    name: 'Bhagnari',
    type: 'Cattle · Balochistan',
    text: 'A powerful Pakistani breed valued for its substantial frame, strength, and distinctive presence in premium beef programmes.',
  },
  {
    name: 'Sahiwal',
    type: 'Cattle · Punjab',
    text: 'One of Pakistan’s best-known breeds internationally, recognised for tropical adaptability, resilience, and dependable performance.',
  },
  {
    name: 'Red Sindhi',
    type: 'Cattle · Sindh',
    text: 'A globally recognised red-coated breed known for heat tolerance, adaptability, and a strong connection to Pakistan’s livestock heritage.',
  },
  {
    name: 'Cholistani',
    type: 'Cattle · Southern Punjab',
    text: 'A hardy desert breed distinguished by its spotted coat, climate resilience, and ability to thrive in demanding environments.',
  },
  {
    name: 'Tharparkar',
    type: 'Cattle · Sindh',
    text: 'A resilient dual-purpose breed from the Thar region, valued for its adaptability, sound structure, and consistent performance.',
  },
  {
    name: 'Dhanni',
    type: 'Cattle · Punjab',
    text: 'An active, hardy breed with a strong frame and a long-standing place in Punjab’s livestock tradition.',
  },
  {
    name: 'Kajli',
    type: 'Sheep · Punjab',
    text: 'A large-framed Pakistani sheep breed recognised for its distinctive markings, growth potential, and suitability for premium lamb and mutton programmes.',
  },
  {
    name: 'Lohi',
    type: 'Sheep · Punjab',
    text: 'A well-known long-eared sheep breed valued for adaptability, meat production, and dependable performance under local conditions.',
  },
];

const selectionJourney = [
  {
    number: '01',
    phase: 'Source approval',
    title: 'Approved farms and compartments',
    text: 'Livestock enters the programme only from approved sources. Where required, animals are raised within programme-approved disease-free compartments supported by veterinary certification and documented biosecurity controls.',
    records: 'Supplier approval · origin · species · breed',
  },
  {
    number: '02',
    phase: 'Individual identity',
    title: 'Tagged from the start',
    text: 'Each animal is linked to a unique visual or electronic tag so its identity can follow it through raising, selection, movement, and processing handover.',
    records: 'Animal ID · tag number · date of entry',
  },
  {
    number: '03',
    phase: 'Health qualification',
    title: 'Documented veterinary history',
    text: 'Health status, vaccination history, veterinary observations, required testing, and movement records are reviewed. Only eligible animals continue in the programme.',
    records: 'Health record · vaccination · testing · movement',
  },
  {
    number: '04',
    phase: 'Responsible raising',
    title: 'Nutrition, welfare, and growth',
    text: 'Feed, clean water, body condition, welfare observations, and growth are monitored to support healthy development and consistent product quality.',
    records: 'Feed programme · welfare checks · growth review',
  },
  {
    number: '05',
    phase: 'Selection gates',
    title: 'The best progress further',
    text: 'Breed character, conformation, age, weight, health, welfare, and programme suitability are checked at defined stages—not only at final selection.',
    records: 'Conformation · weight · condition · specification',
  },
  {
    number: '06',
    phase: 'Pre-processing release',
    title: 'Identity and fitness reconfirmed',
    text: 'Before dispatch, the animal ID and supporting records are reconciled, transport fitness is checked, and eligibility is confirmed against the intended programme.',
    records: 'Release check · transport fitness · record match',
  },
  {
    number: '07',
    phase: 'Controlled handover',
    title: 'Traceability into processing',
    text: 'The approved animal and its records move into controlled halal processing, where lot identification connects source information to product, packing, and cold-chain records.',
    records: 'Animal-to-lot link · halal control · cold-chain record',
  },
];

const assurancePoints = ['Individual tag traceability', 'Continuous health records', 'Veterinary oversight', 'Biosecurity controls', 'Welfare monitoring', 'Export-market eligibility'];

export default function BreedsPage() {
  return (
    <InnerPage
      eyebrow="Pakistani breed selection"
      title={<>Carefully selected<br />breeds.</>}
      intro="Exceptional quality begins with responsibly sourced livestock, verified health records, and selection standards applied from origin to processing."
      image="/multi-breed-premium.png"
    >
      <section className="detail-intro">
        <div>
          <p className="section-label">The foundation</p>
          <h2>Breed selection<br />with a purpose</h2>
        </div>
        <p>Carefully selected Pakistani cattle and sheep breeds form the foundation of our premium beef, lamb, and mutton range. Only animals meeting defined health, welfare, conformation, traceability, and programme requirements progress through the selection journey.</p>
      </section>

      <div className="breed-feature">
        <Image
          className="breed-feature-image"
          src="/multi-breed-premium.png"
          alt="Selected premium Pakistani cattle breeds"
          width={1536}
          height={1024}
          sizes="(max-width: 680px) 100vw, 55vw"
        />
        <div>
          <p className="section-label">Pakistan’s livestock heritage</p>
          <h2>Distinct breeds.<br />One quality standard.</h2>
          <p>Our selection brings together internationally recognised breeds and distinctive regional livestock, chosen according to product specification, market requirements, and responsible availability.</p>
          <a className="text-link" href="/process">See the cutting programme <span>→</span></a>
        </div>
      </div>

      <section className="selection-journey" aria-labelledby="selection-journey-title">
        <div className="selection-journey-heading">
          <div>
            <p className="section-label">The selection journey</p>
            <h2 id="selection-journey-title">Known origin.<br />Verified health.<br />Selected throughout.</h2>
          </div>
          <p>Quality is protected through a documented chain of decisions. Identification, animal health, responsible raising, welfare, and product suitability are reviewed from approved source to controlled processing handover.</p>
        </div>

        <div className="assurance-strip" aria-label="Livestock assurance controls">
          {assurancePoints.map((point) => <span key={point}>{point}</span>)}
        </div>

        <div className="selection-stage-list">
          {selectionJourney.map((stage) => (
            <article className="selection-stage" key={stage.number}>
              <div className="selection-stage-index"><span>{stage.number}</span><i /></div>
              <div className="selection-stage-content">
                <p className="selection-phase">{stage.phase}</p>
                <h3>{stage.title}</h3>
                <p>{stage.text}</p>
                <small>{stage.records}</small>
              </div>
            </article>
          ))}
        </div>

        <aside className="compartment-note">
          <p className="section-label">Biosecure compartment assurance</p>
          <h3>Disease-status claims must be verified.</h3>
          <p>Where livestock is sourced from a programme-approved disease-free compartment, that status must be supported by the relevant veterinary approval and certification for the destination market. Final export eligibility remains subject to official animal-health and import requirements.</p>
        </aside>
      </section>

      <section className="breed-catalogue" aria-labelledby="breed-catalogue-title">
        <div className="breed-catalogue-heading">
          <p className="section-label">Selected Pakistani breeds</p>
          <h2 id="breed-catalogue-title">Recognised at home.<br />Respected beyond Pakistan.</h2>
        </div>
        <div className="breed-profile-grid">
          {breedProfiles.map((breed, index) => (
            <article className="breed-profile" key={breed.name}>
              <span className="breed-number">{String(index + 1).padStart(2, '0')}</span>
              <p className="breed-type">{breed.type}</p>
              <h3>{breed.name}</h3>
              <p>{breed.text}</p>
            </article>
          ))}
        </div>
      </section>
    </InnerPage>
  );
}
