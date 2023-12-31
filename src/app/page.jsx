'use client';

import LoginAuth from '@/components/page/login';
import Image from 'next/image';
import logo from "../../public/logo1.png";

export const metadata = {
  title: 'Wealth Spring | Login',
  description: 'Generated by create next app',
}

export default function Home() {
  return (
    <div className='container'>
      <div className='row row-cols-2 d-flex justify-content-center align-items-center'>
        <div className='text-center col'>
          <Image src={logo} alt="logo" />
          <h5>Building Wealth, One Step at a Time.</h5>
        </div>
        <div className='col'>
          <LoginAuth />
        </div>
      </div>
      </div>
  )
}
