import { ImageResponse } from '@vercel/og'

export const config = {
    runtime: 'experimental-edge',
}

export default function (req) {
    const { protocol, host } = new URL(req.url);
    console.log("Protocol:", protocol, "\nHost:", host);

    return new ImageResponse( 
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 128,
                    background: '#C0DFFC',
                }}
            >
                {
                    <img src={`${protocol}//${host}/_next/image?url=/assets/preview.png&w=1080&q=75`} alt="athulrajagopal.dev homepage" style={{ objectFit: 'cover' }} />
                }
            </div>
        ),
        {
            width: 1080
        }
    )
}