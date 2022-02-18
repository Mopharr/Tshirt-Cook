import React, { useState, useContext } from "react";
import UserContext from "Context";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import style from "../style/shop.css";
import '../style/shop.css'
import "../style/product.css";
import NavNew from '../components/NavNew'
import Section from "../components/Section";
import Footer from "components/Footer";

  const Shop = () => {
    const [category, setCategory] = useState(false)
    const [price, setPrice] = useState(false)
    const [allArtwork, setAllArtwork] = useState(false)
  
    const showCategory = () => setCategory(category)
    const showPrice = () => setPrice(price)
    const showAllArtwork = () => setAllArtwork(!allArtwork)
    
    const { addToCart, product } = useContext(UserContext);
  // console.log(product)
  
    return (
      <>
        <NavNew />
        <Section />
        <div className='shop'>
          <div className="shop_overlay">
            <div className="shop_inner">
              <div className="shop_sidebar">
                <aside>
                  <h2>filters</h2>
                  <div className="items">
                    <ul>
                      <li>
                        <div className="colapse">
                          <button onClick={showCategory}>
                            <span className="item_name">category</span>
                            <span></span>
                          </button>
                          <div className={category ? 'colapse_inner' : 'colapse_innerN'}>
                            <ul>
                              <li className="sub_items">
                                <button className="item_name">
                                  <span>All categories</span>
                                </button>
                                <ul>
                                  <li>
                                    <button className="inner_items">
                                      <span>Clothing</span>
                                      <span>Kids and Babies</span>
                                      <span>Stickers</span>
                                      <span>Kids and Babies</span>
                                      <span>Wall Art</span>
                                      <span>Stationery & Office</span>
                                      <span>Accessories</span>
                                      <span>Home & Living</span>
                                    </button>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="colapse">
                          <button onClick={showPrice}>
                            <span className="item_name">price</span>
                            <span></span>
                          </button>
                          <div className={price ? 'colapse_inner' : 'colapse_innerN'}>
                            <ul className="items_input">
                              <li>
                                <input type="checkbox" />
                                <span>$</span>
                              </li>
                              <li>
                                <input type="checkbox" />
                                <span>$$</span>
                              </li>
                              <li>
                                <input type="checkbox" />
                                <span>$$$</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="colapse">
                          <button onClick={showAllArtwork}>
                            <span className="item_name">artwork medium</span>
                            <span></span>
                          </button>
                          <div className={allArtwork ? 'colapse_inner' : 'colapse_innerN'}>
                            <ul className="items_input">
                              <li>
                                <input type="radio" />
                                <span>all medium</span>
                              </li>
                              <li>
                                <input type="radio" />
                                <span>design & illustration</span>
                              </li>
                              <li>
                                <input type="radio" />
                                <span>digital art</span>
                              </li>
                              <li>
                                <input type="radio" />
                                <span>drawing</span>
                              </li>
                              <li>
                                <input type="radio" />
                                <span>painting & mixed media</span>
                              </li>
                              <li>
                                <input type="radio" />
                                <span>photography</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </aside>
              </div>
              <div className="shop-main">
                <div className="shop-header">
                  <h4>Sports</h4>
                  <h4>Shirt</h4>
                  <h4>Movies</h4>
                  <h4>Music</h4>
                  <h4>Band</h4>
                </div>
                <h2 className="shop-title">Shop
                  <span>{product.length} Results</span>
                </h2>
                <div className="card-container">
                {product.map((item, index) => (
                  <div className='shop-card'>
                    <div className='shop-card-image'>
                        <img src={item.image.url} alt="" />
                    </div>
                    <p>{item.name}</p>
                    <div class="pricing">
                    <p className="price">{item.price.formatted_with_symbol}</p>
                  </div>
                </div>
              ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  };
  
  export default Shop;
  