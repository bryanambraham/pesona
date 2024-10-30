import React from 'react';
import { navLinks } from '../constants';
import { styles } from '../styles';
import { logo } from '../assets';

export default function Navbar() {
  return (
    <div className="w-full fixed top-0 z-20 bg-primary">
        
        {/* Welcome to Pesona */}
        <div className="w-full bg-tertiary text-white py-2 text-center">
            <p className={`${styles.heroSubText} heartbeat`}>
                Welcome <i className="fa-regular fa-face-smile-wink" style={{color: "#ffffff"}}></i>
            </p>
        </div>

        {/* Navbar */}
        <nav className={`${styles.paddingX} max-w-7xl mx-auto flex justify-between items-center py-5`}>
            
            {/* Logo or Brand Text */}
            <div className="bg-[#fff] text-lg font-bold text-white">
                <a href="/">
                    <img className='w-[85px] h-[85px]' src={logo} alt="logo" />
                </a>
            </div>

            {/* Link */}
            <ul className="flex gap-10 list-none">
                {navLinks.map((link) => (
                    <li key={link.id} className="transition-all duration-300 ease-in hover:text-secondary cursor-pointer">
                        <a href={`#${link.id}`} className="text-lg font-medium text-white">
                            {link.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
        
    </div>
  );
}
