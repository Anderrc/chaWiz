import { useEffect, useRef, useState } from 'react';
import { useStoreLocal } from '../../../shared/hooks/useStoreLocal';

export default function Counter() {
	const [cantWords, setCantWords] = useState(0);
	const [cantCharacters, setCantCharacters] = useState(0);
	const [cantSpaces, setCantSpaces] = useState(0);
	const [cantWhitSpaces, setCantWhitSpaces] = useState(0);
	const content = useRef<any | null>();
	const { getStore, setStore } = useStoreLocal();

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
		setStore('cantWords', arrayWords.length);
		setStore('content', content.current.value);
	};

	const handleCountCharacters = () => {
		if (content.current === null) {
			return;
		}
		if (content.current) {
			setCantCharacters(content.current.value.replace(/\s/g, '').length);
			setStore(
				'cantCharacters',
				content.current.value.replace(/\s/g, '').length,
			);
			setStore('content', content.current.value);
		}
	};

	const handleCountCharactersWhitSpaces = () => {
		if (content.current === null) {
			return;
		}
		if (content.current) {
			setCantWhitSpaces(content.current.value.length);
			setStore('cantWhitSpaces', content.current.value.length);
			setStore('content', content.current.value);
		}
	};

	const handleCountSpaces = () => {
		if (content.current === null) {
			return;
		}
		if (content.current) {
			setCantSpaces(content.current.value.split(' ').length - 1);
			setStore('cantSpaces', content.current.value.split(' ').length - 1);
			setStore('content', content.current.value);
		}
	};

	useEffect(() => {
		getStore('cantSpaces');
		setCantSpaces(getStore('cantSpaces'));
		setCantWhitSpaces(getStore('cantWhitSpaces'));
		setCantCharacters(getStore('cantCharacters'));
		setCantWords(getStore('cantWords'));
		content.current.value = getStore('content');
	}, []);

	return (
		<div className=''>
			<h1 className='font-bold text-white font-titles text-3xl'>
				Counter
			</h1>
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
}
