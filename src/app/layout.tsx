import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import ClientRoot from '@/components/ClientRoot'

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800']
})

const poppins = Poppins({
    variable: '--font-poppins',
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
    title: 'MP Chat App',
    description: 'The Next Generation of Conversation'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${poppins.variable}`}>
                <ClientRoot>{children}</ClientRoot>
            </body>
        </html>
    )
}
