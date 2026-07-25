import React, { useState } from 'react';

const QUOTES = [
  {
    id: 'q1',
    quote:
      'I threw a spear at a boar, missed by a metre, and then spent two real minutes limping through reeds to pick it back up while it circled me. Nothing else makes a miss feel that expensive.',
    name: 'Dana Ferreiro',
    role: 'Senior Editor',
    company: 'Roughcut Play',
    initials: 'DF',
    accent: '#d98a2b',
  },
  {
    id: 'q2',
    quote:
      'My clan has a stone axe with 411 recorded kills and three repairs. Someone offered real money for it and we voted no. That is the first time an in-game item felt like an heirloom to me.',
    name: 'Ovi Tanaka',
    role: 'Chieftain, Tuskbearers',
    company: '820-member clan',
    initials: 'OT',
    accent: '#86a06a',
  },
  {
    id: 'q3',
    quote:
      'The low-poly art is doing heavy lifting: at distance I can tell a Frostmoss scout from an Ochre raider purely by shoulder shape. That is real design discipline, not a budget shortcut.',
    name: 'Marek Ilves',
    role: 'Art Director',
    company: 'Northlight Studio',
    initials: 'MI',
    accent: '#c1462a',
  },
];

export default function Testimonials() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section
      id="tribes"
      style={{
        padding: '104px 20px',
        background: '#100e0b',
        borderBottom: '1px solid rgba(232,220,196,0.09)',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '20px',
            marginBottom: '48px',
          }}
        >
          <div style={{ maxWidth: '620px' }}>
            <span
              style={{
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: '#d98a2b',
              }}
            >
              Voices from the valley
            </span>
            <h2
              style={{
                fontSize: 'clamp(30px, 3.8vw, 44px)',
                fontWeight: 700,
                color: '#f4eee2',
                margin: '14px 0 0',
                lineHeight: 1.14,
              }}
            >
              What the first hunters carved on the wall
            </h2>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 16px',
              border: '1px solid rgba(232,220,196,0.16)',
              borderRadius: '3px',
              background: 'rgba(232,220,196,0.03)',
            }}
          >
            <div style={{ display: 'flex', gap: '3px' }}>
              {[0, 1, 2, 3, 4].map((star) => (
                <svg key={star} width="14" height="14" viewBox="0 0 24 24" fill="#f0a94a">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span style={{ fontSize: '13px', color: '#c9b895' }}>
              4.8 / 5 from 3,140 playtest reports
            </span>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '22px',
          }}
        >
          {QUOTES.map((item) => {
            const active = hoveredId === item.id;
            return (
              <figure
                key={item.id}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  margin: 0,
                  padding: '30px 26px 26px',
                  background: active
                    ? 'linear-gradient(160deg, #2a231b 0%, #191510 100%)'
                    : 'linear-gradient(160deg, #1f1a15 0%, #171310 100%)',
                  border: '1px solid',
                  borderColor: active ? 'rgba(232,220,196,0.3)' : 'rgba(232,220,196,0.11)',
                  borderRadius: '8px',
                  transform: active ? 'translateY(-6px)' : 'translateY(0)',
                  boxShadow: active
                    ? '0 26px 50px rgba(0,0,0,0.6)'
                    : '0 6px 18px rgba(0,0,0,0.32)',
                  transition: 'all 0.32s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'default',
                }}
              >
                <div>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill={item.accent}
                    style={{ opacity: active ? 0.95 : 0.6, marginBottom: '16px', transition: 'opacity 0.3s ease' }}
                  >
                    <path d="M7.2 6C4.8 7.5 3.5 10 3.5 13.2 3.5 16 5.2 18 7.6 18c2 0 3.5-1.4 3.5-3.3 0-1.9-1.4-3.2-3.2-3.2-.3 0-.6 0-.9.1.3-1.6 1.4-2.9 3-3.8L7.2 6zm9 0c-2.4 1.5-3.7 4-3.7 7.2 0 2.8 1.7 4.8 4.1 4.8 2 0 3.5-1.4 3.5-3.3 0-1.9-1.4-3.2-3.2-3.2-.3 0-.6 0-.9.1.3-1.6 1.4-2.9 3-3.8L16.2 6z" />
                  </svg>
                  <blockquote
                    style={{
                      margin: 0,
                      fontSize: '16px',
                      lineHeight: 1.78,
                      color: '#e4dac7',
                      fontStyle: 'italic',
                    }}
                  >
                    “{item.quote}”
                  </blockquote>
                </div>
                <figcaption
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    marginTop: '26px',
                    paddingTop: '20px',
                    borderTop: '1px solid rgba(232,220,196,0.12)',
                  }}
                >
                  <span
                    style={{
                      width: '44px',
                      height: '44px',
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: "'Cinzel', Georgia, serif",
                      fontWeight: 700,
                      fontSize: '15px',
                      color: '#1a1409',
                      background: item.accent,
                      borderRadius: '3px',
                      boxShadow: active ? `0 0 18px ${item.accent}55` : 'none',
                      transition: 'box-shadow 0.3s ease',
                    }}
                  >
                    {item.initials}
                  </span>
                  <span style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '14px', fontWeight: 700, color: '#f4eee2' }}>
                      {item.name}
                    </span>
                    <span style={{ fontSize: '12.5px', color: '#a99a80' }}>
                      {item.role} · {item.company}
                    </span>
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}