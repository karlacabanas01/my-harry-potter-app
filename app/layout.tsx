import { CartProvider } from './context/useCart';
import './styles/globals.css';
import { IM_Fell_English, Cinzel_Decorative, Lato } from 'next/font/google';
import { ThemeProvider } from 'next-themes'; // 1. Importar el Provider
import { Toaster } from 'sonner';

const imFell = IM_Fell_English({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-im-fell',
  display: 'swap',
});

const cinzel = Cinzel_Decorative({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-cinzel',
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${imFell.variable} ${cinzel.variable} ${lato.variable}`}
      suppressHydrationWarning
    >
      <body
        className="
          min-h-screen flex flex-col 
          /* Colores base para modo claro (pergamino) */
          bg-[#fdf6e3] text-[#2a2a2a]
          /* Colores base para modo oscuro (noche) */
          dark:bg-[#0a0a0a] dark:text-[#e2d1c3] 
          selection:bg-[#ffd700] selection:text-black
          overflow-x-hidden transition-colors duration-500
        "
      >
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                background: '#f4e4bc', // Color pergamino
                border: '1px solid #c4a45c',
                color: '#4a3b2a',
                fontFamily: 'var(--font-im-fell)',
                borderRadius: '8px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
              },
            }}
          />
          <CartProvider>{children}</CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
