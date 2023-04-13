import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';
import Treatment from '../Treatment/Treatment';
import MakeAppointment from '../MakeAppointment/MakeAppointment';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <Treatment></Treatment>
      <MakeAppointment></MakeAppointment>
    </div>
  );
};

export default Home;