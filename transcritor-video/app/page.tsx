import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Transcritor de Vídeos do Google Drive',
  description: 'Extraia áudio e transcreva vídeos do Google Drive',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}