import React from 'react';
import Card from '../Card/Card';

import "./FeaturedProducts.css";

const FeaturedProducts = ( {type} ) => {

  const data = [
    {
      id: 1,
      img: "https://m.media-amazon.com/images/I/912xUsDqhpL._AC_UL1500_.jpg",
      img2: "https://m.media-amazon.com/images/I/91-E5gC8psL._AC_UL1500_.jpg",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://handcmediastorage.blob.core.windows.net/productimages/CO/COPDB274-E30-156088-800px-1040px.jpg",
      img2: "https://i.pinimg.com/736x/1a/8e/7b/1a8e7bdcf5a9d564471309e2b49dbe91.jpg",
      title: "Coat",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://britishretro.co.uk/wp-content/uploads/2019/08/Lindsay-tartan-skirt.jpg",
      img2: "https://britishretro.co.uk/wp-content/uploads/2023/01/navy-check-50s-full-circle-bonny-skirt-001.jpg",
      title: "Skirt",
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: "https://img.ltwebstatic.com/images3_pi/2022/03/07/164662282689e8c1b9b90b88aca532b0f9e9e62664.webp",
      img2: "https://images.asos-media.com/products/nali-raffia-fringe-trim-sun-hat-in-natural/202032665-1-natural",
      title: "Hat",
      oldPrice: 19,
      price: 12,
    },



  ]
  return (
    <div className='featuredProducts'>
      <div className="top">
        <h1>{type} Products</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
            optio, eaque rerum! Provident similique accusantium nemo autem.</p>
      </div>
      <div className="bottom">
          {
            data.map(item=>(
              <Card item={item}key={item.id}/>
            ))
          }
      </div>
    </div>
  )
}

export default FeaturedProducts
