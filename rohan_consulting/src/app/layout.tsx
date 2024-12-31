import './globals.css'
import Navbar from './Navbar'
import Footer from './Footer'

export const metadata = {
  title: 'My Aesthetic E-commerce Portfolio',
  description: 'A visually stunning e-commerce portfolio site built with Next.js & Tailwind CSS'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 md:px-8 py-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}