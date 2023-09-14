import Link from 'next/link';
import React from 'react';

function Banner() {
  return (
    <div className='max-w-6xl mx-auto'>
      <hr className='border-gray-700/40 mb-2' />

      <div className='md:flex md:justify-between flex-none mt-2 mb-2 md:mt-0 md:mb-0 mx-2 md:mx-0'>
        <div className='md:flex lg:flex xl:flex flex-none md:gap-4 space-y-4 mb-6'>
          <p className='mt-5 underline decoration-purple-600 md:mt-2 text-gray-400 max-w-sm italic font-normal'>
            Tech News, Views | Exploring the Possibilities of Technology for a
            Better Future | Tech Talk for the Tech-Savvy Generation!
          </p>
        </div>

        <div>
          <Link
            href=''
            className='relative inline-flex items-center px-10 py-2 overflow-hidden text-lg font-medium text-[#ffff] border  bg-purple-800/70 rounded-full hover:text-white group hover:bg-gray-50 w-fit md:w-fit'
          >
            <span className='absolute left-0 block w-full h-0 transition-all bg-purple-700 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease'></span>
            <span className='absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease'>
              <svg
                className='ml-1 w-4 h-4 items-center'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M14 5l7 7m0 0l-7 7m7-7H3'
                ></path>
              </svg>
            </span>
            <span className='relative'>Checkout creator git account</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
