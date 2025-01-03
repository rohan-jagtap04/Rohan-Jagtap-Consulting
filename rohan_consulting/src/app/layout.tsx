// app/layout.tsx
import './globals.css'
import Navbar from './Navbar'
import Footer from './Footer'

export const metadata = {
  title: 'Augen-Inspired Site',
  description: 'A sample Next.js site inspired by augen.pro style.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-[url('/bg.svg')] text-gray-900 dark:bg-[#111] dark:text-gray-100">
        <Navbar />
        <main>{children}</main>
        {/* We add padding-top to avoid overlapping the floating nav. */}
        <Footer />
      </body>
    </html>
  )
}