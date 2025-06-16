import React, { useState } from 'react'
import { Button } from '../button';
import Image from 'next/image';

function EmailTemplateList() {
    const[emailList,setEmailList]=useState([]);
  return (
    <div>
      <h2 className='font-bold text-xl text-primary mt-6'>Workspace</h2>
      {emailList?.length == 0 &&
            <div className='flex justify-center mt-7 flex-col items-center'>
                <Image src={'/email.webp'} alt='email' height={250} width={250}/>
                <Button className="mt-7">
                    + Create New
                </Button>
            </div>
        }
    </div>
  )
}

export default EmailTemplateList
