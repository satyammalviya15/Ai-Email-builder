"use client"
import React from 'react';
import Image from 'next/image';
import { Button } from '../button';
import { Code, CodeSquare, Monitor, Smartphone } from 'lucide-react';
import { useScreenSize } from '@/app/provider';

function EditorHeader() {
  const {screenSize,setScreenSize}=useScreenSize();
  return (
    <div className='shadow-sm flex justify-between items-center'>
      <Image src={'/gbook.png'} alt="logo" width={100} height={100}/>
      <div className='flex gap-3'> 
        <Button variant="ghost" 
        onClick={()=>setScreenSize('desktop')}
        className={`${screenSize=='desktop'&&'bg-purple-100 text-primary'}`}>
          <Monitor/> Desktop</Button>
        <Button variant="ghost"
        onClick={()=>setScreenSize('mobile')}
        className={`${screenSize=='mobile'&&'bg-purple-100 text-primary'}`}>
          <Smartphone/>Mobile</Button>
      </div>
      <div className='flex gap-3'>
        <Button variant="ghost" className="hover:text-blue-600
                    hover:bg-purple-100">
            <Code/>
        </Button>
        <Button variant="outline">Send Test Email</Button>
        <Button>Save Template</Button>
      </div>
    </div>
  )
}

export default EditorHeader
