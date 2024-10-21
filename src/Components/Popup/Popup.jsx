import React, { useState } from 'react';
import style from './popup.module.css';
import { Link } from 'react-router-dom';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [email, setEmail] = useState('');

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your discount code will be sent to: ${email}`);
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className={style.popupoverlay} onClick={handleClose}>
          <div className={style.popupbox} onClick={(e) => e.stopPropagation()}>
            <button className={style.closebtn} onClick={handleClose}><Link to={"/book"} style={{textDecoration:"none",textAlign:"center"}}>X</Link></button>
            <h2>Get 20% Off Your First Order</h2>
            <p>Enter your email. Get your 20% off code. Be the first to know about all things!</p>
            <form onSubmit={handleSubmit} className={style.emailform}>
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={handleEmailChange}
                required
                className={style.emailinput}
              />
              <button type="submit" className={style.submitbtn}>Get My 20% Off</button>
            </form>
           
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
