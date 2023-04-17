import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';


const AvailableAppointment = ({ selectedDate }) => {

  const [appointmentOptions, setAppointmentOptions] = useState([])
  const [treatment, setTreatment] = useState(null)
  useEffect(() => {
    fetch('appointmentOptions.json')
      .then(res => res.json())
      .then(data => setAppointmentOptions(data))
  }, [])
  return (
    <section>
      <p className='text-primary text-center font-bold'>available appointment on {format(selectedDate, 'PP')}:</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
        {
          appointmentOptions.map(option => <AppointmentOption
            key={option._id}
            appointmentOption={option}
            setTreatment={setTreatment}

          ></AppointmentOption>)
        }
      </div>
      {
        treatment &&
        <BookingModal
          setTreatment={setTreatment}
          selectedDate={selectedDate}
          treatment={treatment}
        ></BookingModal>
      }
    </section>
  );
};

export default AvailableAppointment;