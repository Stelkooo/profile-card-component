import './globals.css';
import { Kumbh_Sans } from 'next/font/google';

const kumbhSans = Kumbh_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Profile Card Component',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${kumbhSans.className} h-full bg-dark-cyan`}>
        {children}
      </body>
    </html>
  );
}
