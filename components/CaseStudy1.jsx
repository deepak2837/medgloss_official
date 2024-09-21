import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import './Tess.css'

const Team = () =>{


  return (
    <section className='section-white'>
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
        className="swiper_container"
      >

        <SwiperSlide className='swipper-slide'>

            <div>
                <img src={'/4.png'} alt='img' height={300} width={350} />
            </div>



        </SwiperSlide>

        <SwiperSlide className='swipper-slide'>

            <div>
                <img src={'/5.png'} alt='img' height={300} width={350} />
            </div>


        </SwiperSlide>
        

       <SwiperSlide className='swipper-slide'>

             <div>
                <img src={'/7.png'} alt='img' height={300} width={350} />
             </div>


         </SwiperSlide>
         <SwiperSlide className='swipper-slide'>

            <div>
                <img src={'/4.png'} alt='img' height={300} width={350} />
            </div>


        </SwiperSlide>

        {/* <SwiperSlide className='swipper-slide'>

            <div>
                <img src={'/5.png'} alt='img' height={300} width={350} />
            </div>


        </SwiperSlide>
        

        <SwiperSlide className='swipper-slide'>

            <div>
                <img src={'/7.png'} alt='img' height={300} width={350} />
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
    </section>
  )

}

export default Team