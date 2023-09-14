import React from 'react';
import Image from 'next/image';

function Logo(props: any) {
  const { renderDefault, title } = props;

  return (
    <div className='flex items-center space-x-1 -my-2'>
      <Image className='' height={140} width={140} src='/Logo.png' alt='logo' />
      <>{renderDefault(props)}</>
    </div>
  );
}

export default Logo;
