import { NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.svg'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background  overflow-auto">
      <header className="bg-primary py-2 px-2">
        <nav className="container mx-auto flex items-center gap-3">
          <div className='bg-white p-3 rounded-xl w-[50px] flex justify-center items-center'>
            <img src={logo} width={40} height={40} alt='logo-chawiz'></img>
          </div>
          <li className="list-none">
            <NavLink to="/" className="text-white font-bold font-titles no-underline hover:shadow-lg ">
              Counter
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink to="/compare" className="text-white font-bold font-titles no-underline hover:shadow-lg ">
              Comparar
            </NavLink>
          </li>
        </nav>
      </header>

      <main className=" flex-grow overflow-auto p-4">{children}</main>

      <footer className="bg-primary py-4">
        <div className="container mx-auto text-center text-gray-300">
          <p className="font-">Footer</p>
        </div>
      </footer>
    </div>
  );
};