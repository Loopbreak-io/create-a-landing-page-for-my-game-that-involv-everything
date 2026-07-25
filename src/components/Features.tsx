import React, { useState } from 'react';

const Icons = {
  Spear: () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M14 3l7 7-2 2-7-7 2-2z" />
      <path d="M12 5L3 21" />
      <path d="M6.5 14.5l3 3" />
    </svg>
  ),
  Bow: () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M4 20C4 11 11 4 20 4" />
      <path d="M20 4L4 20" />
      <path d="M15 4h5v5" />
    </svg>
  ),
  Axe: () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M13 3c4 0 7 2.5 7 5.5S17 14 13 14V3z" />
      <path d="M13 8.5H4" />
      <path d="M4 6.5v4" />
    </svg>
  ),
  Chain: () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M9.5 13.5a4 4 0 015.6-5.6l2.4 2.4" />
      <path d="M14.5 10.5a4 4 0 01-5.6 5.6L6.5 13.7" />
    </svg>
  ),
  Hide: () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M5 4h14v10a6 6 0 01-6 6h-2a6 6 0 01-6-6V4z" />
      <path d="M9 4v16M15 4v16M5 10h14" />
    </svg>
  ),
  Fire: () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M12 3c2 3.6-1.6 5 0 7.6 1.6-1.4 4-1 4 1.8 0 2.4-1.8 4.2-4 4.2s-4.4-1.8-4.4-4.2C7.6 8.6 10 6.4 12 3z" />
      <path d="M5 21h14" />
    </svg>
  ),
};

const FEATURES = [
  {
    id: 'throw',
    icon: Icons.Spear,
    title: 'Weight, wind and arc',
    body:
      'Spears are simulated, not hit-scanned. You lead the target, feel the drag of a wet shaft and learn to throw uphill. Missing means walking out to fetch it.',
  },
  {
    id: 'bow',
    icon: Icons.Bow,
    title: 'Crude bows, honest arrows',
    body:
      'Sinew strings stretch when it rains and arrowheads split on bone. Every shot is a gamble you take with a shaking, cold-numbed draw arm.',
  },
  {
    id: 'craft',
    icon: Icons.Axe,
    title: 'Knap it yourself',
    body:
      'Strike flint at the right angle to shape a blade. Bad strikes leave brittle edges that shatter mid-swing and cost you the hunt.',
  },
  {
    id: 'nft',
    icon: Icons.Chain,
    title: 'Relics that remember',
    body:
      'Each weapon and hunter is an NFT carrying its own scar record: kills, breaks, repairs and the tribe that carried it before you.',
  },
  {
    id: 'clothes',
    icon: Icons.Hide,
    title: 'Patched, layered survival',
    body:
      'Hide, bark cloth and bone stitching are gear and warmth at once. Torn patches bleed heat, and frostbite is permanent for that hunter.',
  },
];

const FEATURED = {
  title: 'Stylized low-poly, painted like a cave wall',
  body:
    'Hard facets, ochre and umber palettes, hand-daubed textures and a sky that shifts from smoke-grey dawn to ember dusk. Every silhouette reads at 80 metres so you can identify a rival hunter by his shoulder hide alone — a look that runs at 60fps in the browser.',
  bullets: [
    'One valley, no loading screens',
    'Dynamic weather drives animal behaviour',
    'Readable silhouettes over photoreal noise',
    'Runs in-browser via WebGPU',
  ],
};

export default function Features() {
  const [hoveredId, setHoveredId] = useState(null);
  const [featuredHover, setFeaturedHover] = useState(false);

  return (
    <section
      id="weapons"
      style={{
        padding: '104px 20px',
        background: '#100e0b',
        borderBottom: '1px solid rgba(232,220,196,0.09)',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <div style={{ maxWidth: '700px', marginBottom: '48px' }}>
          <span
            style={{
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: '#d98a2b',
            }}
          >
            Mechanics of the old world
          </span>
          <h2
            style={{
              fontSize: 'clamp(30px, 3.8vw, 44px)',
              fontWeight: 700,
              color: '#f4eee2',
              margin: '14px 0 16px',
              lineHeight: 1.14,
            }}
          >
            Third-person combat, ten thousand years before gunpowder
          </h2>
          <p style={{ fontSize: '17px', lineHeight: 1.72, color: '#ded3bf' }}>
            Over the shoulder, low to the grass, breath fogging in front of the reticle you don't
            have. SPEARFALL takes the feel of a modern shooter and strips it down to stone,
            timber and nerve.
          </p>
        </div>

        <div
          onMouseEnter={() => setFeaturedHover(true)}
          onMouseLeave={() => setFeaturedHover(false)}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
            alignItems: 'center',
            padding: '34px',
            marginBottom: '22px',
            background: featuredHover
              ? 'linear-gradient(140deg, #2d251b 0%, #1a1611 100%)'
              : 'linear-gradient(140deg, #241e17 0%, #171410 100%)',
            border: '1px solid',
            borderColor: featuredHover ? 'rgba(240,169,74,0.45)' : 'rgba(232,220,196,0.13)',
            borderRadius: '10px',
            boxShadow: featuredHover
              ? '0 28px 60px rgba(0,0,0,0.6)'
              : '0 10px 28px rgba(0,0,0,0.4)',
            transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <div>
            <span
              style={{
                display: 'inline-block',
                padding: '5px 11px',
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#a8c088',
                border: '1px solid rgba(134,160,106,0.45)',
                borderRadius: '2px',
                marginBottom: '18px',
              }}
            >
              Art direction
            </span>
            <h3
              style={{
                fontSize: 'clamp(24px, 2.6vw, 32px)',
                fontWeight: 700,
                color: '#f4eee2',
                marginBottom: '14px',
                lineHeight: 1.2,
              }}
            >
              {FEATURED.title}
            </h3>
            <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#ded3bf', marginBottom: '20px' }}>
              {FEATURED.body}
            </p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '10px' }}>
              {FEATURED.bullets.map((bullet) => (
                <li
                  key={bullet}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '14px',
                    color: '#c9b895',
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#d98a2b" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
          <div
            style={{
              height: '260px',
              borderRadius: '8px',
              border: '1px solid rgba(232,220,196,0.12)',
              background:
                'linear-gradient(180deg, #4a3a25 0%, #2b2318 45%, #171310 100%)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <svg width="100%" height="100%" viewBox="0 0 400 260" preserveAspectRatio="none">
              <polygon points="0,190 90,110 165,175 250,95 330,165 400,120 400,260 0,260" fill="#2f2718" />
              <polygon points="0,215 80,160 170,210 260,150 340,205 400,170 400,260 0,260" fill="#241d14" />
              <polygon points="0,240 110,205 220,242 320,215 400,238 400,260 0,260" fill="#1a1610" />
              <circle cx="322" cy="58" r="26" fill="#d98a2b" opacity="0.75" />
              <g stroke="#0f0d0a" strokeWidth="3" fill="none">
                <path d="M148 236 l0 -30" />
                <path d="M148 214 l14 -8" />
                <path d="M148 236 l-10 14 M148 236 l10 14" />
              </g>
              <path d="M162 206 L214 186" stroke="#cfc3a6" strokeWidth="3" />
              <polygon points="214,186 226,182 216,192" fill="#e8dcc4" />
            </svg>
            <div
              style={{
                position: 'absolute',
                left: '16px',
                bottom: '14px',
                fontSize: '11px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#e8dcc4',
                textShadow: '0 2px 8px rgba(0,0,0,0.8)',
              }}
            >
              Ochre Ridge — dusk hunt
            </div>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '22px',
          }}
        >
          {FEATURES.map((feature) => {
            const active = hoveredId === feature.id;
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                onMouseEnter={() => setHoveredId(feature.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  padding: '28px 26px 30px',
                  background: active ? 'rgba(217,138,43,0.07)' : 'rgba(232,220,196,0.025)',
                  border: '1px solid',
                  borderColor: active ? 'rgba(217,138,43,0.45)' : 'rgba(232,220,196,0.11)',
                  borderRadius: '6px',
                  transform: active ? 'translateY(-6px)' : 'translateY(0)',
                  boxShadow: active
                    ? '0 22px 44px rgba(0,0,0,0.55)'
                    : '0 4px 14px rgba(0,0,0,0.3)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                }}
              >
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '48px',
                    height: '48px',
                    marginBottom: '18px',
                    color: active ? '#f6b95c' : '#c9b895',
                    background: active ? 'rgba(240,169,74,0.14)' : 'rgba(232,220,196,0.05)',
                    border: '1px solid',
                    borderColor: active ? 'rgba(240,169,74,0.4)' : 'rgba(232,220,196,0.14)',
                    borderRadius: '4px',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <IconComponent />
                </span>
                <h3
                  style={{
                    fontSize: '19px',
                    fontWeight: 700,
                    color: '#f4eee2',
                    marginBottom: '10px',
                  }}
                >
                  {feature.title}
                </h3>
                <p style={{ fontSize: '14.5px', lineHeight: 1.7, color: '#b6a88d' }}>
                  {feature.body}
                </p>
              </div>
            );
          })}

          <div
            onMouseEnter={() => setHoveredId('fire')}
            onMouseLeave={() => setHoveredId(null)}
            style={{
              padding: '28px 26px',
              background:
                hoveredId === 'fire'
                  ? 'linear-gradient(150deg, rgba(193,70,42,0.22) 0%, rgba(23,20,16,0.9) 100%)'
                  : 'linear-gradient(150deg, rgba(193,70,42,0.12) 0%, rgba(23,20,16,0.9) 100%)',
              border: '1px solid',
              borderColor:
                hoveredId === 'fire' ? 'rgba(224,122,82,0.6)' : 'rgba(193,70,42,0.35)',
              borderRadius: '6px',
              transform: hoveredId === 'fire' ? 'translateY(-6px)' : 'translateY(0)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer',
            }}
          >
            <span style={{ display: 'inline-flex', color: '#e79c74', marginBottom: '18px' }}>
              <Icons.Fire />
            </span>
            <h3 style={{ fontSize: '19px', fontWeight: 700, color: '#f4eee2', marginBottom: '10px' }}>
              Fire is a weapon and a witness
            </h3>
            <p style={{ fontSize: '14.5px', lineHeight: 1.7, color: '#e0c9b8' }}>
              Camps must burn to keep hunters alive, but smoke carries for kilometres. Light one
              and the valley knows exactly where you sleep tonight.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}