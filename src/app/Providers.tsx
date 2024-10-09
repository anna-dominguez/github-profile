'use client';

import { ThemeProvider } from 'next-themes';

const Providers = ({ children }) => {
	return (
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
			{children}
		</ThemeProvider>
	);
};
export default Providers;
