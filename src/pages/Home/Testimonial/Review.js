import React from 'react';

const Review = ({ review }) => {
  const { img, name, description, location } = review;
  return (
    <div className="card shadow-xl">
      <div className="card-body">

        <p>{description}</p>
        <div className="card-actions">
          <div className="avatar mt-4">
            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt='' />
            </div>
          </div>
          <div>
            <h5 className='text-lg '>{name}</h5>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;