import { Inter } from 'next/font/google';
import './globals.css';
import Providers from '@/redux/StoreProvider';
import { Toaster } from 'react-hot-toast';
import Getuser from '@/lib/GetUser';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Grovyo Ads',
  description: 'Created By Grovyo Platforms Pvt. Ltd.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="stylesheet" href={inter.stylesheet} />
      </head>
      <body className={inter.className}>
        <Providers>
          {children}
          <Getuser/>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
