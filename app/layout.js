import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import { AuthProvider } from './Providers';

const inter = Poppins({ subsets: ['latin'], weight: "300", });

export const metadata = {
  title: 'Noun Digital Bank - Credit card detecting system',
  description: 'built by dev.alexdgreat',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
