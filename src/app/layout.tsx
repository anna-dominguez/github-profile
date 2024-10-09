import type { Metadata } from 'next';
import { Space_Mono } from 'next/font/google';

import Providers from './Providers';
import './globals.css';

const space_mono = Space_Mono({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-mono',
	weight: ['400', '700'],
});

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${space_mono.variable} antialiased font-[family-name:var(--font-mono)] min-h-screen flex justify-center w-screen`}
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
