import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';

function Header() {
  return (
    
    <header className = 'flex items-center justify-between space-x-2 font-bold px-8 py-4 max-w-6xl mx-auto '>
      <div className='flex items-center space-x-2'>
        <Link href='/'>
          <Image src='/Logo.png' width={100} height={100} alt='logo' />
        </Link>
        {/* <h1>{`<Socio-Code/>`}</h1> */}
      </div>
      <div className='space-x-3'>
        <SocialIcon  className='hover:animate-bounce'
        url='http://google.com/'
        />
        <SocialIcon className='hover:animate-bounce' url='http://youtube.com/'
        />
        <SocialIcon
         className='hover:animate-bounce'
        url='http://github.com/'
        /> 
        <SocialIcon 
         className='hover:animate-bounce'
        url='http://twitter.com/'
        /> 
      </div> 
    </header>

  );
}

export default Header;
