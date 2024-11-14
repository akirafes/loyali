import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: {
        template: '%s | Loyali Dashboard',
        default: 'Loyali Dashboard',
    },
    description: 'The official Loyali POC web application.',
    metadataBase: new URL('https://loyali.vercel.app'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
      <head>
          <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96"/>
          <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
          <link rel="shortcut icon" href="/favicon.ico"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <meta name="apple-mobile-web-app-title" content="Loyali"/>
          <link rel="manifest" href="/site.webmanifest"/>
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
      </html>
  );
}
