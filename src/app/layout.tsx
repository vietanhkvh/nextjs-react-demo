import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Summary for Nextjs',
  description: '5 minius for learning Nextjs',
};

interface IRootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<IRootLayoutProps> = ({ children }) => {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
};
export default RootLayout;
