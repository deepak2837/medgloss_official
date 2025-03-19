
import React from 'react'
import Download from '@/components/PYQ/Download'
import BottomAdSection from '@/components/AdSection/BottomAdSection'
import TopAdSection from '@/components/AdSection/TopAdSection'
import Aside from '@/components/AdSection/Aside'

const Page = () => {
  return (
    <>
     <Aside/> 
     <TopAdSection/> 
    <div className='main'>
      <Download/>
    </div>
    <BottomAdSection/> 
    </>
  )
}

export default Page