import React from 'react';
import './globals.css';
import { Metadata } from 'next';
import Header from '../components/Header';
import Providers from '@/components/Providers';

export const metadata: Metadata = {
    title: 'ERA_news',
    description: 'Generated ERA_news_app by create next app',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html>
            <body className='bg-gray-100 dark:bg-zinc-900 transition-all duration-700'>
                <Providers>
                    < Header />
                    <div className='max-w-6xl mx-auto'>
                        {children}
                    </div>
                </Providers>
            </body>
        </html >
    );
}
