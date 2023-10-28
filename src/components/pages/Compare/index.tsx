import { useEffect, useState } from 'react';
import './index.css';
import { useStoreLocal } from '../../../shared/hooks/useStoreLocal';

const CompareTexts = () => {
	const [text1, setText1] = useState('');
	const [text2, setText2] = useState('');

	const { getStore, setStore } = useStoreLocal();

	useEffect(() => {
		setText1(getStore('text1'));
		setText2(getStore('text2'));
	}, []);

	return (
		<div className='container mx-auto '>
			<h1 className='font-bold text-white font-titles text-3xl'>
				Compare Text
			</h1>
			<div className='grid grid-cols-2 gap-4'>
				<div className='flex flex-col gap-2'>
					<h2 className='text-lg font-bold mb-2 text-white'>
						Texto 1
					</h2>
					<div className='relative h-full'>
						<textarea
							value={text1}
							onChange={e => {
								setText1(e.target.value);
								setStore('text1', e.target.value);
							}}
							className='w-full h-full leading-6 font-body text-md rounded-md p-2 outline-none'
						/>
					</div>
				</div>
				<div className='flex flex-col gap-2'>
					<h2 className='text-lg font-bold mb-2 text-white'>
						Texto 2
					</h2>
					<div className='relative h-full'>
						<textarea
							value={text2}
							onChange={e => {
								setText2(e.target.value);
								setStore('text2', e.target.value);
							}}
							className='w-full h-full leading-6 font-body text-md rounded-md p-2  outline-none'
						/>
					</div>
				</div>
			</div>
			<div className='mt-4'>
				{text1 && text2 && text1 !== '' && text2 !== '' && (
					<div className='p-3 bg-white text-background rounded-md'>
						<p className='font-titles font-semibold text-md'>
							{text1 === text2 ? (
								<span className='text-green'>
									The texts are the same.
								</span>
							) : (
								<span className='text-red'>
									The texts are different.
								</span>
							)}
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default CompareTexts;
