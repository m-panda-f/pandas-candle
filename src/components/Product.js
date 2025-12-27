import React from "react";
import bestSellImg from "../assets/bestsell_1.jpg";
import bestSellImg2 from "../assets/bestsell_2.jpg";
import bestSellImg3 from "../assets/bestsell_3.jpg";
import bestSellImg4 from "../assets/bestsell_4.jpg";
function Product() {
  const items = [
    {
      icon: bestSellImg,
      title: "Aura Pillar & Bubble Set",
      price: "₹450 (per set)",
    },
    {
      icon: bestSellImg2,
      title: "Royal Rose Oud",
      price: "₹1,200 (premium jar)",
    },
    {
      icon: bestSellImg3,
      title: "Daisy Bloom Collection",
      price: "₹350 (per unit)",
    },
    {
      icon: bestSellImg4,
      title: "Sweetheart Rose Infusion",
      price: "₹850 (Decorative Jar)",
    },
  ];
  return (
    <div>
      <section className="best-sellers ">
        <div className="container">
          <div className="">
            <h2 className="about-title">Our Best Sellers</h2>
          </div>

          <div className="card-container">
            {items.map((item, index) => (
              <div className="product-card" key={index}>
                <div className="card-image-wrapper">
                  <img src={item.icon} alt={item.title} />
                  <div className="badge">Best Seller</div>
                </div>
                <div className="card-details">
                  <h3>{item.title}</h3>
                  <p>{item.price}</p>
                  <button className="order-btn">
                    <a
                      href={`https://wa.me/919916588232?text=Hello%2C%20I%20am%20interested%20in%20the%20*${encodeURIComponent(
                        item.title
                      )}*%20candle.Which%20is%20priced%20at*%20${encodeURIComponent(
                        item.price
                      )}*.%20Thank%20you!`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Order Yours
                    </a>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Product;
