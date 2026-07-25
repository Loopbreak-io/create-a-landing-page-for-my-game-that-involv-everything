import React, { useState } from 'react';

export default function CTA() {
  const [primaryHover, setPrimaryHover] = useState(false);
  const [secondaryHover, setSecondaryHover] = useState(false);
  const [email, setEmail] = useState('');
  const [focused, setFocused] = useState(false);
  const [joined, setJoined] = useState(false);

  const handleJoin = () => {
    if (email.trim().length > 3) {
      setJoined(true);
    }
  };

  return (
    <section
      id="ledger"
      style={{
        position: 'relative',
        padding: '96px 20px',
        overflow: 'hidden',
        background:
          'linear-gradient(135deg, #d98a2b 0%, #b8641f 48%, #93401f 100%)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.22,
          backgroundImage:
            'repeating-linear-gradient(45deg, rgba(26,20,9,0.5) 0px, rgba(26,20,9,0.5) 2px, transparent 2px, transparent 12px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: '-90px',
          bottom: '-90px',
          width: '340px',
          height: '340px',
          background: 'radial-gradient(circle, rgba(26,20,9,0.35) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          maxWidth: '1040px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            padding: '7px 14px',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            color: '#1a1409',
            background: 'rgba(26,20,9,0.14)',
            border: '1px solid rgba(26,20,9,0.35)',
            borderRadius: '2px',
            marginBottom: '24px',
          }}
        >
          Wave 3 keys drop at the next full moon
        </span>
        <h2
          style={{
            fontSize: 'clamp(32px, 4.6vw, 54px)',
            fontWeight: 900,
            lineHeight: 1.08,
            color: '#1a1409',
            marginBottom: '18px',
            textShadow: '0 2px 0 rgba(255,255,255,0.12)',
          }}
        >
          The herd moves at dawn.
          <br />
          Be holding a spear when it does.
        </h2>
        <p
          style={{
            fontSize: '18px',
            lineHeight: 1.7,
            color: '#2b1d0c',
            maxWidth: '620px',
            margin: '0 auto 36px',
          }}
        >
          Join the Long Winter playtest, claim your founding hunter and carve the first relics
          of your clan before the valley fills.
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '14px',
            justifyContent: 'center',
            marginBottom: '34px',
          }}
        >
          <button
            onMouseEnter={() => setPrimaryHover(true)}
            onMouseLeave={() => setPrimaryHover(false)}
            style={{
              padding: '17px 34px',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#f6e6c8',
              background: primaryHover ? '#231a0c' : '#1a1409',
              border: '1px solid rgba(26,20,9,0.9)',
              borderRadius: '3px',
              cursor: 'pointer',
              transform: primaryHover ? 'translateY(-3px)' : 'translateY(0)',
              boxShadow: primaryHover
                ? '0 18px 34px rgba(26,20,9,0.45)'
                : '0 8px 18px rgba(26,20,9,0.3)',
              transition: 'all 0.28s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            Claim founding hunter
          </button>
          <button
            onMouseEnter={() => setSecondaryHover(true)}
            onMouseLeave={() => setSecondaryHover(false)}
            style={{
              padding: '17px 30px',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#1a1409',
              background: secondaryHover ? 'rgba(255,255,255,0.28)' : 'transparent',
              border: '1px solid rgba(26,20,9,0.55)',
              borderRadius: '3px',
              cursor: 'pointer',
              transform: secondaryHover ? 'translateY(-3px)' : 'translateY(0)',
              transition: 'all 0.28s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            Read the relic litepaper
          </button>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder="hunter@yourclan.io"
            style={{
              width: '300px',
              maxWidth: '100%',
              padding: '14px 16px',
              fontSize: '15px',
              color: '#1a1409',
              background: 'rgba(255,255,255,0.82)',
              border: '1px solid',
              borderColor: focused ? '#1a1409' : 'rgba(26,20,9,0.4)',
              borderRadius: '3px',
              outline: 'none',
              transition: 'border-color 0.2s ease',
            }}
          />
          <button
            onClick={handleJoin}
            style={{
              padding: '14px 22px',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#1a1409',
              background: '#f6e6c8',
              border: '1px solid rgba(26,20,9,0.6)',
              borderRadius: '3px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {joined ? 'Marked on the wall' : 'Send me a key'}
          </button>
        </div>
        <p style={{ fontSize: '12.5px', color: '#3a2711', marginTop: '14px' }}>
          {joined
            ? 'Your name is carved. Watch for a raven at the next full moon.'
            : 'One message per drop. No smoke signals, no spam.'}
        </p>
      </div>
    </section>
  );
}