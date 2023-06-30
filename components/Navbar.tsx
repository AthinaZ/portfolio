"use client";
import React, { useState } from 'react';
import { Link } from 'react-scroll/modules';
import { useTheme } from 'next-themes';
import { RiMoonFill, RiSunLine } from 'react-icons/ri';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import Image from 'next/image';
import MyLogoLight from '@/public/images/MyLogoLight.png';
import MyLogoDark from '@/public/images/MyLogoDark.png';

interface NavbarItems {
  label: string
  page: string
};

const navItems: Array<NavbarItems> = [
  {
    label: 'Home',
    page: 'home'
  },
  {
    label: 'About',
    page: 'about'
  },
  {
    label: 'Projects',
    page: 'projects'
  },
];

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [navbar, setNavbar] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const isDarkTheme = theme === 'dark';

  return (
    <header className="w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className='flex items-center justify-between py-3 md:py-5 md:block'>
          <Link to="home">
              <div className="container flex items-center space-x-2">
              <Image
                src={isDarkTheme ? MyLogoDark : MyLogoLight}
                alt="Logo"
              />
            </div>
          </Link>
            <div className='md:hidden'>
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30}/> : <IoMdMenu size={30}/>}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'}`}>
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {navItems.map((item, index) => {
                    return (
                      <Link
                        key={index}
                        to={item.page}
                        className={
                          "block lg:inline-block text-neutral-900  hover:text-neutral-500 dark:text-neutral-100"
                        }
                        activeClass='active'
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        onClick={() => setNavbar(!navbar)}
                      >
                        {item.label}
                      </Link>
                    )
                  })}
              <button
                onClick={toggleTheme}
                className='bg-slate-100 p-2 rounded-xl'
              >
                {isDarkTheme ? (
                  <RiSunLine size={15} color="black" />
                ) : (
                  <RiMoonFill size={15} />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
