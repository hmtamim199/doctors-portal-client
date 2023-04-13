import React from 'react';
import qoute from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {


  const reviews = [
    {
      id: 1,
      name: 'Winson Herry',
      description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      img: people1,
      location: 'banglades'
    },
    {
      id: 2,
      name: 'Winson Herry',
      description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      img: people2,
      location: 'banglades'
    },
    {
      id: 3,
      name: 'Winson Herry',
      description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      img: people3,
      location: 'banglades'
    },
  ]

  return (
    <section className='py-16'>
      <div className='flex justify-between'>
        <div>
          <h4 className='text-xl text-primary'>Testimonial </h4>
          <h2 className='trxt-6xl font-medium'>What Our Patients Says</h2>
        </div>
        <figure>
          <img className=' w-24 lg:w-48' src={qoute} alt="" />
        </figure>
      </div>
      <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
          reviews.map(review => <Review
            key={review._id}
            review={review}
          ></Review>)
        }
      </div>
    </section >
  );
};

export default Testimonial;