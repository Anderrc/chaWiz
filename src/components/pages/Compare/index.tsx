import { useState } from 'react';
import './index.css';

const CompareTexts = () => {
	const [text1, setText1] = useState('');
	const [text2, setText2] = useState('');

	// const compareTexts = () => {
	// 	const lines1 = text1.split('\n');
	// 	const lines2 = text2.split('\n');

	// 	const maxLength = Math.max(lines1.length, lines2.length);

	// 	const comparedTexts = [];

	// 	for (let i = 0; i < maxLength; i++) {
	// 		const line1 = lines1[i] || '';
	// 		const line2 = lines2[i] || '';

	// 		const className =
	// 			line1 === line2
	// 				? 'text-green'
	// 				: line1.trim() === line2.trim()
	// 				? 'text-yellow'
	// 				: 'text-red';

	// 		comparedTexts.push(
	// 			<div
	// 				key={i}
	// 				className={`grid grid-cols-2 p-2 gap-2 items-center border-b-1 border-primary ${className} `}>
	// 				<div className='flex overflow-auto border-primary'>
	// 					<span className='font-mono w-3 text-xs mr-3 text-primary'>
	// 						{i + 1}
	// 					</span>
	// 					<div className='w-full resize-none'>{line1}</div>
	// 				</div>
	// 				<div className='flex overflow-auto'>
	// 					<span className='font-mono w-3 text-xs mr-3 text-primary'>
	// 						{i + 1}
	// 					</span>
	// 					<div className='w-full resize-none'>{line2}</div>
	// 				</div>
	// 			</div>,
	// 		);
	// 	}

	// 	return comparedTexts;
	// };

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
						{/* <div className='line-numbers flex flex-col text-background  rounded-md'>
							{text1.split('\n').map((_, i) => (
								<span
									key={i}
									className='line-number leading-6 font-medium text-base text-yellow'>
									{i + 1}
								</span>
							))}
						</div> */}
						<textarea
							value={text1}
							onChange={e => setText1(e.target.value)}
							className='w-full h-full leading-6 font-body text-md rounded-md p-2 resize-none outline-none'
						/>
					</div>
				</div>
				<div className='flex flex-col gap-2'>
					<h2 className='text-lg font-bold mb-2 text-white'>
						Texto 2
					</h2>
					<div className='relative h-full'>
						{/* <div className='line-numbers flex flex-col text-background  rounded-md'>
							{text1.split('\n').map((_, i) => (
								<span
									key={i}
									className='line-number leading-6 font-medium text-base text-yellow'>
									{i + 1}
								</span>
							))}
						</div> */}
						<textarea
							value={text2}
							onChange={e => setText2(e.target.value)}
							className='w-full h-full leading-6 font-body text-md rounded-md p-2 resize-none outline-none'
						/>
					</div>
				</div>
			</div>
			<div className='mt-4'>
				{text1 !== '' && text2 !== '' && (
					<div className='p-3 bg-white text-background rounded-md'>
						<p className='font-titles font-semibold text-md'>
							{text1 === text2
								? 'Los textos son iguales'
								: 'Los textos son diferentes'}
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default CompareTexts;
