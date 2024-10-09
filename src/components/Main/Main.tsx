'use client';

import { useState, useEffect } from 'react';
import Search from './Search';
import User from './User';
import axios from 'axios';

const Main = () => {
	const [user, setUser] = useState(null);
	const [isError, setIsError] = useState(true);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const getOctocat = async () => {
			setIsError(false);
			setIsLoading(true);

			try {
				const res = await axios.get('https://api.github.com/users/octocat');
				setUser(res.data);
				console.log(res.data);
				setIsLoading(false);
			} catch (error) {
				console.error('Error fetching GitHub user:', error);
				setUser(null);
				setIsError(true);
				setIsLoading(false);
			}
		};
		getOctocat();
	}, []);

	return (
		<main>
			<Search isError={isError} setUser={setUser} setIsError={setIsError} />
			<User user={user} isLoading={isLoading} />
		</main>
	);
};

export default Main;
