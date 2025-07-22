import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import localFont from 'next/font/local'
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

const redotpay = localFont({
    src: [
        {
            path: '../../public/fonts/Redotpay-Regular.otf',
            weight: '400',
            style: 'normal'
        },
        {
            path: '../../public/fonts/Redotpay-Bold.otf',
            weight: '700',
            style: 'normal'
        }
    ],
    variable: '--font-redotpay',
    display: 'swap'
})

export const metadata: Metadata = {
    title: 'MP Chat App',
    description: 'The Next Generation of Conversation'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${poppins.variable} ${redotpay.variable}`}>
                <ClientRoot>{children}</ClientRoot>
            </body>
        </html>
    )
}
