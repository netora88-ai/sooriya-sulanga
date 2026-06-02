import './globals.css'
import React from 'react'
import Providers from './providers'

export const metadata = {
  title: 'Sooriya Sulanga — Film',
  description: 'A portfolio page for the Sinhala film Sooriya Sulanga',
}

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en">
      <body>
        <Providers>
          <main className="min-h-screen">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
