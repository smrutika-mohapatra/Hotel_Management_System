import React from 'react';
import style from './topBar.module.css';

const TopBar = () => {
  return (
    <div className={style.topbar}>
      <input type="text" placeholder="Search..." className={style.searchbar}/>
      <div className={style.profile}>
        <img src="https://w7.pngwing.com/pngs/409/922/png-transparent-coloradd-color-blindness-colored-pencil-capelo-pencil-color-eye-thumbnail.png" alt="profile" />
        <span>USER</span>
      </div>
    </div>
  );
};

export default TopBar;
