"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import './Tess.css'
import Image from 'next/image';
import Link from 'next/link';

const Team = () =>{


  return (
    <section className='section-white z-0'>
      <Link href={'/blog'}>
      <div className='container'>
               

        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container z-0"
      >

        <SwiperSlide className='max-w-[35%] mx-auto'>

            <div>
                <Image src={'/4.png'} alt='Image' height={300} width={350} />
            </div>



        </SwiperSlide>

        <SwiperSlide className='max-w-[35%] mx-auto'>

            <div>
                <Image src={'/5.png'} alt='Image' height={300} width={350} />
            </div>


        </SwiperSlide>
        

       <SwiperSlide className='max-w-[35%] mx-auto'>

             <div>
                <Image src={'/7.png'} alt='Image' height={300} width={350} />
             </div>


         </SwiperSlide>
         <SwiperSlide className='max-w-[35%] mx-auto'>

            <div>
                <Image src={'/4.png'} alt='Image' height={300} width={350} />
            </div>


        </SwiperSlide>

        {/* <SwiperSlide className='w-[35%] mx-auto'>

            <div>
                <Image src={'/5.png'} alt='Image' height={300} width={350} />
            </div>


        </SwiperSlide>
        

        <SwiperSlide className='w-[35%] mx-auto'>

            <div>
                <Image src={'/7.png'} alt='Image' height={300} width={350} />
            </div>

        </SwiperSlide> */}  

      

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>


      </Swiper>

      </div>
      </Link>
    </section>
  )

}

export default Team