import React, { useState } from 'react';
import style from './shop.module.css';
import Nav from '../Nav';
import Footer from '../Footer';

const Shop = () => {
  const [products] = useState([
    {
      id: 1,
      name: 'Luxury Spa Set',
      price: '$120',
      image: 'https://i.etsystatic.com/17038291/r/il/18dbf6/5072755208/il_570xN.5072755208_sqt6.jpg',
      description: 'A premium spa set for ultimate relaxation.',
    },
    {
      id: 2,
      name: 'Premium Bathrobe',
      price: '$85',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbsh9ZteAbqGsOEkTGKhkV_6DRp2knNbwsaw&s',
      description: 'Luxurious bathrobe made from 100% cotton.',
    },
    {
      id: 3,
      name: 'Gourmet Chocolates',
      price: '$45',
      image: 'https://www.thechocolateseason.com/cdn/shop/collections/product2.png?v=1675797906',
      description: 'Delicious hand-crafted & precious chocolates.',
    },
    {
      id: 4,
      name: 'Fine Wine Selection',
      price: '$150',
      image: 'https://imgmedia.lbb.in/media/2020/08/5f4d18893383a80719bae708_1598888073192.jpg',
      description: 'A curated selection of the finest & wines.',
    },
  ]);

  return (
    <div>
      <div className={style.container}>
        <Nav/>
        <div className={style.shopContainer}>
      <h1 className={style.shopTitle}>Luxury Hotel Shop</h1>
      <p className={style.shopDescription}>
        Explore exclusive products available only at our luxury hotel. Treat yourself or your loved ones to the finest.
      </p>
      <div className={style.productsGrid}>
        {products.map((product) => (
          <div key={product.id} className={style.productCard}>
            <img src={product.image} alt={product.name} className={style.productImage} />
            <div className={style.productDetails}>
              <h2 className={style.productName}>{product.name}</h2>
              <p className={style.productDescription}>{product.description}</p>
              <p className={style.productPrice}>{product.price}</p>
              <button className={style.addToCartButton}>Add to Cart</button>
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

export default Shop;
