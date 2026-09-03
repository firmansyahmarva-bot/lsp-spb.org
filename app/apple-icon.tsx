import { ImageResponse } from 'next/og';

export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #059669 0%, #064e3b 100%)',
          borderRadius: '36px',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            fontSize: '80px',
            fontWeight: 900,
            letterSpacing: '-3px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          K3
        </div>
        <div
          style={{
            fontSize: '16px',
            fontWeight: 700,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            opacity: 0.9,
            marginTop: '-6px',
          }}
        >
          PELATIHAN
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
