import React, { useState, useEffect } from 'react';

const NAV_LINKS = [
  { id: 'world', label: 'The World', href: '#world' },
  { id: 'weapons', href: '#weapons', label: 'Weapons' },
  { id: 'hunt', href: '#hunt', label: 'The Hunt' },
  { id: 'tribes', href: '#tribes', label: 'Tribes' },
  { id: 'ledger', href: '#ledger', label: 'Stone Ledger' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [ctaHover, setCtaHover] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 200,
        background: scrolled ? 'rgba(16, 14, 11, 0.9)' : 'rgba(16, 14, 11, 0.45)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: scrolled ? '1px solid rgba(232,220,196,0.14)' : '1px solid rgba(232,220,196,0.05)',
        boxShadow: scrolled ? '0 12px 34px rgba(0,0,0,0.55)' : 'none',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          padding: '14px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
        }}
      >
        <a
          href="#top"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
          }}
        >
          <span
            style={{
              width: '38px',
              height: '38px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(150deg, #2b241c 0%, #171410 100%)',
              border: '1px solid rgba(217,138,43,0.45)',
              borderRadius: '3px',
              boxShadow: 'inset 0 0 12px rgba(217,138,43,0.18)',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f0a94a" strokeWidth="1.7">
              <path d="M12 2.5l3.2 5.6-3.2 2.4-3.2-2.4L12 2.5z" />
              <path d="M12 10.5V21.5" />
              <path d="M8.4 15.2h7.2" />
            </svg>
          </span>
          <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05 }}>
            <span
              style={{
                fontFamily: "'Cinzel', Georgia, serif",
                fontWeight: 900,
                fontSize: '19px',
                letterSpacing: '0.16em',
                color: '#f4eee2',
              }}
            >
              SPEARFALL
            </span>
            <span
              style={{
                fontSize: '10px',
                letterSpacing: '0.32em',
                color: '#a99a80',
                textTransform: 'uppercase',
              }}
            >
              8000 BC
            </span>
          </span>
        </a>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '28px',
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onMouseEnter={() => setHoveredLink(link.id)}
              onMouseLeave={() => setHoveredLink(null)}
              style={{
                display: menuOpen ? 'inline-block' : 'inline-block',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: hoveredLink === link.id ? '#f0a94a' : '#ded3bf',
                paddingBottom: '3px',
                borderBottom:
                  hoveredLink === link.id ? '2px solid #f0a94a' : '2px solid transparent',
                textDecoration: hoveredLink === link.id ? 'underline' : 'none',
                textDecorationColor: '#f0a94a',
                textUnderlineOffset: '4px',
                textDecorationThickness: '2px',
                transform: hoveredLink === link.id ? 'translateY(-2px)' : 'translateY(0)',
                transition: 'all 0.28s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
<<<REPLACE_END_MARKER>>>
            >
              {link.label}
            </a>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '7px',
              padding: '7px 12px',
              border: '1px dashed rgba(134,160,106,0.5)',
              borderRadius: '3px',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.18em',
              color: '#a8c088',
            }}
          >
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: '#86a06a',
                animation: 'pulse 2.2s ease-in-out infinite',
              }}
            />
            $SITE
          </span>
          <button
            onMouseEnter={() => setCtaHover(true)}
            onMouseLeave={() => setCtaHover(false)}
            onClick={() => setMenuOpen((prev) => !prev)}
            style={{
              padding: '11px 20px',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#1a1409',
              background: ctaHover
                ? 'linear-gradient(135deg, #f0a94a 0%, #d98a2b 100%)'
                : 'linear-gradient(135deg, #d98a2b 0%, #b96c23 100%)',
              border: '1px solid rgba(240,169,74,0.7)',
              borderRadius: '3px',
              cursor: 'pointer',
              transform: ctaHover ? 'translateY(-2px)' : 'translateY(0)',
              boxShadow: ctaHover
                ? '0 12px 26px rgba(217,138,43,0.35), 0 0 0 1px rgba(240,169,74,0.4)'
                : '0 6px 16px rgba(0,0,0,0.5)',
              transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {menuOpen ? 'Wallet Linked' : 'Bind Wallet'}
          </button>
        </div>
      </div>
    </nav>
  );
}