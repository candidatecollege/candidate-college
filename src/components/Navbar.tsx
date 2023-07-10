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
import { contactUsSectionOnLanding, sendUsMessageSectionOnLanding } from '@/data/staticData';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';

const Navbar: React.FC<any> = ({ active }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isSelected, setIsSelected] = useState<string>('Home')
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false)
  const [isSendUsMessage, setIsSendUsMessage] = useState<boolean>(false)

  const socials = [
    { id: 1, name: 'Twitter', link: '/', component: <TwitterIcon color='inherit' fontSize='inherit' /> },
    { id: 2, name: 'Instagram', link: '/', component: <InstagramIcon color='inherit' fontSize='inherit' /> },
    { id: 3, name: 'Youtube', link: '/', component: <YouTubeIcon color='inherit' fontSize='inherit' /> },
    { id: 4, name: 'Spotify', link: '/', component: <PodcastsIcon color='inherit' fontSize='inherit' /> },
    { id: 4, name: 'Tiktok', link: '/', component: <AudiotrackIcon color='inherit' fontSize='inherit' /> },
  ]

  const toggleIsOpen = () => {
    setIsOpen(!isOpen)
  }

  const showPopUp = () => {
    setIsSelected('Contact Us')
    setIsOpen(false)
    setIsContactOpen(true)
  }

  const closePopUp = () => {
    setIsSelected('Home')
    setIsOpen(false)
    setIsSendUsMessage(false)
    setIsContactOpen(false)
  }

  const SendMessageSection = () => {
    return (
      <section className="flex flex-col gap-2 md:px-10">
        <input type='email' placeholder='Your Email' className='border border-gray rounded-2xl px-4 py-2 text-primary placeholder:text-gray' />
        <textarea placeholder='Your Message' className='border border-gray rounded-2xl px-4 py-2 text-primary placeholder:text-gray' rows={8}></textarea>
      </section>
    )
  }

  const ContactUsSection = () => {
    return (
      <section className="flex flex-row gap-10 items-center justify-center md:px-10">
        <div className="flex flex-col gap-2">
          <p className='font-medium text-white text-base'>Our Socials</p>

          <ul className='flex flex-row gap-2'>
            {
              socials.map((social, index) => (
                <Link className='text-4xl text-secondary font-normal hover:text-white duration-700 transition-all' href={social.link} title={social.name} about={social.name} key={index}>{social.component}</Link>
              ))
            }
          </ul>
        </div>
      </section>
    )
  }

  const PopUpContact = () => {
    return (
      <div className="w-full h-[150vh] absolute md:flex md:items-start md:justify-center top-0 bg-[rgba(0,0,0,0.5)]">
        <div className="flex flex-col-gap-2 bg-white rounded-xl h-fit opacity-100 mx-5 mt-[10vh] md:mt-[5vh] relative md:w-3/4">
          <span className='text-2xl absolute top-4 right-5 text-primary cursor-pointer' onClick={(e) => closePopUp()}>
            <CloseIcon fontSize='inherit' color='inherit' />
          </span>
          <section className="w-full h-full px-5 pt-10 pb-6 md:py-10 flex flex-col gap-9 -mt-1 md:px-10 overflow-hidden">
            <div className="flex flex-col gap-2 w-full md:px-10">
              <h3 className="text-primary text-xs md:text-base font-medium uppercase">{isSendUsMessage ? sendUsMessageSectionOnLanding.subtitle : contactUsSectionOnLanding.subtitle}</h3>
              <div className="flex flex-col gap-2 md:flex-row md:gap-20 md:items-center">
                <h2 className='text-secondary text-2xl md:text-[40px] font-medium w-[20rem] md:w-[30rem] md:leading-[40px]'>{isSendUsMessage ? sendUsMessageSectionOnLanding.title : contactUsSectionOnLanding.title}</h2>
                <p className="text-gray text-sm lg:text-base md:w-[40%]">
                {isSendUsMessage ? sendUsMessageSectionOnLanding.description : contactUsSectionOnLanding.description}
                </p>
              </div>
            </div>

            {
              !isSendUsMessage ? <ContactUsSection /> : <SendMessageSection />
            }

            {
              !isSendUsMessage ? (
                <div className="flex flex-col gap-4 md:w-full md:items-center md:justify-center mt-6 md:mt-0">
                  <Link href='https://wa.wizard.id/b28ccc' title='Contact Us' about='Contact Us' className='bg-secondary text-primary font-medium text-base rounded-full px-5 py-3 text-center cursor-pointer md:w-1/4'>Contact Us</Link>

                  <div onClick={(e) => setIsSendUsMessage(true)} className='bg-transparent text-gray font-normal -mt-3 text-base rounded-full px-5 py-3 text-center cursor-pointer md:w-1/4'>Send Us Message</div>
                </div>
              ) : (
                <div className="flex flex-col gap-4 md:w-full md:items-center md:justify-center md:mt-0">
                  <Link href='' title='Send Us Message' about='Send Us Message' className='bg-secondary text-primary font-medium text-base rounded-full px-5 py-3 text-center cursor-pointer md:w-1/4'>Send Message</Link>

                  <div onClick={(e) => setIsSendUsMessage(false)} className='bg-transparent text-gray font-normal -mt-3 text-base rounded-full px-5 py-3 text-center cursor-pointer md:w-1/4'>Contact Us</div>
                </div>
              )
            }
            
          </section>
        </div>
      </div>
    )
  }

  return (
    <header className={`w-full z-50 bg-primary fixed lg:flex lg:flex-row lg:items-center lg:justify-between lg:border-b lg:border-b-border ${isContactOpen ? 'lg:px-0' : 'lg:px-10'}`}>
      <nav className={`lg:mx-auto lg:flex-1 flex flex-row items-center justify-between px-7 py-1 border-b border-b-border lg:border-none h-[10vh] md:h-fit`}>
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
            <div className={`hover:bg-secondary hover:rounded-full px-5 py-2 duration-800 transition-all hover:text-primary ${'Contact Us' == isSelected ? 'bg-secondary text-primary rounded-full' : 'bg-transparent text-white'} cursor-pointer`} onClick={(e) => showPopUp()}>
                <p className={`font-medium text-[15px] flex items-center justify-center`}><span>{'Contact Us'}</span></p>
            </div>
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
              <div  className={`bg-secondary ${isSelected == 'Contact Us' ? 'w-full px-5 py-3' : 'w-fit flex items-center justify-center px-4 py-3 self-end'} rounded-full text-primary duration-800 transition-all`} onClick={(e) => showPopUp()}>
                  <p className={`font-medium text-base flex items-center ${isSelected == 'Contact Us' ? 'gap-3' : 'gap-0'} justify-center`}><span>{isSelected == 'Contact Us' ? 'Contact Us' : null}</span> <span className='text-primary text-2xl'>
                    <LocalPhoneRoundedIcon color='inherit' fontSize='inherit' />
                    </span></p>
              </div>
            </article>
          </section>
        )
      }

      {
        isContactOpen ? <PopUpContact /> : null
      }
    </header>
  )
}

export default Navbar