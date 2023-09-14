import React from 'react';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

function StudioNavbar(props: any) {
  return (
    <div>
      <div className='flex items-center justify-between p-4 '>
        <Link
          href='/'
          className='text-purple-600 flex items-center hover:border underline underline-offset-2 hover:border-purple-600 py-1 px-2 rounded-full'
        >
          <ArrowUturnLeftIcon className='h-5 w-5 text-gray-300 mr-2 ' />
          Go to website
        </Link>

        <div className='hidden md:flex p-3 rounded-lg justify-center border border-purple-600'>
          <h1 className='font-bold text-white'>
            Checkout few more projects on GIT.
          </h1>
          <Link
            href='https://www.github.com/Keshavvats9470'
            className='text-purple-700 font-semibold ml-2 hover:underline '
          >
            www.github.com/Keshavvats9470
          </Link>
        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
