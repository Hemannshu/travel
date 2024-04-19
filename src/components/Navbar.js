import React from 'react'
import { BsPerson } from 'react-icons/bs'
import { BsSearch } from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaFacebook , FaYoutube, FaTwitter , FaInstagram} from 'react-icons/fa'
const Navbar = () => {
    return (
        <div className='flex justify-between items-center h-20 px-4'>
            <div>
                <h1>BEACHES.</h1>
            </div>


            <ul className=' hidden md:flex'>
                <li>Home</li>
                <li>Destiantion</li>
                <li>Travel</li>
                <li>Book</li>
            </ul>
            <div className='hidden md:flex'>
                <BsPerson size={20}/>
                <BsSearch size={20}/>
            </div>
            <div className='md:hidden'>
            <AiOutlineClose size={20}/>
            <HiOutlineMenuAlt4 size={20}/>
            </div>
            <div className='absolute left-0 top-0 w-full bg-gray-100/40 px-4 py-7 flex flex-col'>
                <ul>
                <li>Home</li>
                <li>Destiantion</li>
                <li>Travel</li>
                <li>Book</li>
                <div>
                    <button>Search</button>
                    <button>Account</button>
                </div>
                <div className=''>
                    <FaFacebook className='icon' />
                    <FaTwitter  className='icon' />
                    <FaInstagram className='icon' />
                    <FaYoutube className='icon' />
                </div>
                </ul>
            </div>
        </div>
    )
}

export default Navbar