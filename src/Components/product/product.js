import React from "react";
import style from "./Product.module.css";
import { useDispatch } from "react-redux";

import { addToCart, removeFromCart } from "../../Redux/Products/productAction";

const Product = () => {
  const dispatch = useDispatch();

  return (
    <div className={style.containerWrap}>
      <div className={style.cards}>
        <div className={style.container}>
          <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/f/e/femella-fj-3366a_1_b21cc198.jpg?rnd=20200526195200" />

          <div className={style.details}>
            <p>
              <span>Deatils:</span> Rust jerey Tie Up Midi Dress
            </p>
            <p>
              <span>Price:</span> $ 80
            </p>
            <p>
              <span>Discount:</span> 50% off
            </p>
            <p>
              <span>Size:</span> XS,S,M,L,XL,2XL
            </p>
            <div>
              <button className={style.view}>View</button>
              <button className={style.buttonWrap}>
                <button onClick={() => dispatch(addToCart())}>+</button>
                <p>Add to cart</p>
                <button onClick={() => dispatch(removeFromCart())}>-</button>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={style.cards}>
        <div className={style.container}>
          <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/b/l/black-georgette-dress_1_4fdce3a4.jpg?rnd=20200526195200" />

          <div className={style.details}>
            <p>
              <span>Deatils:</span> Label Shaurya Sanadhya
            </p>
            <p>
              <span>Price:</span> ₹2,250
            </p>
            <p>
              <span>Discount:</span> 10% off
            </p>
            <p>
              <span>Size:</span> XS,S,M,L,XL,2XL
            </p>
            <div>
              <button className={style.view}>View</button>
              <button className={style.buttonWrap}>
                <button onClick={() => dispatch(addToCart())}>+</button>
                <p>Add to cart</p>
                <button onClick={() => dispatch(removeFromCart())}>-</button>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={style.cards}>
        <div className={style.container}>
          <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/d/i/dillinger-dlfs18059nvy_1_31ca9548.jpg?rnd=20200526195200" />

          <div className={style.details}>
            <p>
              <span>Deatils:</span> Men's Navy Blue Solid T-shirt
            </p>
            <p>
              <span>Price:</span> ₹600
            </p>
            <p>
              <span>Discount:</span> 60% off
            </p>
            <p>
              <span>Size:</span> XS,S,M,L,XL,2XL
            </p>
            <div>
              <button className={style.view}>View</button>
              <button className={style.buttonWrap}>
                <button onClick={() => dispatch(addToCart())}>+</button>
                <p>Add to cart</p>
                <button onClick={() => dispatch(removeFromCart())}>-</button>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={style.cards}>
        <div className={style.container}>
          <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/e/w/ew2464_1_46d5689a.jpg?rnd=20200526195200" />

          <div className={style.details}>
            <p>
              <span>Deatils:</span> Clinch-X M Blue Running Shoes
            </p>
            <p>
              <span>Price:</span> ₹1,250
            </p>
            <p>
              <span>Discount:</span> 40% off
            </p>
            <p>
              <span>Size:</span> XS,S,M,L,XL,2XL
            </p>
            <div>
              <button className={style.view}>View</button>
              <button className={style.buttonWrap}>
                <button onClick={() => dispatch(addToCart())}>+</button>
                <p>Add to cart</p>
                <button onClick={() => dispatch(removeFromCart())}>-</button>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={style.cards}>
        <div className={style.container}>
          <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/m/2/m2141-navy_1.jpg?rnd=20200526195200" />

          <div className={style.details}>
            <p>
              <span>Deatils:</span> Spirit Hooded Solid Windcheater
            </p>
            <p>
              <span>Price:</span> ₹2,550
            </p>
            <p>
              <span>Discount:</span> 50% off
            </p>
            <p>
              <span>Size:</span> XS,S,M,L,XL,2XL
            </p>
            <div>
              <button className={style.view}>View</button>
              <button className={style.buttonWrap}>
                <button onClick={() => dispatch(addToCart())}>+</button>
                <p>Add to cart</p>
                <button onClick={() => dispatch(removeFromCart())}>-</button>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={style.cards}>
        <div className={style.container}>
          <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/3/3/33013448_1.jpg?rnd=20200526195200" />

          <div className={style.details}>
            <p>
              <span>Deatils:</span> Gold Kundan Tassel Earrings
            </p>
            <p>
              <span>Price:</span> ₹550
            </p>
            <p>
              <span>Discount:</span> 60% off
            </p>
            <p>
              <span>MRP:</span> ₹1,815Inclusive of all taxes
            </p>
            <div>
              <button className={style.view}>View</button>
              <button className={style.buttonWrap}>
                <button onClick={() => dispatch(addToCart())}>+</button>
                <p>Add to cart</p>
                <button onClick={() => dispatch(removeFromCart())}>-</button>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={style.cards}>
        <div className={style.container}>
          <img src="https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/j/w/jwj523_1.jpg?rnd=20200526195200" />

          <div className={style.details}>
            <p>
              <span>Deatils:</span> Rose Gold Mantra Band
            </p>
            <p>
              <span>Price:</span> ₹850
            </p>
            <p>
              <span>Discount:</span> 40% off
            </p>
            <p>
              <span>MRP:</span> ₹1,499Inclusive of all taxes
            </p>
            <div>
              <button className={style.view}>View</button>
              <button className={style.buttonWrap}>
                <button onClick={() => dispatch(addToCart())}>+</button>
                <p>Add to cart</p>
                <button onClick={() => dispatch(removeFromCart())}>-</button>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
