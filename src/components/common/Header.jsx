
import React, { useState } from 'react';
import Image1 from '../assets/images/logp.jpg';
import { HiOutlineMenuAlt1, HiViewGrid } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import { BiShoppingBag } from 'react-icons/bi';

const LinkData = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  {title: 'Contact', path: '/contact'},
   { title: 'Register', path: '/register' },
  // { title: 'Instructor', path: '/instructor' },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className='bg-white py-4 text-black sticky z-50 shadow-md top-0 left-0 w-full'>
      <div className='container flex justify-between items-center'>
        <div className='logo flex items-center gap-6'>
          <img src={Image1} alt="alt" className='h-20' />
          <div className='flex items-center gap-2'>
            <HiViewGrid size={20} />
            <span>Category</span>
          </div>
        </div>
        <nav className={`flex ${open ? 'mobile-view' : 'desktop-view'}`}>
          <ul className='flex items-center gap-6'>
            {LinkData.map((link, index) => (
              <li key={index} onClick={() => setOpen(false)}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? 'text-primary text-sm' : 'text-[15px]'
                  }
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className=" account flex items-center gap-5">
          <button>
            <BiShoppingBag size={25} />
          </button>
          <button>Login</button>{" "}
          <button className='open-menu' onClick={() => setOpen(!open)}>
            <HiOutlineMenuAlt1 size={25} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
