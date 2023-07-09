import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import { menus } from '@/data/menuData';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import ImportContactsRoundedIcon from '@mui/icons-material/ImportContactsRounded';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import Link from 'next/link';

const Navbar: React.FC<any> = ({ active }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isSelected, setIsSelected] = useState<string>('Home')

  const toggleIsOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className='w-full z-50 bg-primary fixed lg:flex lg:flex-row lg:items-center lg:justify-between lg:border-b lg:border-b-border lg:px-10'>
      <nav className={`lg:mx-auto lg:flex-1 flex flex-row items-center justify-between px-7 py-1 border-b border-b-border lg:border-none`}>
        <Image 
          src={`/logo/logo-full-cc.png`}
          width={100}
          height={70}
          alt={`Logo Candidate College`}
          title={`Logo Candidate College`}
          className={`block w-[150px] h-[100px] lg:h-[80px] object-contain`}
          loading="lazy"
        />
        <span onClick={(e) => toggleIsOpen()} className='block lg:hidden text-2xl text-white transition-all duration-800 cursor-pointer'>{isOpen? (<CloseIcon color='inherit' fontSize='inherit' />) : (<MenuIcon color='inherit' fontSize='inherit' />)}</span>
      </nav>

      {/* Mobile Menu */}
      {
        !isOpen ? (
          <section className="hidden lg:flex flex-row w-full lg:flex-1 ">
            {
              menus.map((menu, index) => (
                <Link href={menu.link} about={menu.name} title={menu.name} key={index} className={`hover:bg-secondary hover:rounded-full px-5 py-2 duration-800 transition-all hover:text-primary ${menu.name == isSelected ? 'bg-secondary text-primary rounded-full' : 'bg-transparent text-white'}`} onClick={(e) => setIsSelected(menu.name)}>
                  <p className={`font-medium text-[15px] flex items-center justify-center`}><span>{menu.name}</span></p>
                </Link>
              ))
            }
          </section>
        ) : (
          <section className="flex flex-row w-full absolute lg:hidden">
            <article className='flex-1'></article>
            <article className="flex-1 pr-7 py-4 flex flex-col gap-3">
            {
              menus.map((menu, index) => (
                <Link href={menu.link} about={menu.name} title={menu.name} key={index} className={`bg-secondary ${isSelected == menu.name ? 'w-full px-5 py-3' : 'w-fit flex items-center justify-center px-4 py-3 self-end'} rounded-full text-primary duration-800 transition-all`} onClick={(e) => setIsSelected(menu.name)}>
                  <p className={`font-medium text-base flex items-center ${isSelected == menu.name ? 'gap-3' : 'gap-0'} justify-center`}><span>{isSelected == menu.name ? menu.name : null}</span> <span className='text-primary text-2xl'>
                    {
                      menu.name == 'Home' ? (<HomeRoundedIcon color='inherit' fontSize='inherit' />) : menu.name == 'About Us' ? (<GroupsRoundedIcon color='inherit' fontSize='inherit' />) : menu.name == 'Contact Us' ? (<LocalPhoneRoundedIcon color='inherit' fontSize='inherit' />) : menu.name == 'Articles' ? (<ImportContactsRoundedIcon color='inherit' fontSize='inherit' />) : (<AutoAwesomeRoundedIcon color='inherit' fontSize='inherit' />)
                    }
                    </span></p>
                </Link>
              ))
            }
            </article>
          </section>
        )
      }
    </header>
  )
}

export default Navbar