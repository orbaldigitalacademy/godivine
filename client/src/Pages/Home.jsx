import React, { useState } from "react";
import "./Home.css";

function Home() {
  const [openChat, setOpenChat] = useState(false);

  const phoneNumber = "2348127319882";

  const createWhatsAppLink = (message) => {
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div>

      {/* ================= HERO SECTION ================= */}
      <section
        className="hero"
        style={{
          backgroundImage: "url('/images/hero_bg.png')",
        }}
      >
        <div className="overlay"></div>

        <div className="section-container">
          <div className="hero-text">
            <h1>Luxury Catering for Unforgettable Events</h1>
            <p>
              Weddings • Birthdays • Corporate Events • Private Dinners • Graduations
            </p>

            <a
              href={createWhatsAppLink(
                "Hello, I want to book a catering service"
              )}
              className="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book your Event
            </a>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="services section">
        <h2>Our Signature Experience</h2>
        <p>
          From curated menus to flawless delivery, we bring elegance to every event.
        </p>

        <div className="service-grid">

          <div className="service-card">
            <div className="media">
              <img src="/images/Nig wedding.png" alt="Wedding Catering" />
            </div>
            <h3>Weddings</h3>
            <p>Celebrations Designed to Be Remembered.</p>
          </div>

          <div className="service-card">
            <div className="media">
              <video controls>
                <source src="/videos/Godivine.mp4" type="video/mp4" />
              </video>
            </div>
            <h3>Corporate Events</h3>
            <p>Elevated Dining for Distinguished Events.</p>
          </div>

          <div className="service-card">
            <div className="media">
              <img src="/images/Family Dinner.png" alt="Private Dining" />
            </div>
            <h3>Private Dining</h3>
            <p>Royal Family Dinner.</p>
          </div>

        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="gallery-preview section">
        <h2>EXPLORE OUR DISHES</h2>
        <p className="gallery-intro">
          A taste of elegance crafted for unforgettable experiences.
        </p>

        {/* ===== Nigerian Dishes ===== */}
        <div className="gallery-section">
          <h3 className="gallery-title">Traditional Nigerian Cuisine</h3>

          <div className="gallery-grid">

            <div className="gallery-card">
              <img src="/images/poundo.jpeg" alt="Pounded Yam" />
              <div className="gallery-content">
                <h4>Pounded Yam & Egusi</h4>
                <p>
                  Smooth pounded yam served with rich Egusi soup,
                  prepared with premium local ingredients.
                </p>
              </div>
            </div>

            <div className="gallery-card">
              <img src="/images/Egusi.jpeg" alt="Egusi Soup" />
              <div className="gallery-content">
                <h4>Egusi Special</h4>
                <p>
                  A deliciously seasoned melon soup garnished with assorted meats and fish.
                </p>
              </div>
            </div>

            <div className="gallery-card">
              <img src="/images/Okro.jpeg" alt="Okro Soup" />
              <div className="gallery-content">
                <h4>Fresh Okro Soup</h4>
                <p>
                  Freshly prepared okro soup packed with seafood and authentic flavors.
                </p>
              </div>
            </div>

            <div className="gallery-card">
              <img src="/images/bangaa.jpg" alt="Banga Soup" />
              <div className="gallery-content">
                <h4>Banga Delight</h4>
                <p>
                  Traditional palm fruit soup carefully prepared for a rich native taste.
                </p>
              </div>
            </div>

            <div className="gallery-card">
              <img src="/images/Amala-And-Ewedu.jpg" alt="Banga Soup" />
              <div className="gallery-content">
                <h4>Amala & Owedu Soup</h4>
                <p>
                  Traditional food made from yam flour with soup made from african sorel .
                </p>
              </div>
            </div>

            <div className="gallery-card">
              <img src="/images/edikaikong.jpg" alt="Banga Soup" />
              <div className="gallery-content">
                <h4>Edikaikong Soup</h4>
                <p>
                  Nutrient-packed Nigerian vegetable soup made with pumpkin leaves (ugwu), waterleaf, assorted meats, seafood, and palm oil.
                </p>
              </div>
            </div>

            <div className="gallery-card">
              <img src="/images/bitterleaff.jpg" alt="Banga Soup" />
              <div className="gallery-content">
                <h4>Bitter Leaf Soup</h4>
                <p>
                  Enjoy your pounded yam or fufu with our pecial Bitterleaf Soup, made with bitter leaves, 
                  assorted meats, fish, and cocoyam as thickener.
                </p>
              </div>
            </div>

            <div className="gallery-card">
              <img src="/images/Afang_Soup.jpg" alt="Banga Soup" />
              <div className="gallery-content">
                <h4>Afang Soup</h4>
                <p>
                  Afang Soup is a traditional Nigerian vegetable soup from the Efik and Ibibio people, 
                  made with Afang (Okazi) leaves, waterleaf, assorted meats, seafood, and palm oil.
                </p>
              </div>
            </div>

            <div className="gallery-card">
              <img src="/images/oha.jpg" alt="Banga Soup" />
              <div className="gallery-content">
                <h4>Afang Soup</h4>
                <p>
                   Enjoy your swallow with rich savory flavor and tender texture of oha soup. 
                </p>
              </div>
            </div>


          </div>
        </div>

        {/* ===== Rice Specials ===== */}
        <div className="gallery-section">
          <h3 className="gallery-title">Rice & Party Specials</h3>

          <div className="gallery-grid">

            <div className="gallery-card">
              <img src="/images/Jollof.jpeg" alt="Jollof Rice" />
              <div className="gallery-content">
                <h4>Classic Jollof Rice</h4>
                <p>
                  Smoky Nigerian jollof rice served with grilled chicken and salad.
                </p>
              </div>
            </div>

            <div className="gallery-card">
              <img src="/images/jollofrice2.jpeg" alt="Party Jollof" />
              <div className="gallery-content">
                <h4>Party Jollof Experience</h4>
                <p>
                  The perfect party rice with unforgettable aroma and flavor.
                </p>
              </div>
            </div>

            <div className="gallery-card">
              <img src="/images/plantain.jpeg" alt="Plantain" />
              <div className="gallery-content">
                <h4>Fried Plantain</h4>
                <p>
                  Golden crispy plantain perfectly paired with our signature meals.
                </p>
              </div>
            </div>

            <div className="gallery-card">
              <img src="/images/MoiMoi.jpeg" alt="Plantain" />
              <div className="gallery-content">
                <h4>Moi Moi</h4>
                <p>
                  Enjoy a savory steamed bean pudding with fish, crayfish, and boiled eggs, 
                </p>
              </div>
            </div>

            <div className="gallery-card">
              <img src="/images/ricestew.jpg" alt="Rice & Stew" />
              <div className="gallery-content">
                <h4>Rice and Stew with Fried Plaintain</h4>
            
              </div>
            </div>

            <div className="gallery-card">
              <img src="/images/pasta.jpg" alt="Rice & Stew" />
              <div className="gallery-content">
                <h4>Jollof Sphagetti</h4>
            
              </div>
            </div>

          </div>
        </div>

        {/* ===== Soups & Sides ===== */}
        <div className="gallery-section">
          <h3 className="gallery-title">Soups, Seafood & Sides</h3>

          <div className="gallery-grid">

            <div className="gallery-card">
              <img src="/images/Fish.jpeg" alt="Grilled Fish" />
              <div className="gallery-content">
                <h4>Grilled Fish</h4>
                <p>
                  Expertly grilled fish infused with African spices and herbs.
                </p>
              </div>
            </div>

            <div className="gallery-card">
              <img src="/images/MoiMoi.jpeg" alt="Moi Moi" />
              <div className="gallery-content">
                <h4>Moi Moi Delight</h4>
                <p>
                  Soft and flavorful bean pudding prepared fresh for every event.
                </p>
              </div>
            </div>

            <div className="gallery-card">
              <img src="/images/Vegetable.jpeg" alt="Vegetable Soup" />
              <div className="gallery-content">
                <h4>Vegetable Soup</h4>
                <p>
                  Nutritious vegetable soup made with fresh leaves and seafood.
                </p>
              </div>
            </div>

            <div className="gallery-card">
              <img src="/images/iseiwu.jpeg" alt="Isi Ewu" />
              <div className="gallery-content">
                <h4>Isi Ewu Special</h4>
                <p>
                  A luxurious traditional delicacy prepared with authentic eastern spices.
                </p>
              </div>
            </div>

             <div className="gallery-card">
              <img src="/images/meat.jpeg" alt="Assorted Meat" />
              <div className="gallery-content">
                <h4>Assorted Meat Platter</h4>
                <p>
                  Premium assorted meats seasoned and grilled to perfection.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="testimonials section">
        <h2>What Our Clients Say</h2>

        <div className="testimonial-slider">
          <div className="testimonial-track">

           <div className="testimonial-card">
              <img 
                src="/images/myimage.jpg" 
                alt="Sarah M." 
                className="testimonial-image"
              />
              <p>
                Absolutely flawless and professional services. 
                The timely delivery was remarkable. <br />
                The team handled everything smoothly, and the meals were delicious. <br />
                I didn’t have to worry about a thing.
              </p>
              <div className="client">
                <h4>Moses Kor.</h4>
              </div>
            </div>

            <div className="testimonial-card">
              <img 
                src="/images/basseyimage.jpg" 
                alt="Kor M." 
                className="testimonial-image"
              />
              <p>I give you guys 5 stars as your services are Professional and elegant.<br/>
                The food was absolutely outstanding—from presentation to taste. <br/>
                Every guest kept asking who handled the catering. It truly elevated our event.</p>
              <div className="client">
                <h4>Bassey Friday.</h4>
              </div>
            </div>

            <div className="testimonial-card">
              <img 
                src="/images/judiimage.jpg" 
                alt="Kor M." 
                className="testimonial-image"
              />
              <p>You made my daughter's graduation party a memorable one. Keep it up.</p>
              <div className="client">
                <h4>Judy Timothy.</h4>
              </div>
              
            </div>

            <div className="testimonial-card">
              <img 
                src="/images/doo.jpg" 
                alt="Kor M." 
                className="testimonial-image"
              />
              <p>From start to finish, everything was perfect. <br/>
                The dishes were fresh, beautifully served, and full of flavor. <br/>
                I’ll definitely be using them again.</p>
              <div className="client">
                <h4>Dorcas Moses.</h4>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section
        className="cta section"
        style={{
          backgroundImage: "url('/images/cta-bg.jpg')",
        }}
      >
        <div className="cta-overlay"></div>

        <div className="cta-content">
          <h2>Let’s Create Something Extraordinary</h2>

          <a
            href={createWhatsAppLink(
              "Hello, I want to book an event with you"
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn">Book your Event</button>
          </a>
        </div>
      </section>

      {/* ================= SMART WHATSAPP CHAT ================= */}
      <div className="chat-container">

        {openChat && (
          <div className="chat-box">
            <h4>Chat with us 👋</h4>
            <p>Select your event:</p>

            <a href={createWhatsAppLink("Hello, I want catering for a Wedding")} target="_blank" rel="noreferrer">
              Wedding 💍
            </a>

            <a href={createWhatsAppLink("Hello, I want catering for a Birthday")} target="_blank" rel="noreferrer">
              Birthday 🎂
            </a>

            <a href={createWhatsAppLink("Hello, I need catering for a Corporate Event")} target="_blank" rel="noreferrer">
              Corporate 🏢
            </a>

            <a href={createWhatsAppLink("Hello, I want a Private Dinner")} target="_blank" rel="noreferrer">
              Private 🍽️
            </a>
          </div>
        )}

        <div className="chat-toggle" onClick={() => setOpenChat(!openChat)}>
          <i className="fab fa-whatsapp"></i>
        </div>

      </div>

    </div>
  );
}

export default Home;