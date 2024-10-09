import Image from 'next/image';
import Header from '@/components/Header';
import Main from '@/components/Main/Main';

export default function Home() {
	return (
		<div className="flex flex-col max-w-[730px] w-full">
			<Header />
			<section className="flex flex-col gap-4">
				<Main />
			</section>
		</div>
	);
}
