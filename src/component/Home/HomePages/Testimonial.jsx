import AVTR1 from '../../../assets/avatar1.jpg'
import AVTR2 from '../../../assets/avatar2.jpg'
import AVTR3 from '../../../assets/avatar3.jpg'
import AVTR4 from '../../../assets/avatar4.jpg'


// core version + navigation, pagination modules:
import {Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react'
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Happy.css'

const Testimonial = () => {
    const data = [
        {
          avatar: AVTR1,
          name: 'Nuna Ama McBrown',
          review: 'online Library People has good communication and work ethic. I would recommend his services to others and will continue to work with seller on expanding my website features. Thank you again.'
        
        },
        {
          avatar: AVTR2,
          name: 'Shatta Wale',
          review: 'It is always a pleasure working with online Library People. Works to get things the way we wanted them. Very happy and look forward working again together for future books we may have.'
        },
        {
          avatar: AVTR3,
          name: 'Kwame Despite',
          review: 'online Library People alwas good behabir and good cominicatio I like this online Library People Thanks you!'
        },
        {
          avatar: AVTR4,
          name: 'Tine Snow',
          review: 'Very importents books provide online Library. and online Library communicates well at every stage to check I am happy, using videos to show changes, which is great for a website beginner like me definitely would recommend.'
        },
      ]
    return (
        <section id='testimonials '>
        <div className='flex dark:text-white justify-center md:text-5xl text-xl font-extrabold pb-14 mt-[100px]'>
            Our <span className='text-green-400 px-2'>Happy</span> Students
        </div>
  
        <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
  
        pagination={{clickable: true}}>
          {
            data.map(({avatar ,name, review}, index) => {
              return (
                <SwiperSlide key={index} className="testimonial">
                  <div className="client__avatar">
                  <img src={avatar}/>
                  </div>
                  <h5 className='client__name text-white'>{name}</h5>
                  <small className='client__review'>{review}</small>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </section>
    );
};

export default Testimonial;