import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import style from "./home.module.css";
import { Link } from 'react-router-dom';

// Static Data outside the component
const staticData = [
  { id: "ROOMS", title: "ALWAYS TRY A BEST OPTION", img: "https://5.imimg.com/data5/SELLER/Default/2022/5/HV/ZZ/LI/106321217/luxury-bedroom-interior-design-service.jpg", description: "Luxury hotels are designed to be a haven for the senses and an oasis of luxury. The features that matter most in a hotel include luxury, comfort, and convenience." },
  { id: "DINING", title: "ALWAYS TRY A BEST OPTION", img: "https://png.pngtree.com/thumb_back/fw800/background/20231005/pngtree-modern-interior-design-of-the-luxurious-hotel-restaurant-featuring-soft-armchairs-image_13562535.png", description: "Luxury hotels are designed to be a haven for the senses and an oasis of luxury. The features that matter most in a hotel include luxury, comfort, and convenience." },
  { id: "TERRACE", title: "ALWAYS TRY A BEST OPTION", img: "https://media.cntraveler.com/photos/55ce3b5c37284fb1079c9de7/master/pass/quin-hotel-terrace-new.jpg", description: "Luxury hotels are designed to be a haven for the senses and an oasis of luxury. The features that matter most in a hotel include luxury, comfort, and convenience." },
  { id: "CAFETERIA", title: "ALWAYS TRY A BEST OPTION", img: "https://cdn.trendhunterstatic.com/thumbs/307/perth-bakery_9e48808a.jpeg?auto=webp", description: "Luxury hotels are designed to be a haven for the senses and an oasis of luxury. The features that matter most in a hotel include luxury, comfort, and convenience." },
  { id: "POOL", title: "ALWAYS TRY A BEST OPTION", img: "https://i.insider.com/5cb775fa2730ca67f4263bb8?width=600&format=jpeg&auto=webp", description: "Luxury hotels are designed to be a haven for the senses and an oasis of luxury. The features that matter most in a hotel include luxury, comfort, and convenience." },
  { id: "NIGHT VIEW", title: "ALWAYS TRY A BEST OPTION", img: "https://www.shutterstock.com/image-photo/night-view-huangpu-river-balcony-600w-1771876925.jpg", description: "Luxury hotels are designed to be a haven for the senses and an oasis of luxury. The features that matter most in a hotel include luxury, comfort, and convenience." },
  { id: "PARKING LOUNGE", title: "ALWAYS TRY A BEST OPTION", img: "https://i.pinimg.com/736x/91/f9/62/91f96218a64f97bf824fefda8619679b.jpg", description: "Luxury hotels are designed to be a haven for the senses and an oasis of luxury. The features that matter most in a hotel include luxury, comfort, and convenience." },
  { id: "PARK", title: "ALWAYS TRY A BEST OPTION", img: "https://www.yhataw.com/wp-content/uploads/2021/02/CentralParkFlowerValley-02-900x600.jpg", description: "Luxury hotels are designed to be a haven for the senses and an oasis of luxury. The features that matter most in a hotel include luxury, comfort, and convenience." }
];

export default function RecipeReviewCard() {
  const [data, setData] = React.useState([]);

  // Fetching dynamic data from API
  React.useEffect(() => {
    fetch('http://localhost:5000/api/data')
      .then((response) => response.json())
      .then((fetchedData) => setData(fetchedData))
      .catch((error) => {
        console.error('Error fetching data:', error);
        // Use static data if API fetch fails
        setData(staticData);
      });
  }, []);

  // Handle the favorite icon click
  const handleFavoriteClick = (e) => {
    const icon = e.currentTarget;
    icon.style.backgroundColor = "#beae88"; // Change the icon's background color
  };

  return (
    <div className={style.card} style={{display:"flex",flexWrap:"wrap"}}>
      {data.map((item) => (
        <Card
          key={item.id} // Add key prop
          sx={{ maxWidth: 300, margin: "25px 35px", backgroundColor: "rgba(255, 255, 255, 0.171)", color: "rgb(250, 241, 187)", fontWeight: "700", boxShadow: "0px 0px 10px white" }}
          className={style.card1}
        >
          <CardHeader
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={item.id}
            subheader={item.title}
          />
          <CardMedia
            component="img"
            height="180"
            image={item.img}
            alt={item.id}
          />
          <CardContent>
            <Typography variant="body2" color="#beae88">
              {item.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites" onClick={handleFavoriteClick}>
              <FavoriteIcon  style={{color:"white"}} />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon style={{color:"#beae88"}} />
            </IconButton>
            <button id={style.Btns}><Link to={"/book"} style={{ "textDecoration": "none", "color": "Black" }}>BOOK NOW</Link></button>

          </CardActions>
        </Card>
      ))}
    </div>
  );
}
