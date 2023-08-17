import { useRef, useState } from 'react';

export const Counter = () => {
	const [cantWords, setCantWords] = useState(0);
	const [cantCharacters, setCantCharacters] = useState(0);
	const [cantSpaces, setCantSpaces] = useState(0);
	const [cantWhitSpaces, setCantWhitSpaces] = useState(0);
	const content = useRef<any | null>();

	const handleCountWords = () => {
		if (content.current === null) {
			return;
		}
		const arrayWords = content.current.value
			.split(' ')
			.filter(
				(word: string) => word !== '' && word !== '\n' && word !== ' ',
			);
		setCantWords(arrayWords.length);
	};

	const handleCountCharacters = () => {
		if (content.current === null) {
			return;
		}
		content.current &&
			setCantCharacters(content.current.value.replace(/\s/g, '').length);
	};

	const handleCountCharactersWhitSpaces = () => {
		if (content.current === null) {
			return;
		}
		content.current && setCantWhitSpaces(content.current.value.length);
	};

	const handleCountSpaces = () => {
		if (content.current === null) {
			return;
		}
		content.current &&
			setCantSpaces(content.current.value.split(' ').length - 1);
	};

	return (
		<div className=''>
			<textarea
				name='content'
				id=''
				cols={15}
				rows={5}
				ref={content}
				className='border-2 border-gray-300 font-body text-lg rounded-md p-2 w-full resize-none'
				placeholder='write here...'
				onChange={() => {
					handleCountWords();
					handleCountCharacters();
					handleCountSpaces();
					handleCountCharactersWhitSpaces();
				}}></textarea>
			<div className='flex flex-row flex-wrap gap-5 my-4'>
				<span className='text-white font-titles text-xl'>
					cant words:{' '}
					<span className='bg-complementary p-2 rounded-md text-base'>
						{cantWords}
					</span>{' '}
				</span>
				<span className='text-white font-titles text-xl'>
					cant characters:{' '}
					<span className='bg-complementary p-2 rounded-md text-base'>
						{cantCharacters}
					</span>
				</span>
				<span className='text-white font-titles text-xl'>
					cant characters without spaces:{' '}
					<span className='bg-complementary p-2 rounded-md text-base'>
						{cantSpaces}
					</span>
				</span>
				<span className='text-white font-titles text-xl'>
					cant characters with spaces:{' '}
					<span className='bg-complementary p-2 rounded-md text-base'>
						{cantWhitSpaces}
					</span>
				</span>
			</div>
		</div>
	);
};
