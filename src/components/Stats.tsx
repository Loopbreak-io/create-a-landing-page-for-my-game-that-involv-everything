import React, { useState } from 'react';

const STATS = [
  {
    id: 'tribes',
    value: '7',
    label: 'Playable tribes',
    detail: 'Reed, Ash, Tusk, Ochre, Hollow, Frostmoss, Saltbone',
  },
  {
    id: 'weapons',
    value: '148',
    label: 'Knappable weapons',
    detail: 'Spears, atlatls, stone axes, crude bows, bolas',
  },
  {
    id: 'map',
    value: '38 km²',
    label: 'Hand-carved valley',
    detail: 'One seamless low-poly world, no loading gates',
  },
  {
    id: 'relics',
    value: '12,880',
    label: 'Relics on chain',
    detail: 'Each with an unforgeable kill history',
  },
];

const CLANS = [
  'REED CLAN',
  'ASH WALKERS',
  'TUSKBEARERS',
  'OCHRE HANDS',
  'HOLLOW SONS',
  'FROSTMOSS',
];

export default function Stats() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section
      id="world"
      style={{
        position: 'relative',
        padding: '96px 20px 88px',
        background: 'linear-gradient(180deg, #100e0b 0%, #17140f 100%)',
        borderBottom: '1px solid rgba(232,220,196,0.09)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.35,
          backgroundImage:
            'repeating-linear-gradient(115deg, rgba(232,220,196,0.035) 0px, rgba(232,220,196,0.035) 1px, transparent 1px, transparent 14px)',
          pointerEvents: 'none',
        }}
      />
      <div style={{ position: 'relative', maxWidth: '1240px', margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
            marginBottom: '44px',
          }}
        >
          <div>
            <span
              style={{
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: '#d98a2b',
              }}
            >
              The valley by numbers
            </span>
            <h2
              style={{
                fontSize: 'clamp(28px, 3.4vw, 40px)',
                fontWeight: 700,
                color: '#f4eee2',
                marginTop: '12px',
                maxWidth: '620px',
                lineHeight: 1.18,
              }}
            >
              A cruel, beautiful world built on stone, sinew and rain
            </h2>
          </div>
          <p
            style={{
              fontSize: '15px',
              color: '#a99a80',
              maxWidth: '320px',
              lineHeight: 1.7,
            }}
          >
            No mini-map arrows. You read smoke, tracks and the way the herd runs. The valley
            remembers everything you do to it.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: '18px',
          }}
        >
          {STATS.map((stat) => (
            <div
              key={stat.id}
              onMouseEnter={() => setHoveredId(stat.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                padding: '28px 24px',
                background:
                  hoveredId === stat.id
                    ? 'linear-gradient(160deg, #2b241c 0%, #1d1813 100%)'
                    : 'linear-gradient(160deg, #211c16 0%, #191410 100%)',
                border: '1px solid',
                borderColor:
                  hoveredId === stat.id ? 'rgba(217,138,43,0.5)' : 'rgba(232,220,196,0.12)',
                borderRadius: '6px',
                transform: hoveredId === stat.id ? 'translateY(-6px)' : 'translateY(0)',
                boxShadow:
                  hoveredId === stat.id
                    ? '0 22px 44px rgba(0,0,0,0.6)'
                    : '0 6px 18px rgba(0,0,0,0.35)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'default',
              }}
            >
              <div
                style={{
                  fontFamily: "'Cinzel', Georgia, serif",
                  fontSize: '42px',
                  fontWeight: 900,
                  lineHeight: 1,
                  color: hoveredId === stat.id ? '#f6b95c' : '#f4eee2',
                  transition: 'color 0.3s ease',
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#c9b895',
                  marginTop: '12px',
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  fontSize: '13px',
                  lineHeight: 1.6,
                  color: '#a99a80',
                  marginTop: '10px',
                }}
              >
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: '52px',
            padding: '20px 0',
            borderTop: '1px dashed rgba(232,220,196,0.16)',
            borderBottom: '1px dashed rgba(232,220,196,0.16)',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '48px',
              width: 'max-content',
              animation: 'marquee 26s linear infinite',
            }}
          >
            {CLANS.concat(CLANS).map((clan, index) => (
              <span
                key={`${clan}-${index}`}
                style={{
                  fontFamily: "'Cinzel', Georgia, serif",
                  fontSize: '15px',
                  fontWeight: 700,
                  letterSpacing: '0.28em',
                  color: index % 2 === 0 ? '#c9b895' : '#8a7c60',
                  whiteSpace: 'nowrap',
                }}
              >
                {clan}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}