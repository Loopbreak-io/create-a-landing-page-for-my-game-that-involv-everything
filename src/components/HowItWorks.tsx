import React, { useState } from 'react';

const STEPS = [
  {
    id: 'step-1',
    number: '01',
    title: 'Bind your wallet, choose a tribe',
    body:
      'Link a wallet and pick from seven clans. Each starts you with a patched hide set, a fire-hardened spear and a stone axe minted straight to your inventory. No purchase needed to begin the first winter.',
    meta: 'Takes under 40 seconds',
  },
  {
    id: 'step-2',
    number: '02',
    title: 'Hunt, knap and scar your gear',
    body:
      'Track herds, throw, miss, retrieve, repair. Every kill, break and repair is written to your relic history, so a battered spear with 200 kills is worth more than a pristine one.',
    meta: 'Persistent, per-item history',
  },
  {
    id: 'step-3',
    number: '03',
    title: 'Trade relics or pass them down',
    body:
      'Sell a famed axe at the Stone Ledger, lend gear to a clanmate for a raid cut, or retire a legendary hunter into your tribe hall where their stats buff every hunter after them.',
    meta: 'Marketplace + tribe vault',
  },
];

export default function HowItWorks() {
  const [activeId, setActiveId] = useState('step-1');

  return (
    <section
      id="hunt"
      style={{
        padding: '104px 20px',
        background: 'linear-gradient(180deg, #17140f 0%, #100e0b 100%)',
        borderBottom: '1px solid rgba(232,220,196,0.09)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          right: '-140px',
          top: '80px',
          width: '420px',
          height: '420px',
          background:
            'radial-gradient(circle, rgba(134,160,106,0.14) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div style={{ position: 'relative', maxWidth: '1240px', margin: '0 auto' }}>
        <div style={{ maxWidth: '660px', marginBottom: '52px' }}>
          <span
            style={{
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: '#a8c088',
            }}
          >
            From first flint to legend
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
            Three steps into the Long Winter
          </h2>
          <p style={{ fontSize: '17px', lineHeight: 1.72, color: '#ded3bf' }}>
            Ownership sits quietly behind the game, not in front of it. You hunt first — the
            chain just refuses to forget what you did.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '20px',
          }}
        >
          {STEPS.map((step, index) => {
            const active = activeId === step.id;
            return (
              <div
                key={step.id}
                onMouseEnter={() => setActiveId(step.id)}
                style={{
                  position: 'relative',
                  padding: '32px 26px 30px',
                  background: active
                    ? 'linear-gradient(165deg, #2b241c 0%, #1a1611 100%)'
                    : 'linear-gradient(165deg, #1e1a15 0%, #171310 100%)',
                  border: '1px solid',
                  borderColor: active ? 'rgba(240,169,74,0.5)' : 'rgba(232,220,196,0.11)',
                  borderRadius: '8px',
                  transform: active ? 'translateY(-8px)' : 'translateY(0)',
                  boxShadow: active
                    ? '0 26px 50px rgba(0,0,0,0.6)'
                    : '0 6px 18px rgba(0,0,0,0.32)',
                  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '-1px',
                    left: '26px',
                    right: '26px',
                    height: '3px',
                    background: active
                      ? 'linear-gradient(90deg, #f0a94a, rgba(240,169,74,0))'
                      : 'transparent',
                    transition: 'all 0.3s ease',
                  }}
                />
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    marginBottom: '20px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Cinzel', Georgia, serif",
                      fontSize: '34px',
                      fontWeight: 900,
                      color: active ? '#f6b95c' : '#6d5f47',
                      lineHeight: 1,
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {step.number}
                  </span>
                  <span
                    style={{
                      flex: 1,
                      height: '1px',
                      background: active
                        ? 'rgba(240,169,74,0.4)'
                        : 'rgba(232,220,196,0.14)',
                    }}
                  />
                  {index < STEPS.length - 1 ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={active ? '#f0a94a' : '#6d5f47'} strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={active ? '#a8c088' : '#6d5f47'} strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  )}
                </div>
                <h3
                  style={{
                    fontSize: '21px',
                    fontWeight: 700,
                    color: '#f4eee2',
                    marginBottom: '12px',
                    lineHeight: 1.25,
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ fontSize: '14.5px', lineHeight: 1.72, color: '#b6a88d' }}>
                  {step.body}
                </p>
                <div
                  style={{
                    marginTop: '20px',
                    paddingTop: '16px',
                    borderTop: '1px dashed rgba(232,220,196,0.16)',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: active ? '#c9b895' : '#8a7c60',
                  }}
                >
                  {step.meta}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}