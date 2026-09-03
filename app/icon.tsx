import { ImageResponse } from 'next/og';

export const size = {
  width: 48,
  height: 48,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #059669 0%, #064e3b 100%)',
          borderRadius: '10px',
          color: 'white',
          fontWeight: 900,
          fontSize: '22px',
          fontFamily: 'sans-serif',
          letterSpacing: '-1px',
          boxShadow: 'inset 0 0 0 2px rgba(255, 255, 255, 0.25)',
        }}
      >
        K3
      </div>
    ),
    {
      ...size,
    }
  );
}
