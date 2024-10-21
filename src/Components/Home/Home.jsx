import React from 'react'
import Card from "./Card"
import { Link } from 'react-router-dom'
import style from "./home.module.css"
import vdo from "../../Assets/welcome.mp4"
import Nav from "../Nav"
// import 

import Button from '@mui/material/Button';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import Footer from '../Footer'

const MyCollection = [
    {

        imgPath:
            "https://thumbs.dreamstime.com/b/luxury-hotel-4480742.jpg",
    },
    {

        imgPath:
            "https://plus.unsplash.com/premium_photo-1661923725782-f73c990fbddf?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bHV4dXJ5JTIwaG90ZWx8ZW58MHx8MHx8fDA%3D",
    },
    {
        imgPath: "https://i0.wp.com/belairhoteltremblant.com/wp-content/uploads/2019/12/dome-rental-tremblant.jpg?ssl=1"
    },
    {
        imgPath:
            "https://media.istockphoto.com/id/1319453433/photo/modern-luxury-house-with-private-infinity-pool-in-dusk.jpg?s=612x612&w=0&k=20&c=WDWGyEZfDp8Qi2OI6m9RrNPHdnj5EPVBLvVi0IP7K74=",
    },
    {
        imgPath: "https://c4.wallpaperflare.com/wallpaper/74/457/102/life-room-interior-home-wallpaper-preview.jpg"
    },
    {
        imgPath: "https://e1.pxfuel.com/desktop-wallpaper/819/1023/desktop-wallpaper-luxury-hotel-hotel-lobby.jpg"
    },
    {
        imgPath: "https://w0.peakpx.com/wallpaper/748/969/HD-wallpaper-luxury-hotel-lobby-five-star-hotel-hotel-lobby-luxury-hotel.jpg"
    },

    {
        imgPath: "https://wallpaper.forfun.com/fetch/d4/d498d1f18d8c2828c952b5078e303d15.jpeg"
    },
    {
        imgPath: "https://png.pngtree.com/thumb_back/fh260/background/20220311/pngtree-european-restaurant-hotel-room-restaurant-gold-image_990184.jpg"
    },

    {
        imgPath: "https://wallpapers.com/images/hd/the-candler-hotel-luxury-house-atlanta-ixlu5drz9qhjutkb.jpg"
    },
];
const Home = () => {
    const CollectionSize = MyCollection.length;
    const theme = useTheme();
    const [index, setActiveStep] = React.useState(0);

    // Function to go to the next picture
    const goToNextPicture = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    return (
        <div className={style.hotel}>
            
            <Nav/>
            <section className={style.part1}>
                <div className={style.overplay}></div>
                <video src={vdo} autoPlay loop muted />
                <article className={style.content}>
                    <h2 style={{color:"#beae88"}}>Welcome to</h2>
                    <h1>UTSOVA</h1>
                    <button><Link to={"/book"} style={{ "textDecoration": "none", "color": "Black" }}>BOOK NOW</Link></button>
                </article>
            </section>
            <section>
                <Card/>
            </section> 
            <section className={style.part2}>
                <div className={style.overplay}></div>

                <img src="https://png.pngtree.com/thumb_back/fh260/back_pic/00/09/35/05562e22f650e30.jpg" alt="" />
                <h1>ELUCIDATION</h1>
                <article className={style.content}>
                    <div>
                        <h1>LUXURY HOTEL ,ARAYA </h1>
                        <h4>NEAR XYZ PARK</h4>

                        <p>Araya Hotel is the modern reinterpretation of the Colony
                            Arcade—a former hat factory and Prohibition-era tea room.
                            More than 100 years of Garment District history are on display
                            at our luxury hotel near Bryant Park. With an unprecedented degree
                            of precision, much like the milliners stitching before us, we
                            transformed a factory building into stylish loft rooms with
                            soaring ceilings, the nostalgic Parker & Quinn restaurant, and
                            our fashionable Refinery Rooftop bar. Our property descriptions
                            aim to allow any visitor to make an informed decision on whether
                            the hotel is an appropriate choice for their needs. For more information,
                            please see our Accessibility Statement</p>
                    </div>
                    <button>READ MORE <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg></button>
                </article>
            </section>
            
            <section className={style.part3}>
                <div
                    style={{
                        marginLeft: "20%",

                    }}
                >
                    <h2>A PLACE TO HANG YOUR HAT</h2>
                    <div
                        style={{
                            maxWidth: 900,
                            flexGrow: 1,
                            // maxHeight:100,

                        }}
                    >
                        <Paper
                            square
                            elevation={0}
                            style={{

                                // height: 90,
                                display: "flex",
                                paddingLeft: theme.spacing(4),
                                backgroundColor: theme.palette.background.default,
                                alignItems: "center",
                            }}
                        >
                            <Typography>{MyCollection[index].label}</Typography>
                        </Paper>
                        <img
                            src={MyCollection[index].imgPath}
                            style={{
                                height: 450,
                                width: "100%",
                                maxWidth: 900,
                                display: "block",
                                overflow: "hidden",
                                // marginLeft:"-300px",
                            }}
                            alt={MyCollection[index].label}
                        />
                        <MobileStepper
                            // variant="text"
                            position="static"
                            index={index}
                            steps={CollectionSize}
                            style={{ backgroundColor: "inherit", color: "white" }}
                            nextButton={
                                <Button
                                    size="small"
                                    onClick={goToNextPicture}
                                    disabled={index === CollectionSize - 1}

                                >
                                    Next
                                    {theme.direction !== "rtl" ? (
                                        <KeyboardArrowRight />
                                    ) : (
                                        <KeyboardArrowLeft />
                                    )}
                                </Button>
                            }
                        />
                    </div>
                </div>
            </section>        




            <Footer/>
        </div>
    )
}

export default Home