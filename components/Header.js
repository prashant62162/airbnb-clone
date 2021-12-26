import Image from 'next/image';
import logo from '../assets/images/airbnb-logo-png.png';
import { SearchIcon, GlobeAltIcon, UserCircleIcon, UsersIcon, MenuIcon } from '@heroicons/react/solid';
function Header() {
    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
            <div className='relative flex items-center h-10 cursor-pointer my-auto'>
                <Image
                    src={logo}
                    layout='fill'
                    objectFit='contain'
                    objectPosition='left'
                />
            </div>
            <div className='flex items-center md:border-2 rounded-full p-2 md:shadow-md'>
                <input className='flex-grow px-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400' type="text" placeholder='Start Your Search' />
                <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer' />

            </div>
            <div className='flex items-center justify-end text-gray-500 space-x-4'>
                <p className='hidden md:inline cursor-pointer'>Become a host</p>
                <GlobeAltIcon className='h-6' />
                <div className='flex space-x-2 border-2 p-2 rounded-full'>
                    <MenuIcon className='h-6' />
                    <UserCircleIcon className='h-6' />
                </div>
            </div>
        </header>
    )
}

export default Header
