import { useState } from 'react';
import logo from '../assets/logo.png';
import './Navbar.css';
import '../App.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='navbar ml-[135px] mr-[129px]'>
            <div className="container flex justify-between">
                <div className='logo flex pt-9 pb-9'>
                    <img className='main-logo sm:' src={logo} alt="Dental Demo Logo" />
                    <span className='dental-demo font-extrabold mt-1 ml-2 flex-nowrap sm:text-xs md:text-xs lg:text-xl xl:text-xl '>Dental Demo</span>
                </div>
                <div className='block'>
                    <button className="md:hidden focus:outline-none flex justify-center items-center mt-8" onClick={toggleMenu}>
                        <svg className="menu-bar  h-6 fill-current " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z" />
                        </svg>
                    </button>
                    <ul className={`nav-link ${isMenuOpen ? 'block' : 'hidden'} md:flex gap-16 ml-16 p-9`}>
                        <li>Home</li>
                        <li className='links'>About Us</li>
                        <li className='links'>Our Services</li>
                        <li className='links'>Contact</li>
                    </ul>
                </div>
                <div className='p-6'>
    <button className='contact-button hidden lg:inline-block border p-3 rounded-full text-white bg-blue-500 hover:bg-blue-300 transition-colors duration-300 cursor-pointer'>
        Contact us
    </button>
</div>

            </div>
        </div>
    );
};

export default Navbar;


