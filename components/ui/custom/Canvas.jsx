"use client";
import { useDragElementLayout, useEmailTemplate, useScreenSize } from '@/app/provider';
import ColumnLayout from '@/components/LayoutElement/ColumnLayout';
import React, { useState } from 'react';

function Canvas() {
  const { screenSize } = useScreenSize();
  const { dragElementLayout } = useDragElementLayout();
  const { emailTemplate, setEmailTemplate } = useEmailTemplate();
  const [dragOver, setDragOver] = useState(false);

  const onDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
    console.log('Over...');
  };

  const onDropHandle = () => {
    setDragOver(false);
    if (dragElementLayout?.dragLayout) {
      setEmailTemplate(prev => [...prev, dragElementLayout.dragLayout]);
    }
  };

  const getLayoutComponent = (layout)=>{
    if(layout?.type=='column'){
      return (<ColumnLayout layout={layout}/>);
    }
  };

  return (
    <div className='mt-20 flex justify-center'>
      <div
        className={`bg-white p-6 w-full 
        ${screenSize === 'desktop' ? 'max-w-2xl' : 'max-w-md'}
        ${dragOver ? 'bg-pink-600 p-4' : ''}
        `}
        onDragOver={onDragOver}
        onDrop={onDropHandle}
        onDragLeave={() => setDragOver(false)}
      >
        {emailTemplate?.length > 0 ? (
          <>
            {emailTemplate.map((item, index) => (
              <div key={index}>
                {getLayoutComponent(item)}
              </div>
            ))}
          </>
        ) : (
          <h2 className='p-4 text-center bg-gray-100 border border-dashed'>Add Layout Here</h2>
        )}
      </div>
    </div>
  );
}

export default Canvas;
