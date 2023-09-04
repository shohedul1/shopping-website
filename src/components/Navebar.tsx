import Link from 'next/link';
import React from 'react';

function Navebar() {
  return (
    <div className='hidden lg:block'>
        <div className='container'>
            <div className='flex w-fit gap-10 mx-auto font-medium text-blackish pb-2'>

                <Link href="#" className='navbar_link relative'>
                    HOME
                </Link>
                <Link href="#" className='navbar_link relative'>
                  CATEGORIES
                </Link>
                <Link href="#" className='navbar_link relative'>
                    MENS
                </Link>
                <Link href="#" className='navbar_link relative'>
                    WOMENS
                </Link>
                <Link href="#" className='navbar_link relative'>
                    JEWELRY
                </Link>
                <Link href="#" className='navbar_link relative'>
                   PERFUME
                </Link>
                <Link href="#" className='navbar_link relative'>
                    BLOG
                </Link>
                <Link href="#" className='navbar_link relative'>
                    HOT OFFERS
                </Link>

            </div>

        </div>

    </div>
  )
}

export default Navebar;