"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Download = () => {
  const router = useRouter()
  
  const handleClick = ()=>{
    router.back()
  }

  return (
    <div className="min-h-screen md:mt-24 mt-0 p-4 ">

  {/* Breadcrumb */}
  <div className="text-center my-4 bg-orange-200 py-2 rounded-full">
    <span className="text-pink-700">Home / Downloads</span>
  </div>

  {/* Download & Back Buttons */}
  <div className="flex justify-center space-x-4 my-6">
    <button className="bg-custom-gradient text-white px-6 py-2 rounded-full shadow-lg hover:bg-pink-600">
      <i className="fa fa-download mr-2"></i> Download
    </button>
    <button className="bg-custom-gradient text-white px-6 py-2 rounded-full shadow-lg hover:bg-pink-600" 
    onClick={handleClick}
    >
      <i className="fa fa-arrow-left mr-2"></i> Back
    </button>
  </div>

  {/* File Content (Cloud + Text) */}
  {/* <div className="flex justify-center">
    <div className="relative bg-blue-100 rounded-xl shadow-lg p-8">
      <img src="/cloud.png" alt="Cloud" className="absolute -top-10 mx-auto" />
      <div className="bg-white p-4 rounded-lg shadow-md mt-12">
        <h3 className="text-lg font-bold text-gray-800">CF</h3>
        <p className="text-gray-600">By Deepak Yadav</p>
      </div>
    </div>
  </div> */}
</div>

  )
}

export default Download