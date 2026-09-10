import { ImageResponse } from 'next/og';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-static';

export const size = {
  width: 48,
  height: 48,
};
export const contentType = 'image/png';

export default function Icon() {
  const logoData = fs.readFileSync(path.join(process.cwd(), 'public/icon-48.png'));
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
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} width={48} height={48} alt="" />
      </div>
    ),
    {
      ...size,
    }
  );
}
