'use client'


import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'



import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Slider() {
  return (
    <section className='flex justify-center content-center py-12'>
      <div className='container'>
        <Swiper
          navigation
          pagination={{ type: 'fraction' }}
          modules={[Navigation, Pagination]}
          onSwiper={swiper => console.log(swiper)}
          className=' w-full h-5/6 rounded-lg'
        >
          
            <SwiperSlide >
              <div className='flex h-full w-full items-center justify-center'>
                <img
                  src='https://res.cloudinary.com/dusavcufz/image/upload/v1705739194/ozqxe6yxaxijpzzvrkqu.png'
                  alt='poster'
                  className='block h-full w-full object-fit'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className='flex h-full w-full items-center justify-center'>
                <img
                  src='https://res.cloudinary.com/dusavcufz/image/upload/v1705740865/ajznmxdhcmd27yygsndk.png'
                  alt='poster'
                  className='block h-full w-full object-fit'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className='flex h-full w-full items-center justify-center'>
                <img
                  src='https://res.cloudinary.com/dusavcufz/image/upload/v1705739077/pck1lkkfmzsokkorxhlg.png'
                  alt='poster'
                  className='block h-full w-full object-fit'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className='flex h-full w-full items-center justify-center'>
                <img
                  src='https://res.cloudinary.com/dusavcufz/image/upload/v1705739077/pck1lkkfmzsokkorxhlg.png'
                  alt='poster'
                  className='block h-full w-full object-fit'
                />
              </div>
            </SwiperSlide>
         
        </Swiper>
      </div>
    </section>
  )
}