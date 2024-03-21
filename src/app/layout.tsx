import type { Metadata } from 'next';
import '@fontsource-variable/nunito';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ranker',
  description: 'An app for making ranked lists using 1 on 1 comparisons',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
