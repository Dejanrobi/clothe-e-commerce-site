import React from 'react'
import { Link } from 'react-router-dom';

import './Categories.css';

const Categories = () => {
  return (
    <div className="categories">
        <div className="col">
            <div className="row">
                <img src="https://i0.wp.com/thebestjacket.com/wp-content/uploads/2022/11/Mens-Black-Plane-Simple-Biker-Leather-Jacket-005.webp?fit=800%2C800&ssl=1" alt="" />
                <button>                  
                    <Link className="link" to="/products/1">Sale</Link>
                </button>
            </div>
            <div className="row">
                <img src="https://i.insider.com/5a42d230430d03f1138b45fe?width=700" alt="" />
                <button>                  
                    <Link className="link" to="/products/1">Women</Link>
                </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
                <img src="https://static.wixstatic.com/media/68b82084ddfa4987aa7ffe3e1d0847f0.jpg/v1/fill/w_640,h_436,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/68b82084ddfa4987aa7ffe3e1d0847f0.jpg" alt="" />
                <button>                  
                    <Link className="link" to="/products/1">New Season</Link>
                </button>

            </div>
                
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <img src="https://www.instyle.com/thmb/EMeMmp7gV5ZC-QgM9f-7R_iLSr0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gettyimages-539573922-2000-a03885527cf14bb9b1719a5812fb1d26.jpg" alt="" />
                        <button>                  
                            <Link className="link" to="/products/1">Men</Link>
                        </button>

                    </div>
                    
                </div>
                <div className="col">
                    <div className="row">
                        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/classic-accessories-1516305397.jpg" alt="" />
                        <button>                  
                            <Link className="link" to="/products/1">Accessories</Link>
                        </button>

                    </div>
                    
                </div>
            </div>
            <div className="row">
                <img src="https://cdn.mos.cms.futurecdn.net/MnYDgWsfRgNtrtTXwdUBJ5-1200-80.jpg" alt="" />
                <button>                  
                    <Link className="link" to="/products/1">shoes</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Categories
