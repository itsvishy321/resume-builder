import React, { forwardRef , useEffect, useRef, useState } from 'react'
import { Template1 } from '../Resume_Templates/Template1';
import { Template2 } from '../Resume_Templates/Template2';
import { Template3 } from '../Resume_Templates/Template3';
import { Template4 } from '../Resume_Templates/Template4';

export const ResumePreview = forwardRef((props , ref) => {
  const templateIndex = props.templateIndex;
  const containerRef = useRef();

  const getResumeTemplate = () => {
    switch (templateIndex) {
      case 0:
          return (<Template1/>)
      case 1:
          return <Template2/>
      case 2:
          return <Template3/>
      case 3:
          return <Template4/>
      default:
        break;
    }
  }

  return (
    <div ref={ref} className='bg-formBg p-4 mt-5'>
      <div ref={containerRef} className=' max-w-3xl mx-auto w-screen'>
        {getResumeTemplate()}
      </div>
    </div>
  )
});
