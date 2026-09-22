import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Al-Mamlakah W.L.L. | Premium Halal Meat for the GCC',
  description: 'A Pakistan-to-GCC partnership delivering premium halal meat with integrity, traceability, and world-class standards.',
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
