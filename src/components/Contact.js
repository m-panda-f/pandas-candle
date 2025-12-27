import React from 'react'

function Contact() {
  return (
    <div>
      <section className="contact-section">
        <div className="contact-right">
          <h2>Create Your Signature Scent</h2>
          <p>
            Elevate your events, corporate gifts, or personal collection with
            custom candle orders. We offer bulk pricing, personalized labels,
            and unique scent-blending for orders of 20 or more. Perfect for
            weddings, client appreciation, or creating a unique ambiance for
            your brand.
          </p>
          <button className="whatsapp-btn">
            <a
              href="https://wa.me/919916588232"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Discuss Customer Orders</span>
            </a>
          </button>
        </div>
        <div className="contact-left">
          <img src={require("../assets/bestsell_3.jpg")} alt="" />
        </div>
      </section>
    </div>
  );
}

export default Contact
