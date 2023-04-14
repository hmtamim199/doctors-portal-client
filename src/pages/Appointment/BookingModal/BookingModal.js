import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment,setTreatment, selectedDate }) => {
  const data = format(selectedDate, 'PP')

  const handleBooking = event => {
    event.preventDefault()
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const booking = {
      appointmentDate: data,
      treatmentName: name,
      patientName: name,
      email,
      phone,
      slot,
    }
    console.log(booking)
    setTreatment(null)
  }
  const { name, slots } = treatment;
  return (
    <>

      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4 mt-5'>
            <input type="text" name='slot' value={data} disabled className="input input-bordered w-full " />
            <select className="select select-bordered w-full ">

              {
                slots.map((slot, i) => <option value={(slot, i)} >{slot}</option>)
              }
            </select>
            <input type="text" name='name' placeholder='your name' className="input input-bordered w-full " />
            <input type="text" name='email' placeholder='uour email' className="input input-bordered w-full " />
            <input type="text" name='phone' placeholder='your phone' className="input input-bordered w-full " />

            <input type="submit" className='w-full btn btn-accent' value="submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;