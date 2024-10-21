import React from 'react';
import style from './offers.module.css';
import { Link } from 'react-router-dom';
import Nav from '../Nav';
import Footer from '../Footer';

const offersData = [
  {
    title: 'Luxury Stay Package',
    description:
      'Enjoy a luxurious stay with complimentary breakfast, spa access, and a sunset view from your room.',
    image: 'https://theadventurehotels.com/images/uploads/255/1671440875Lobby-Cum-Recieption.png?14401722',
    link: '/book/luxury-stay'
  },
  {
    title: 'Romantic Escape',
    description:
      'A perfect getaway for couples, with candlelit dinners, couple’s spa, and a romantic room setup.',
    image: 'https://media.licdn.com/dms/image/D4D12AQEhy5tIBBn4Ig/article-cover_image-shrink_600_2000/0/1703170905333?e=2147483647&v=beta&t=pRaIiV0UPFlKk-fCty1tV3fGtNdMMSYh3u79liubCvk',
    link: '/book/romantic-escape'
  },
  {
    title: 'Family Adventure Package',
    description:
      'Family fun with kids activities, family suites, and complimentary meals for children under 12.',
    image: 'https://media1.thrillophilia.com/filestore/jezkw1hz3yrpmiqlbobdguc5f54m_shutterstock_1938178192.jpg',
    link: '/book/family-adventure'
  },
  {
    title: 'Spa & Wellness Retreat',
    description:
      'Indulge in a rejuvenating spa experience with daily treatments, detox meals, and wellness programs.',
    image: 'https://pix10.agoda.net/hotelImages/293/29381362/29381362_211213202400109709917.jpg?s=414x232',
    link: '/book/spa-wellness'
  },
  {
    title: 'Business Traveler Offer',
    description:
      'Ideal for business travelers, with high-speed WiFi, conference room access, and express check-in.',
    image: 'https://www.visaadvisor.in/images/Corporate-Travel-Management.jpg',
    link: '/book/business-offer'
  },
  {
    title: 'Get Flat 20% Offer',
    description:
      'Ideal for business travelers, with high-speed WiFi, conference room access, and express check-in.',
    image: 'https://gos3.ibcdn.com/top-1549373953.jpg',
    link: '/book/business-offer'
  },
];

const OffersPage = () => {
  return (
    <div>
      <div className={style.container}>
      <Nav />
      <div className={style.offerscontainer}>
        <h1 className={style.heading}>Exclusive Hotel Offers</h1>
        <div className={style.offersgrid}>
          {offersData.map((offer, index) => (
            <div key={index} className={style.offeritem}>
              <img src={offer.image} alt={offer.title} className={style.offerimage} />
              <div className={style.offercontent}>
                <h2 className={style.offertitle}>{offer.title}</h2>
                <p className={style.offerdescription}>{offer.description}</p>
                <button><Link to={"/popup"} style={{ "textDecoration": "none", "color": "Black" }}>BOOK NOW</Link></button>

              </div>
            </div>
          ))}
        </div>
      </div>
     
    </div> 
    <Footer/>
    </div>
  );
};

export default OffersPage;
