import { ImageResponse } from 'next/og';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-static';

export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

export default function AppleIcon() {
  const logoData = fs.readFileSync(path.join(process.cwd(), 'public/apple-touch-icon.png'));
  const base64 = logoData.toString('base64');
  const src = `data:image/png;base64,${base64}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'white',
          borderRadius: '36px',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} width={160} height={160} alt="" />
      </div>
    ),
    {
      ...size,
    }
  );
}
