import React from 'react';
import style from './dinedrink.module.css';
import Nav from "../Nav"
import Footer from '../Footer';

const dineAndDrinkData = [
  {
    name: "The Royal Restaurant",
    description: "A fine-dining experience with a blend of traditional and contemporary cuisines, offering exquisite dishes crafted by our Michelin-star chef.",
    image: "https://www.hoteltheroyalplaza.com/images/dinebanner2.jpg",
    type: "Restaurant",
  },
  {
    name: "The Sky Lounge",
    description: "Enjoy stunning views of the city skyline while sipping on crafted cocktails and savoring light gourmet bites in a sophisticated atmosphere.",
    image: "https://b.zmtcdn.com/data/pictures/5/18800355/2924806f0c5695c4e51aa95b56fa5c1b.jpg",
    type: "Lounge",
  },
  {
    name: "Sunset Bar",
    description: "Unwind at our poolside bar, featuring a variety of tropical drinks, refreshing cocktails, and a vibrant ambiance for a perfect evening.",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/df/35/b8/sunset-bar.jpg?w=1200&h=-1&s=1",
    type: "Bar",
  },
  {
    name: "The Cigar Lounge",
    description: "An exclusive lounge with premium cigars, top-shelf whiskey, and a luxurious interior designed for those who appreciate the finer things in life.",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/18/15/ab/04/the-cigar-room.jpg",
    type: "Lounge",
  },
  {
    name: "The Dome",
    description: "Enjoy stunning views of the city skyline while sipping on crafted cocktails and savoring light gourmet bites in a sophisticated atmosphere.",
    image: "https://b.zmtcdn.com/data/pictures/3/19355433/d615735e62009432440c5d5dd5e6ac85.jpg",
    type: "Lounge",
  },
  {
    name: "The Royal cafe",
    description: "A fine-dining experience with a blend of traditional and contemporary cuisines, offering exquisite dishes crafted by our Michelin-star chef.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ZwkcwOTF9hGwOi9fTfib8jWtc3X36ZdmCOsDbJC0pOnsVZt8RP9pRTKo8RBKkcfF-cY&usqp=CAU",
    type: "Restaurant",
  },
];

const DineDrink = () => {
  return (
    <div>
      <div className={style.container}>
      <Nav />
      <div className={style.dinecontainer}>
        <h1 className={style.title}>Dine & Drink</h1>
        <div className={style.dinegrid}>
          {dineAndDrinkData.map((item, index) => (
            <div className={style.dineitem} key={index}>
              <img src={item.image} alt={item.name} className={style.dineimage} />
              <div className={style.dineinfo}>
                <h2 className={style.dinename}>{item.name}</h2>
                <p className={style.dinetype}>{item.type}</p>
                <p className={style.dinedescription}>{item.description}</p>
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

export default DineDrink;
