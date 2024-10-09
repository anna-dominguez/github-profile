'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

import Sun from '@/svg/Sun';
import Moon from '@/svg/Moon';

const Header = () => {
	const { systemTheme, theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	const currentTheme = theme === 'system' ? systemTheme : theme;

	return (
		<header className="flex w-full justify-between items-center font-bold">
			<h1 className="text-headingXL">devfinder</h1>
			<button
				onClick={() =>
					currentTheme == 'dark' ? setTheme('light') : setTheme('dark')
				}
				className="group flex gap-4 text-greyBlue dark:text-white dark:hover:text-[#90A4D4] hover:text-[#222731]"
			>
				<p className="tracking-[2.5px] text-headingS text-greyBlue dark:text-white group-hover:text-[#222731] dark:group-hover:text-[#90A4D4]">
					{currentTheme === 'dark' ? 'LIGHT' : 'DARK'}
				</p>
				{currentTheme === 'dark' ? (
					<Sun props="fill-white group-hover:fill-[#90A4D4]" />
				) : (
					<Moon props="fill-greyBlue group-hover:fill-[#222731]" />
				)}
			</button>
		</header>
	);
};

export default Header;
