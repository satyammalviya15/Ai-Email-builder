"use client"
import React from 'react'
import { Button } from '../button';
import SignInButton from './SignInButton';
import { useUserDetail } from '@/app/provider';
import Image from 'next/image';
import Link from 'next/link';

function Header() {
  const {userDetail,setUserDetail}=useUserDetail();
  return (
    <div className='flex justify-between item-center shadow-sm'>
      <img src={'/gbook.png'} alt='logo' width={100} height={100}></img>
      <div className='item-center shadow-sm p-4'>
        {userDetail?.email?
        <div className='flex gap-3 items-center'>
          <Link href={'/dashboard'}>
          <Button>Dashboard</Button>
          </Link>
          <Image src={userDetail?.picture} alt='user' width={40} height={40} className='rounded-full'/>
        </div> : <SignInButton/>
          }
      </div>
    </div>
  )
}

export default Header
