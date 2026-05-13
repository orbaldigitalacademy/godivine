import { useState } from "react";
import "./Gallery.css";

function Gallery() {
  // Gallery Data
  const galleryItems = [
    
    { type: "image", src: "/images/Poundo.jpeg" },
    { type: "image", src: "/images/Vegetable.jpeg" },
    { type: "image", src: "/images/MoiMoi.jpeg" },
    { type: "image", src: "/images/Okro.jpeg" },
    { type: "image", src: "/images/Egusi.jpeg" },
    { type: "image", src: "/images/image2.jpg" },
    { type: "image", src: "/images/Banga.jpeg" },
    { type: "image", src: "/images/Fish.jpeg" },
    { type: "image", src: "/images/meat.jpeg" },
    { type: "image", src: "/images/Jollof.jpeg" },
    { type: "image", src: "/images/Jollofrice2.jpeg" },
    { type: "image", src: "/images/iseiwu.jpeg" },
    { type: "image", src: "/images/plantain.jpeg" },
    { type: "image", src: "/images/friedPlantain.jpg" },
    { type: "image", src: "/images/VegeSauce.jpg" },
    { type: "image", src: "/images/Efo.jpg" },
    { type: "image", src: "/images/FishRice.jpg" },
    { type: "image", src: "/images/image1.jpg" },
    { type: "image", src: "/images/Amara.jpg" },
    { type: "image", src: "/images/Bitterleaf.jpg" },
    { type: "video", src: "/videos/Godivine.mp4" },
  ];

  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="gallery-section">
      <h2 className="gallery-title">Our Gallery</h2>

      {/* Gallery Grid */}
      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => setSelectedItem(item)}
          >
            {item.type === "image" ? (
              <img src={item.src} alt="Gallery item" />
            ) : (
              <div className="video-wrapper">
                <video
                  src={item.src}
                  muted
                  preload="metadata"
                />
                <div className="video-overlay">
                  <div className="play-button">▶ Play</div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedItem && (
        <div
          className="gallery-modal"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedItem(null)}
            >
              ✕
            </button>

            {selectedItem.type === "image" ? (
              <img
                src={selectedItem.src}
                alt="Preview"
              />
            ) : (
              <video
                key={selectedItem.src}
                src={selectedItem.src}
                controls
                autoPlay
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;