import React, { useState, useEffect } from 'react';
import style from './gallery.module.css';
import Nav from "../Nav"
import Footer from '../Footer';

const Gallery1 = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/98/c7/68/library--v11450127.jpg?w=700&h=-1&s=1',
        'https://ik.imgkit.net/3vlqs5axxjf/external/https://www.cfmedia.vfmleonardo.com/imageRepo/7/0/146/187/687/60481981_O.jpg?tr=w-360%2Ch-379%2Cfo-auto',
        'https://media-cdn.tripadvisor.com/media/photo-s/17/22/b9/a2/art-gallery-hotel.jpg',
        'https://www.glasslighthotel.com/resourcefiles/homeimages/glass-light-hotel-and-gallery-norfolf-top2.jpg?version=6252024171434',
        'https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc=',
        'https://passport-cdn.kiwicollection.com/blog/drive/uploads/2020/10/The-Opposite-Houes-Atrium-694x390.jpg',
        'https://cdn.archilovers.com/projects/b_730_8435d855-ba54-4d09-af34-49eacf75615a.jpg',
        'https://www.pradoresort.com/wp-content/uploads/2022/09/prado_luxury_night_front_hotel_view-scaled.jpg',
        'https://thumbs.dreamstime.com/b/contemporary-private-art-gallery-luxury-hotel-lounge-interior-design-background-contemporary-private-art-gallery-luxury-297579413.jpg',
        'https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/172/2019/05/15025500/1218-AJS-Hotel-de-Coupole-Sapa-3840_HNQ_V02-HD.jpg'
    ];

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    // Auto-scroll functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 1500); // Auto slide every 3 seconds
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div>
            <div className={style.container}>
            <Nav />
            <div className={style.gallerycontainer}>
                <h1>HOTEL GALLERY</h1>

                <div className={style.gallerywrapper}>
                    <div
                        className={style.gallerygrid}
                        style={{
                            transform: `translateX(-${currentImageIndex * 100}%)`,
                            transition: 'transform 1s ease'
                        }}
                    >
                        {images.map((image, index) => (
                            <div key={index} className={style.galleryitem} onClick={() => handleImageClick(image)}>
                                <img src={image} alt={`Hotel ${index + 1}`} className={style.galleryimage} />
                            </div>
                        ))}
                    </div>
                </div>

                {selectedImage && (
                    <div className={style.modal} onClick={closeModal}>
                        <span className={style.close}>&times;</span>
                        <img className={style.modalcontent} src={selectedImage} alt="Selected Hotel View" />
                    </div>
                )}
            </div>
           
        </div>
        <Footer/>
        </div>
    );
};

export default Gallery1;
