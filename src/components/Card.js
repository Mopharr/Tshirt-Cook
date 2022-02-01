// import "../style/product.css";

// const Card = ({ name, image, price, cardStyle, id, addToCart }) => {
//   return (
//     <article className={cardStyle}>
//       <div
//         className="card"
//       >
//         <div class="img-div">
//           <img src={image.url} alt="" />
//         </div>
//         <div class="text-container">
//           <h2 class="item-name">{name}</h2>
//           <div class="pricing-and-cart">
//             <div class="pricing">
//               <p className="price">Price: {price.formatted_with_symbol}</p>
//             </div>
//             <button
//               style={{ fontSize: "1.4em", cursor: "pointer" }}
//               onClick={() => {
//                 addToCart(id, 1);
//               }}
//             >
//               Add to cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// };

// 


const Card = ({ name, image, price, cardStyle, id, addToCart }) => {
    return (
      <article className={cardStyle}>
        <div
          className="card"
        >
        <div class="img-div">
                  <img src={image.url} alt="" />
                </div>
                <div class="text-container">
                  <h2 class="item-name">{name}</h2>
                  <div class="pricing-and-cart">
                    <div class="pricing">
                      <p className="price">Price: {price.formatted_with_symbol}</p>
                    </div>
                    <button
                      style={{ fontSize: "1.4em", cursor: "pointer" }}
                      onClick={() => {
                        addToCart(id, 1);
                      }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
        </div>
      </article>
    );
  };
  
  export default Card;