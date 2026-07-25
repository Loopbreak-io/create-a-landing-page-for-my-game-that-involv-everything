import React, { useState } from 'react';

const PROOF = [
  { id: 'hunters', value: '61,400', label: 'Hunters in playtest' },
  { id: 'relics', value: '12,880', label: 'Carved relics minted' },
  { id: 'kills', value: '4.1M', label: 'Beasts felled' },
];

const EMBERS = [
  { id: 'e1', left: '12%', delay: '0s', size: 4 },
  { id: 'e2', left: '26%', delay: '1.4s', size: 3 },
  { id: 'e3', left: '48%', delay: '2.6s', size: 5 },
  { id: 'e4', left: '67%', delay: '0.8s', size: 3 },
  { id: 'e5', left: '81%', delay: '3.2s', size: 4 },
  { id: 'e6', left: '92%', delay: '2s', size: 3 },
];

export default function Hero() {
  const [primaryHover, setPrimaryHover] = useState(false);
  const [secondaryHover, setSecondaryHover] = useState(false);

  return (
    <section
      id="top"
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: '120px 20px 104px',
        background:
          'radial-gradient(120% 80% at 50% 0%, #241d15 0%, #171410 45%, #100e0b 100%)',
        borderBottom: '1px solid rgba(232,220,196,0.09)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(rgba(232,220,196,0.07) 1px, transparent 1px)',
          backgroundSize: '26px 26px',
          maskImage: 'radial-gradient(70% 60% at 50% 35%, #000 0%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(70% 60% at 50% 35%, #000 0%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '-160px',
          left: '50%',
          width: '900px',
          height: '640px',
          transform: 'translateX(-50%)',
          background:
            'radial-gradient(circle, rgba(217,138,43,0.22) 0%, rgba(193,70,42,0.10) 40%, transparent 72%)',
          animation: 'flicker 5.5s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />
      {EMBERS.map((ember) => (
        <span
          key={ember.id}
          style={{
            position: 'absolute',
            bottom: '80px',
            left: ember.left,
            width: `${ember.size}px`,
            height: `${ember.size}px`,
            borderRadius: '50%',
            background: '#f0a94a',
            boxShadow: '0 0 10px rgba(240,169,74,0.8)',
            animation: `emberRise 6s linear ${ember.delay} infinite`,
            pointerEvents: 'none',
          }}
        />
      ))}

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1240px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
          gap: '56px',
          alignItems: 'center',
        }}
      >
        <div style={{ animation: 'slideUp 0.8s ease both' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 14px',
              background: 'rgba(193,70,42,0.12)',
              border: '1px solid rgba(193,70,42,0.42)',
              borderRadius: '2px',
              marginBottom: '28px',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e07a52" strokeWidth="2">
              <path d="M12 3c1.6 3.4-1.2 4.6 0 7 1.4-1.2 3.4-1 3.4 1.6 0 2-1.5 3.4-3.4 3.4S8 13.6 8 11.6c0-3.4 2.2-5.6 4-8.6z" />
              <path d="M6 20h12" />
            </svg>
            <span
              style={{
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#e79c74',
              }}
            >
              Closed playtest — Season of the Long Winter
            </span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(42px, 6vw, 74px)',
              fontWeight: 900,
              lineHeight: 1.03,
              letterSpacing: '0.01em',
              color: '#f4eee2',
              margin: '0 0 22px',
              textShadow: '0 6px 30px rgba(0,0,0,0.6)',
            }}
          >
            Sharpen the flint.
            <br />
            <span
              style={{
                background: 'linear-gradient(100deg, #f0a94a 0%, #d98a2b 45%, #c1462a 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Own the kill.
            </span>
          </h1>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.72,
              color: '#ded3bf',
              maxWidth: '540px',
              marginBottom: '18px',
            }}
          >
            SPEARFALL is a third-person survival shooter set in 8000 BC — no rifles, no scopes,
            only wobbling arrow shafts, fire-hardened spears and stone axes that chip when you
            swing them too hard. Every throw has weight, wind and consequence.
          </p>
          <p
            style={{
              fontSize: '16px',
              lineHeight: 1.7,
              color: '#a99a80',
              maxWidth: '540px',
              marginBottom: '38px',
            }}
          >
            Stylized low-poly wilderness. Patched hides, carved bone and real ownership: every
            weapon you knap and every hunter you raise is an on-chain relic you can trade, lend
            or bury with honor.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '44px' }}>
            <button
              onMouseEnter={() => setPrimaryHover(true)}
              onMouseLeave={() => setPrimaryHover(false)}
              style={{
                padding: '16px 30px',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#1a1409',
                background: primaryHover
                  ? 'linear-gradient(135deg, #f6b95c 0%, #d98a2b 100%)'
                  : 'linear-gradient(135deg, #d98a2b 0%, #b0651f 100%)',
                border: '1px solid rgba(246,185,92,0.75)',
                borderRadius: '3px',
                cursor: 'pointer',
                transform: primaryHover ? 'translateY(-3px)' : 'translateY(0)',
                boxShadow: primaryHover
                  ? '0 18px 38px rgba(217,138,43,0.38)'
                  : '0 8px 20px rgba(0,0,0,0.55)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              Claim a hunter
            </button>
            <button
              onMouseEnter={() => setSecondaryHover(true)}
              onMouseLeave={() => setSecondaryHover(false)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '16px 26px',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: secondaryHover ? '#f4eee2' : '#ded3bf',
                background: secondaryHover ? 'rgba(232,220,196,0.08)' : 'transparent',
                border: '1px solid',
                borderColor: secondaryHover ? 'rgba(232,220,196,0.5)' : 'rgba(232,220,196,0.22)',
                borderRadius: '3px',
                cursor: 'pointer',
                transform: secondaryHover ? 'translateY(-3px)' : 'translateY(0)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7L8 5z" />
              </svg>
              Watch the hunt
            </button>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '32px',
              paddingTop: '26px',
              borderTop: '1px solid rgba(232,220,196,0.12)',
            }}
          >
            {PROOF.map((item) => (
              <div key={item.id}>
                <div
                  style={{
                    fontFamily: "'Cinzel', Georgia, serif",
                    fontSize: '26px',
                    fontWeight: 700,
                    color: '#f4eee2',
                    lineHeight: 1.1,
                  }}
                >
                  {item.value}
                </div>
                <div
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: '#a99a80',
                    marginTop: '4px',
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            position: 'relative',
            animation: 'fadeIn 1.1s ease both',
          }}
        >
          <div
            style={{
              position: 'relative',
              padding: '26px',
              background: 'linear-gradient(160deg, #241e17 0%, #17130f 100%)',
              border: '1px solid rgba(232,220,196,0.14)',
              borderRadius: '10px',
              boxShadow: '0 32px 70px rgba(0,0,0,0.65), inset 0 1px 0 rgba(232,220,196,0.08)',
              animation: 'drift 9s ease-in-out infinite',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '18px',
              }}
            >
              <span
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.24em',
                  textTransform: 'uppercase',
                  color: '#a99a80',
                }}
              >
                Relic inspection
              </span>
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  color: '#a8c088',
                }}
              >
                ON-CHAIN · VERIFIED
              </span>
            </div>

            <div
              style={{
                height: '250px',
                borderRadius: '8px',
                background:
                  'linear-gradient(180deg, #3b3021 0%, #241d15 55%, #191510 100%)',
                border: '1px solid rgba(232,220,196,0.1)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'conic-gradient(from 210deg at 50% 120%, rgba(217,138,43,0.28), transparent 40%)',
                }}
              />
              <svg width="150" height="190" viewBox="0 0 150 190" fill="none">
                <polygon points="75,8 96,52 75,74 54,52" fill="#cfc3a6" stroke="#8a7c60" strokeWidth="2" />
                <polygon points="75,8 96,52 75,74" fill="#a99a80" />
                <rect x="70" y="70" width="10" height="112" fill="#6b4f30" stroke="#4a3620" strokeWidth="2" />
                <path d="M62 96 L88 90" stroke="#c1462a" strokeWidth="5" strokeLinecap="round" />
                <path d="M62 112 L88 106" stroke="#86a06a" strokeWidth="5" strokeLinecap="round" />
                <path d="M64 140 L86 134" stroke="#cfc3a6" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>

            <div style={{ marginTop: '20px' }}>
              <div
                style={{
                  fontFamily: "'Cinzel', Georgia, serif",
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#f4eee2',
                }}
              >
                Ashthrower of the Reed Clan
              </div>
              <div style={{ fontSize: '13px', color: '#a99a80', marginTop: '4px' }}>
                Fire-hardened ash shaft · flint tip · sinew wrap · 3 kills from tempering
              </div>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginTop: '16px',
                }}
              >
                {['Throw +14%', 'Durability 71/100', 'Tribe-bound', 'Tradeable'].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: '5px 10px',
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      color: '#e8dcc4',
                      background: 'rgba(232,220,196,0.07)',
                      border: '1px solid rgba(232,220,196,0.16)',
                      borderRadius: '2px',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}