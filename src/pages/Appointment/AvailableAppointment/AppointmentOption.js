import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
  const { name, slots } = appointmentOption;

  return (
    <div className="card shadow-xl">
      <div className="card-body text-center my-10">
        <h2 className="text-center text-2xl text-secondary font-bold">{name}!</h2>
        <p>{slots.length > 0 ? slots[0] : 'try another day please'}</p>
        <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} availbe</p>
        <div className="card-actions justify-center">
          <label htmlFor="booking-modal" className="btn btn-primary text-white"
            onClick={() => setTreatment(appointmentOption)}
          >Book appointment</label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;