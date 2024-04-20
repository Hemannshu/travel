import React , {useState} from 'react'
import { BsPerson } from 'react-icons/bs'
import { BsSearch } from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaFacebook , FaYoutube, FaTwitter , FaInstagram} from 'react-icons/fa'
const Navbar = () => {
    const {nav,setNav} = useState(false);
    const handleNav=() =>{
        setNav(!nav);
    };
    

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
            <div onClick={handleNav}className='md:hidden'>
            <AiOutlineClose size={20}/>
                {nav ? <AiOutlineClose size={20}/> :<HiOutlineMenuAlt4 size={20}/>}
            </div>
            <div className='absolute left-[100%] top-0 w-full bg-gray-100/40 px-4 py-7 flex flex-col'>
                <ul>
                <li className='border-b'>Home</li>
                <li className='border-b'>Destiantion</li>
                <li className='border-b'>Travel</li>
                <li className='border-b'>Book</li>
                <div className='flex flex-col'>
                    <button className='my-6'>Search</button>
                    <button>Account</button>
                </div>
                <div className='flex justify-between my-6'>
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