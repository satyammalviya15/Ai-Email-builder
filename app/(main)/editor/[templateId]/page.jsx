import Canvas from '@/components/ui/custom/Canvas';
import EditorHeader from '@/components/ui/custom/EditorHeader';
import ElementsSideBar from '@/components/ui/custom/ElementsSideBar';
import Settings from '@/components/ui/custom/Settings';
import React from 'react'

function Editor() {
  return (
    <div>
      <EditorHeader/>
      <div className='grid grid-cols-5'>
        <ElementsSideBar/>
        <div className='col-span-3 bg-gray-100'>
          <Canvas/>
        </div>
        <Settings/>
      </div>
    </div>
  )
} 

export default Editor
