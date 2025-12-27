import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import "./styles/home.css";
// import Navbar from "./components/Navbar";
import { useRef } from "react";
function App() {
  const about = useRef(null);
  const home = useRef();
  const contact = useRef(null);
  const products = useRef(null);
 
  return (
    <div className="App">
      <Navbar home={home} about={about} contact={contact} products={products} />
      <section className="hero-section" ref={home}>
        <img
          src={require("./assets/bg-image.jpg")}
          alt="Premium Candles Background"
          className="bg-image"
        />

        <div className="container max-w-4xl space-y-6">
          <h1 className="image-title">
            Glow with Intention, Shine with Lavish
          </h1>
          <p className="image-subtitle">
            Experience the artistry of hand-designed, small-batch candles
            inspired by rich Indian aesthetics.
          </p>
          <button className="whatsapp-btn">
            <a
              href="https://wa.me/919916588232/?text=Hello%2C%20I%20would%20like%20to%20place%20an%20order%20for%20your%20candles."
              target="_blank"
              rel="noopener noreferrer"
            >
              Order on WhatsApp
            </a>
          </button>
        </div>
      </section>
      <section className="about" ref={about}>
        <About />
      </section>
      <section className="products" ref={products}>
        <Product />
      </section>
      <section className="contact" ref={contact}>
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
