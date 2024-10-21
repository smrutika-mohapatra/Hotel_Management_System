import React, { useState } from 'react';
import style from "./hotelbook.module.css";
import { Link } from 'react-router-dom';
import Nav from '../Nav';
import Footer from '../Footer';
import Date from "./DateSelector"
const App = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const rooms = [
    {
      id: 1,
      title: 'Two Bedroom Presidential Suite',
      image: "https://img.freepik.com/premium-photo/hotel-room-with-two-beds-large-painting-sky_889227-9322.jpg",
      description: 'The largest suite we have to offer, our Presidential Suite mixes luxury and comfort for a spacious retreat that feels just like home.',
      beds: 'Room 1: 1 King bed, Room 2: 1 King bed, Room 3: Sofa bed',
      sleeps: 6,
      area: '130.1m²',
      amenities: 'Nonsmoking · Kitchenette · Hairdryer · Wireless Internet · Air conditioned',
      rates: [
        { name: 'AARP', price: 350.55 },
        { name: 'Standard Rate', price: 369.00 },
        { name: 'AAA', price: 949.05 },
      ],
    },
    {
      id: 2,
      title: 'One King Bed Suite (ADA)',
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBD-aJp26eTn7TFC-G_4HCos6A9v-jPSwXEA&s",
      description: 'Our King Bed Suite (ADA) offers the best of functional yet separate and accessible spaces, as it boasts a spacious bedroom with one king bed and a separate living room.',
      beds: 'Room 1: 1 King bed, Room 2: 1 Sofa bed',
      sleeps: 4,
      area: '30.9m²',
      amenities: 'Nonsmoking · Kitchenette · Hairdryer · Wireless Internet · Air conditioned',
      rates: [
        { name: 'AARP', price: 949.05 },
        { name: 'Standard Rate', price: 999.00 },
        { name: 'AAA', price: 1549.05 },

      ],
    },
    {
      id: 3,
      title: 'Delux Room',
      image: "https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/the-oberoi-bengaluru/room-and-suites/detail/deluxe-room.jpg?w=384&hash=8471de81075ced32226ecf60aa9d023c",
      description: 'Our King Bed Suite (ADA) offers the best of functional yet separate and accessible spaces, as it boasts a spacious bedroom with one king bed and a separate living room.',
      beds: 'Room 1: 1 King bed, Room 2: 1 Sofa bed',
      sleeps: 4,
      area: '30.9m²',
      amenities: 'Nonsmoking · Kitchenette · Hairdryer · Wireless Internet · Air conditioned',
      rates: [
        { name: 'AARP', price: 749.05 },
        { name: 'Standard Rate', price: 797.00 },
        { name: 'AAA', price: 1149.05 },

      ],
    },
    {
      id: 4,
      title: 'Party Hall',
      image: "https://i0.wp.com/eventertainments.com/blog/wp-content/uploads/2021/02/ERSVTohUcAAMoFa.jpg?fit=1200%2C900&ssl=1",
      description: 'Our King Bed Suite (ADA) offers the best of functional yet separate and accessible spaces, as it boasts a spacious bedroom with one king bed and a separate living room.',
      beds: 'Room 1: 1 King bed, Room 2: 1 Sofa bed',
      sleeps: 4,
      area: '30.9m²',
      amenities: 'Nonsmoking · Kitchenette · Hairdryer · Wireless Internet · Air conditioned',
      rates: [
        { name: 'AARP', price: 11949.05 },
        { name: 'Standard Rate', price: 12999.00 },
        { name: 'AAA', price: 50549.05 },

      ],
    },
    {
      id: 5,
      title: 'Conference Hall',
      image: "https://image-tc.galaxy.tf/wijpeg-2t9phrbc88d1wxvw69kyih5c4/conference-room-at-warwick-new-york.jpg?width=2000",
      description: 'Our King Bed Suite (ADA) offers the best of functional yet separate and accessible spaces, as it boasts a spacious bedroom with one king bed and a separate living room.',
      beds: 'Room 1: 1 King bed, Room 2: 1 Sofa bed',
      sleeps: 4,
      area: '30.9m²',
      amenities: 'Nonsmoking · Kitchenette · Hairdryer · Wireless Internet · Air conditioned',
      rates: [
        { name: 'AARP', price: 10949.05 },
        { name: 'Standard Rate', price: 21999.00 },
        { name: 'AAA', price: 51549.05 },

      ],
    },
    {
      id: 6,
      title: 'Pool side Party',
      image: "https://passport-cdn.kiwicollection.com/blog/drive/uploads/2018/07/Mondrian-Los-Angeles-Pool-Feature.jpg",
      description: 'Our King Bed Suite (ADA) offers the best of functional yet separate and accessible spaces, as it boasts a spacious bedroom with one king bed and a separate living room.',
      beds: 'Room 1: 1 King bed, Room 2: 1 Sofa bed',
      sleeps: 4,
      area: '30.9m²',
      amenities: 'Nonsmoking · Kitchenette · Hairdryer · Wireless Internet · Air conditioned',
      rates: [
        { name: 'AARP', price: 10449.05 },
        { name: 'Standard Rate', price: 20999.00 },
        { name: 'AAA', price: 51549.05 },

      ],
    },
    {
      id: 7,
      title: 'Garden Area',
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOlkCqjZjQBzXQhw_1HehzawSSWaWqmEcVNfNE_z3Cip6hJR4-HT0zlLyKSOBCEC3lP6I&usqp=CAU",
      description: 'Our King Bed Suite (ADA) offers the best of functional yet separate and accessible spaces, as it boasts a spacious bedroom with one king bed and a separate living room.',
      beds: 'Room 1: 1 King bed, Room 2: 1 Sofa bed',
      sleeps: 4,
      area: '30.9m²',
      amenities: 'Nonsmoking · Kitchenette · Hairdryer · Wireless Internet · Air conditioned',
      rates: [
        { name: 'AARP', price: 9049.05 },
        { name: 'Standard Rate', price: 10999.00 },
        { name: 'AAA', price: 41549.05 },

      ],
    },
  ];

  const handleSelectRoom = (room, rate) => {
    setSelectedRoom({ ...room, selectedRate: rate });
  };

  return (
    <div>
      <Nav />
      <div className={style.container}>
        <div className={style.leftcolumn}>
          <DateSelector />
          {rooms.map(room => (
            <RoomDetails key={room.id} room={room} onSelectRoom={handleSelectRoom} id={style.room} />
          ))}
        </div>
        <div className={style.rightcolumn}>
          <BookingSummary selectedRoom={selectedRoom} />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

const DateSelector = () => (
  <div className={style.dateselector}>
   <Date/>
    <input type="text" className={style.guestinput} value="1 Room, 2 Guests" readOnly />
  </div>
);

const RoomDetails = ({ room, onSelectRoom }) => (
  <div className={style.roomdetails}>
    <div className={style.description}>
      <img src={room.image} alt="" height="200px" />
      <div >
        <h2>{room.title}</h2>
        <p><strong>Sleeps {room.sleeps} · {room.beds}</strong></p>
        <p>{room.area} · {room.amenities}</p>
        <p>{room.description}</p>
      </div>
    </div>
    {room.rates.map((rate, index) => (
      <RateCard key={index} rate={rate} onSelectRate={() => onSelectRoom(room, rate)} />
    ))}
  </div>
);

const RateCard = ({ rate, onSelectRate }) => (
  <div className={style.ratecard}>
    <div>
      <h3>{rate.name}</h3>
      <p>Free cancellation! Book now, pay later</p>
    </div>
    <div className={style.rateprice}>
      <span>INR {rate.price.toFixed(2)}</span>
      <button onClick={onSelectRate}>Select</button>
    </div>
  </div>
);

const BookingSummary = ({ selectedRoom }) => (
  <div className={style.summary}>
    <h2>Summary</h2>
    {selectedRoom ? (
      <>
        <p>TITTLE: {selectedRoom.title}</p>
        <p>NAME: {selectedRoom.selectedRate.name}</p>
        <p style={{ color: "rgb(75, 212, 75)" }}>USD {selectedRoom.selectedRate.price.toFixed(2)} total</p>
        <button className={style.bookbutton}><Link to={"/bookform"} style={{ textDecoration: "none", color: "black" }}>Book</Link></button>
      </>
    ) : (
      <p>Select a rate to continue</p>
    )}
  </div>
);

export default App;

