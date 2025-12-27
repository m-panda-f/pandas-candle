import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrush,
  faBox,
  faWandMagicSparkles,
  faPen,
} from "@fortawesome/free-solid-svg-icons";

function About() {
    const valueProps = [
      {
        icon: <FontAwesomeIcon icon={faBrush} />,
        title: "Hand-designed",
        description:
          "Each candle is a unique piece of art, crafted with personal attention.",
      },
      {
        icon:<FontAwesomeIcon icon={faBox} />,
        title: "Small-batch",
        description:
          "Ensuring the highest quality and freshness in every pour.",
      },
      {
        icon :<FontAwesomeIcon icon={faWandMagicSparkles} />,
        title: "Indian Aesthetic",
        description: "Inspired by the vibrant culture and traditions of India.",
      },
      {
        icon:<FontAwesomeIcon icon={faPen} />,
        title: "Customizable",
        description:
          "Tailor your candles for events, gifts, or your personal sanctuary.",
      },
    ];
  return (
    <div>
      <section className="bg-[#F9F7F2] py-16 sm:py-24">
        <div className="about-content container mx-auto max-w-4xl px-4">
          <h2 className="about-title font-headline">About Panda's Candle</h2>
          <p className="about-desc">
            At Panda's Candle, we believe that a candle is more than just a
            source of light; it's an experience that ignites the senses and
            transforms spaces. Our candles are meticulously handcrafted in small
            batches, ensuring each one is a unique work of art. Inspired by the
            rich aesthetics of Indian culture, our designs blend traditional
            motifs with contemporary elegance. We use only the finest
            ingredients, including natural waxes and premium fragrances, to
            create candles that not only look beautiful but also burn cleanly
            and emit captivating scents. Whether you're looking to create a cozy
            ambiance at home or searching for the perfect gift, Panda's Candle
            offers a touch of luxury and warmth for every occasion.
          </p>
        </div>

        <div className="why-us">
          <div className="boxes px-4">
            {valueProps.map((prop) => (
                <div key={prop.title} className="prop-card">
                    <div className="icon-wrapper">
            {prop.icon}
          </div>
                <h3 className="prop-title">{prop.title}</h3>
                <p className="prop-desc">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About
