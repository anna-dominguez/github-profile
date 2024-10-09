'use client';
import React, { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

interface ProvidersProps {
	children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
	return (
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
			{children}
		</ThemeProvider>
	);
};
export default Providers;
