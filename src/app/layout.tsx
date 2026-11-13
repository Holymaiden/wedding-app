import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { LangProvider, LocalizationProvider } from '@/locales';
import { Toaster } from 'sonner';
import { Analytics } from '@vercel/analytics/next';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'The Wedding Invitation',
  description:
    'Join us in celebrating the auspicious union of love and togetherness. Discover our wedding details, and more.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <LangProvider>
          <LocalizationProvider>
            {children}
            <Toaster />
          </LocalizationProvider>
        </LangProvider>

        <Analytics />
      </body>
    </html>
  );
}
