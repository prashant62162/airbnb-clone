import Image from 'next/image';
import logo from '../assets/images/airbnb-logo-png.png';
import { SearchIcon, GlobeAltIcon, UserCircleIcon, UsersIcon, MenuIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/dist/client/router';



function Header(props) {
    const [searchInput, setSearchInput] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [numberOfGuest, setNumberOfGuest] = useState(1);

    const router = useRouter();

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }
    const resetInput = () => {
        setSearchInput('');
    }

    const search = () => {
        router.push({
            pathname: '/search',
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                numberOfGuest,
            }
        })
    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }

    console.log(searchInput);

    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
            <div onClick={() => router.push('/')} className='relative flex items-center h-10 cursor-pointer my-auto'>
                <Image
                    src={logo}
                    layout='fill'
                    objectFit='contain'
                    objectPosition='left'
                />
            </div>
            <div className='flex items-center md:border-2 rounded-full p-2 md:shadow-md'>
                <input value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className='flex-grow px-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400'
                    type="text"
                    placeholder={props.placeholder || 'Start Your Search'} />
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
            {
                searchInput && (
                    <div className='flex flex-col col-span-3 mx-auto'>
                        <DateRangePicker
                            ranges={[selectionRange]}
                            minDate={new Date()}
                            rangeColors={['#FD5B61']}
                            onChange={handleSelect}
                        />
                        <div className='flex items-center border-b mb-2'>
                            <h2 className='text-2xl p-2 flex-grow'>Number Of guests</h2>
                            <UsersIcon className='h-5' />
                            <input value={numberOfGuest}
                                onChange={(e) => setNumberOfGuest(e.target.value)}
                                min={1} type="number"
                                className='w-12 pl-2 outline-none text-lg text-red-400' />
                        </div>
                        <div className='flex'>
                            <button className='flex-grow text-grey-500' onClick={resetInput}>Cancel</button>
                            <button className='flex-grow text-red-400' onClick={search}>Search</button>
                        </div>
                    </div>
                )
            }

        </header>
    )
}

export default Header
