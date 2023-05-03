import React from 'react';
import './globals.css';

export const metadata = {
    title: 'ERA_news',
    description: 'Generated ERA_news_app by create next app',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <div>
                    {children}
                </div>
            </body>
        </html >
    );
}
