import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Gaurav Singh - Frontend Engineer';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
          color: 'white',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Gradient circles background */}
        <div
          style={{
            position: 'absolute',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'rgba(6, 182, 212, 0.15)',
            top: '-100px',
            right: '-100px',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'rgba(139, 92, 246, 0.1)',
            bottom: '-50px',
            left: '-50px',
          }}
        />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <h1
            style={{
              fontSize: '80px',
              margin: '0 0 20px 0',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-2px',
            }}
          >
            Gaurav Singh
          </h1>

          <h2
            style={{
              fontSize: '48px',
              margin: '0 0 40px 0',
              fontWeight: '600',
              color: '#e0e7ff',
              letterSpacing: '0.5px',
            }}
          >
            Frontend Engineer & Full Stack Developer
          </h2>

          <p
            style={{
              fontSize: '32px',
              margin: '0',
              color: '#94a3b8',
              fontWeight: '500',
            }}
          >
            React • Next.js • TypeScript • Web Development
          </p>
        </div>

        {/* Bottom accent bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: 'linear-gradient(90deg, #06b6d4, #8b5cf6, #ec4899)',
          }}
        />
      </div>
    ),
    {
      ...size,
    },
  );
}
