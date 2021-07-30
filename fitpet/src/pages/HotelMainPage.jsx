import React from 'react';
import GoUpBtn from '../common/buttons/small_size/GoUpBtn';
import Footer from '../components/common/Footer';
import Header from '../components/common/header/Header';
import HotelMain from '../components/hotel/hotel_main/HotelMain';

const HotelMainPage = () => {
  return (
    <>
      <Header />
      {/* <HeaderNav /> */}
      <HotelMain />
      <GoUpBtn />
      <Footer />
      {/* <RoomDetailModal />*/}
    </>
  );
};

export default HotelMainPage;
