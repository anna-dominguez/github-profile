import Image from 'next/image';
import { useState } from 'react';
import axios from 'axios';
import IconSearch from '../../../public/images/icon-search.svg';

interface SearchProps {
	isError: boolean;
	setUser: (user: any) => void;
	setIsError: (value: boolean) => void;
}

const Search = ({ isError, setUser, setIsError }: SearchProps) => {
	const [username, setUsername] = useState('');

	const handleSubmit = async () => {
		setIsError(false);

		try {
			const res = await axios.get(`https://api.github.com/users/${username}`);
			setUser(res.data);
		} catch (error) {
			setUser(null);
			setIsError(true);
		}
	};

	return (
		<section className="search flex shadow-[0_16px_30px_-10px_rgba(70,96,187,0.2)] dark:shadow-none">
			<div className="my-5 w-5 h-5 md:w-6 md:h-6 relative">
				<Image src={IconSearch} alt="Search icon" />
			</div>
			<input
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				type="text"
				className="grow focus:outline-none placeholder-white text-headingS md:text-[18px] cursor-pointer self-stretch dark:bg-darkBlue focus:border-none placeholder:text-greyBlue dark:placeholder:text-white"
				placeholder="Search GitHub username…"
			/>
			{isError && <div className="text-red-500">No results</div>}
			<button
				onClick={handleSubmit}
				className="bg-blue px-4 md:px-6 py-3 rounded-[10px] text-white hover:bg-[#60ABFF]"
			>
				Search
			</button>
		</section>
	);
};

export default Search;
