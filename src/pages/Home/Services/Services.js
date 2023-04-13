import React from 'react';
import flouride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Servise from './Servise';

const Services = () => {
  const serviseData = [
    {
      id: 1,
      name: 'Fluoride Treatment',
      description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
      icon: flouride
    },
    {
      id: 2,
      name: 'Fluoride Treatment',
      description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
      icon: cavity
    },
    {
      id: 3,
      name: 'Fluoride Treatment',
      description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
      icon: whitening
    },
  ]
  return (
    <div className='text-center mt-5'>
      <div className=''>
        <h3 className='text-xl font-bold text-secondary'>Our Services</h3>
        <h2 className='text-2xl font-medium'>Services We Provide</h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4'>
        {
          serviseData.map(servise => <Servise
            key={servise.id}
            servise={servise}
          ></Servise>)
        }
      </div>
    </div>
  );
};

export default Services;