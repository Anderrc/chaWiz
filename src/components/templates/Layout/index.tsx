import { NavLink, Outlet } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import linkedin from '../../../assets/icons8-linkedin-48.png';
import github  from '../../../assets/icons8-github-48.png';

export const Layout = () => {
	return (
		<div className='flex flex-col min-h-screen bg-background  overflow-auto'>
			<header className='bg-primary py-2 px-2'>
				<nav className='container mx-auto flex items-center gap-3'>
					<div className='bg-white p-3 rounded-xl w-[50px] flex justify-center items-center'>
						<img
							src={logo}
							width={40}
							height={40}
							alt='logo-chawiz'></img>
					</div>
					<li className='list-none'>
						<NavLink
							to='/'
							className='text-white font-bold font-titles no-underline hover:shadow-lg '>
							Counter
						</NavLink>
					</li>
					<li className='list-none'>
						<NavLink
							to='/compare'
							className='text-white font-bold font-titles no-underline hover:shadow-lg '>
							Comparar
						</NavLink>
					</li>
				</nav>
			</header>

			<main className=' flex-grow overflow-auto p-4'>
				<Outlet />
			</main>

			<footer className='bg-primary py-4'>
				<div className='container justify-center mx-auto text-center text-gray-300'>
					<p className='font-subtitle text-white'>
						Desarrollado por Anderson Castaño{' '}
					</p>
					<p className='mx-auto w-[48px] h-[48px]'>
						<a
							href='https://www.linkedin.com/in/andercc/'
							target='_blank'
							rel='noopener noreferrer'>
							<img src={linkedin} alt='Logo de red social' />
						</a>
					</p>

					<p className='mx-auto w-[48px] h-[48px]'>
						<a
							href='https://github.com/Anderrc'
							target='_blank'
							rel='noopener noreferrer'>
							<img src={github} alt='Logo de github' />
						</a>
					</p>
				</div>
			</footer>
		</div>
	);
};
