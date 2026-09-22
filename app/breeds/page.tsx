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
    name: 'Beetal',
    type: 'Goat · Punjab',
    text: 'A large-framed Pakistani goat breed valued for meat quality, versatility, and suitability for premium mutton selections.',
  },
  {
    name: 'Kamori',
    type: 'Goat · Sindh',
    text: 'A distinctive heritage breed recognised for its rich colouring, elegant profile, and premium position in Pakistan’s goat sector.',
  },
];

export default function BreedsPage() {
  return (
    <InnerPage
      eyebrow="Pakistani breed selection"
      title={<>Carefully selected<br />breeds.</>}
      intro="Exceptional quality begins at the source."
      image="/multi-breed-premium.png"
    >
      <section className="detail-intro">
        <div>
          <p className="section-label">The foundation</p>
          <h2>Breed selection<br />with a purpose</h2>
        </div>
        <p>Carefully selected Pakistani cattle, sheep, and goat breeds form the foundation of our premium beef and mutton range, helping partners meet exacting specifications and create outstanding menus.</p>
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
