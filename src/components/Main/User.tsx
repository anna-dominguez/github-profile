import React from 'react';

import Location from '@/svg/Location';
import Company from '@/svg/Company';
import Twitter from '@/svg/Twitter';
import Website from '@/svg/Website';

interface UserProps {
	isLoading: boolean;
	user: {
		avatar_url: string;
		login: string;
		bio: string;
		name: string;
		created_at: string;
		public_repos: string;
		followers: string;
		following: string;
		location: string;
		website: string;
		company: string;
		twitter_username: string;
	};
}

const User = ({ user, isLoading }: UserProps) => {
	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		console.log(date);
		return date.toLocaleDateString('en-GB', {
			day: 'numeric',
			month: 'short',
			year: 'numeric',
		});
	};

	return (
		<article className="bg-lightestGrey dark:bg-darkBlue rounded-[15px] flex p-8 w-full shadow-[0_16px_30px_-10px_rgba(70,96,187,0.2)] dark:shadow-none">
			{isLoading && <div>LOADING...</div>}
			{!isLoading && !user && <div>No user found</div>}
			{user && (
				<div className="flex gap-8 w-full">
					<div className="w-24 h-24 relative">
						<img
							src={user.avatar_url}
							alt={`${user.login}'s avatar`}
							className="rounded-full"
						/>
					</div>
					<div className="flex flex-col w-full gap-6">
						<div className="flex flex-col gap-2">
							<div className="flex flex-col sm:flex-row justify-between sm:items-center">
								<h2 className="text-2xl font-bold">{user.name}</h2>
								<p>Joined {formatDate(user.created_at)}</p>
							</div>
							<p className="text-blue">@{user.login}</p>
						</div>
						<p>{user.bio || 'This profile has no bio'}</p>
						<div className="flex text-center sm:text-left justify-between bg-lightGrey dark:bg-almostDark rounded-[10px] px-6 py-4">
							<div>
								<p>Repos</p>
								<h2 className="font-bold text-headingL">{user.public_repos}</h2>
							</div>
							<div>
								<p>Followers</p>
								<h2 className="font-bold text-headingL">{user.followers}</h2>
							</div>
							<div>
								<p>Following</p>
								<h2 className="font-bold text-headingL">{user.following}</h2>
							</div>
						</div>
						<div className="grid sm:grid-cols-2 gap-4">
							<div
								className={`flex gap-4 items-center ${
									!user.location ? 'opacity-50' : ''
								}`}
							>
								<Location props="fill-greyBlue dark:fill-white" />
								<p>{user.location || 'Not Available'}</p>
							</div>
							<div
								className={`flex gap-4 items-center ${
									!user.website ? 'opacity-50' : ''
								}`}
							>
								<Website props="fill-greyBlue dark:fill-white" />
								<p>{user.website || 'Not Available'}</p>
							</div>
							<div
								className={`flex gap-4 items-center ${
									!user.twitter_username ? 'opacity-50' : ''
								}`}
							>
								<Twitter props="fill-greyBlue dark:fill-white" />
								<p>{user.twitter_username || 'Not Available'}</p>
							</div>
							<div
								className={`flex gap-4 items-center ${
									!user.company ? 'opacity-50' : ''
								}`}
							>
								<Company props="fill-greyBlue dark:fill-white" />
								<p>{user.company || 'Not Available'}</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</article>
	);
};

export default User;
