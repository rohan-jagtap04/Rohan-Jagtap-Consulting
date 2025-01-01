// src/app/layout.tsx
import './globals.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { ThemeProvider } from 'next-themes'

export const metadata = {
  title: 'My Parallax Scrollytelling E-commerce Site',
  description: 'An advanced Next.js portfolio site with parallax, scrollytelling, and theme toggles.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* 
        Notice: We do NOT force any class on <html> here;
        next-themes will handle it automatically 
      */}
      <body>
        {/* Provide defaultTheme="system" to sync with user system */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {/* We’ll keep the main container as before or with your styling */}
          <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}