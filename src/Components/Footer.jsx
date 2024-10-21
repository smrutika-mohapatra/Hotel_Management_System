import React from 'react'
import "./footer.module.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import XIcon from '@mui/icons-material/X';
import { Typography } from '@mui/material';
import Logo from "../Assets/logo.png"

const Footer = () => {
  return (
    <div>
      <footer>

        <article>
          <div>
            <img src={Logo} alt="" srcset="" height={"70px"} style={{ width: "80px" }} />
          </div>
          <div>
            <Typography color="initial" style={{color:"#beae88"}}>
              Copyright ©2022. [] Limited
            </Typography>
          </div>

          <div>
            <ul>
              <li><InstagramIcon /></li>
              <li><FacebookIcon /></li>
              <li><YouTubeIcon /></li>
              <li><LinkedInIcon /></li>
              <li><PinterestIcon /></li>
              <li><XIcon /></li>

            </ul>
          </div>
        </article>
      </footer>
    </div>
  )
}

export default Footer