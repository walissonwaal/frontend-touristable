import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'TouristTable',
  description: '...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className='gridContainer bg-white dark:bg-zinc-800 dark:text-primaryWhite'>
        <Header />
        <main className='mainContent px-6 dark:bg-primaryBlack dark:text-primaryWhite'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
