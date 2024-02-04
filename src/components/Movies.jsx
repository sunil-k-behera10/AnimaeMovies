import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination, Navigation , Autoplay} from 'swiper/modules';

function Movies() {
  return (
    <Swiper
    slidesPerView={'auto'}
    spaceBetween={30}
    loop={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Pagination, Navigation, Autoplay]}
    className="mySwiper"
  >
    <SwiperSlide className='relative'>
      <img className='h-96 w-full blur-sm' src="https://assets-prd.ignimgs.com/2023/03/08/pirates-1-1678290544034.jpg" alt="" />
      <img className='absolute left-0 top-0 right-0 h-96 m-auto' src="https://assets-prd.ignimgs.com/2023/03/08/pirates-1-1678290544034.jpg" alt="" />
    </SwiperSlide>

    <SwiperSlide className='relative'>
      <img className='h-96 w-full blur-sm' src="https://w0.peakpx.com/wallpaper/830/604/HD-wallpaper-marvel-vs-dc-comics-cartoon-drawn-hollywood-superhero.jpg" alt="" />
      <img className='absolute left-0 top-0 right-0 h-96 m-auto' src="https://w0.peakpx.com/wallpaper/830/604/HD-wallpaper-marvel-vs-dc-comics-cartoon-drawn-hollywood-superhero.jpg" alt="" />
    </SwiperSlide>

    <SwiperSlide className='relative'>
      <img className='h-96 w-full blur-sm' src="https://w0.peakpx.com/wallpaper/270/78/HD-wallpaper-marvel-avengers-vs-dc-justice-league-marvel-avengers-artwork-artist-superheroes-artstation.jpg" alt="" />
      <img className='absolute left-0 top-0 right-0 h-96 m-auto' src="https://w0.peakpx.com/wallpaper/270/78/HD-wallpaper-marvel-avengers-vs-dc-justice-league-marvel-avengers-artwork-artist-superheroes-artstation.jpg" alt="" />
    </SwiperSlide>

    <SwiperSlide className='relative'>
      <img className='h-96 w-full blur-sm' src="https://w0.peakpx.com/wallpaper/829/82/HD-wallpaper-superman-vs-batman-actor-cartoon-comic-dc-drawn-hollywood-marvels-superhero.jpg" alt="" />
      <img className='absolute left-0 top-0 right-0 h-96 m-auto' src="https://w0.peakpx.com/wallpaper/829/82/HD-wallpaper-superman-vs-batman-actor-cartoon-comic-dc-drawn-hollywood-marvels-superhero.jpg" alt="" />
    </SwiperSlide>

   <SwiperSlide className='relative'>
      <img className='h-96 w-full blur-sm' src="https://i.ytimg.com/vi/-lCe2NBL5Hc/maxresdefault.jpg" alt="" />
      <img className='absolute left-0 top-0 right-0 h-96 m-auto' src="https://i.ytimg.com/vi/-lCe2NBL5Hc/maxresdefault.jpg" alt="" />
    </SwiperSlide>

    <SwiperSlide className='relative'>
      <img className='h-96 w-full blur-sm' src="https://images.bauerhosting.com/legacy/empire-tmdb/films/76338/images/3FweBee0xZoY77uO1bhUOlQorNH.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80" alt="" />
      <img className='absolute left-0 top-0 right-0 h-96 m-auto' src="https://images.bauerhosting.com/legacy/empire-tmdb/films/76338/images/3FweBee0xZoY77uO1bhUOlQorNH.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80" alt="" />
    </SwiperSlide>

    <SwiperSlide className='relative'>
      <img className='h-96 w-full blur-sm' src="https://www.10wallpaper.com/wallpaper/1920x1080/1312/The_Hobbit_2-The_Desolation_of_Smaug_Movie_HD_Wallpaper_1920x1080.jpg" alt="" />
      <img className='absolute left-0 top-0 right-0 h-96 m-auto' src="https://www.10wallpaper.com/wallpaper/1920x1080/1312/The_Hobbit_2-The_Desolation_of_Smaug_Movie_HD_Wallpaper_1920x1080.jpg" alt="" />
    </SwiperSlide>



  </Swiper>
  )
}

export default Movies