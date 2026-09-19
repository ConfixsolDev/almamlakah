'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import Image from 'next/image';

type JourneyItem = {
  number: string;
  title: string;
  text: string;
  image: string;
  imagePosition?: string;
};

export function JourneyGallery({ items }: { items: JourneyItem[] }) {
  const [active, setActive] = useState<JourneyItem | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && setActive(null);
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [active]);

  return <>
    <div className="journey-grid">
      {items.map((item) => <button className="journey-card journey-card-button" key={item.number} type="button" onClick={() => setActive(item)} aria-label={`Open details for ${item.title}`}>
        <span className="journey-visual"><Image src={item.image} alt="" fill sizes="(max-width: 680px) 42vw, (max-width: 1200px) 33vw, 390px" style={{ objectPosition: item.imagePosition }} /></span>
        <span className="journey-copy"><span>{item.number}</span><strong>{item.title}</strong><small>{item.text}</small><em>View step <ArrowRight /></em></span>
      </button>)}
    </div>
    {active && <div className="journey-modal" role="dialog" aria-modal="true" aria-labelledby="journey-modal-title" onMouseDown={(event) => event.target === event.currentTarget && setActive(null)}>
      <div className="journey-modal-panel">
        <button className="journey-modal-close" type="button" onClick={() => setActive(null)} aria-label="Close journey details"><X /></button>
        <div className="journey-modal-image"><Image src={active.image} alt="" fill sizes="(max-width: 680px) 100vw, 68vw" style={{ objectPosition: active.imagePosition }} /></div>
        <div className="journey-modal-copy"><p className="section-label">Journey step {active.number}</p><h2 id="journey-modal-title">{active.title}</h2><p>{active.text}</p><p>Our team connects this stage to the next handover with clear specifications, careful handling, and a focus on the dining experience at the destination.</p></div>
      </div>
    </div>}
  </>;
}
