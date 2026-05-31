import './globals.css'
import React from 'react'

export const metadata = {
  title: 'Sooriya Sulanga — Portfolio',
  description: 'A portfolio page for the Sinhala film Sooriya Sulanga',
}

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}
