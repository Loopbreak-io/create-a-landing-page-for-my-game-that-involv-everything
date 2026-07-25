import React from 'react';

export function Footer() {
  return (
    <div style={{
      padding: '40px',
      textAlign: 'center',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      color: 'white',
      minHeight: '200px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: '16px',
    }}>
      <h2 style={{ margin: 0, fontSize: '24px' }}>Footer</h2>
      <p style={{ margin: 0, opacity: 0.7 }}>Component placeholder</p>
    </div>
  );
}

export default Footer;
