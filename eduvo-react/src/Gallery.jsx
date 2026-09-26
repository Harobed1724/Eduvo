import { API_URL } from "./config";
const photos = [
  {
    src: "/images/gallery/bubbles.jpg",
    caption: "Play time in Kindergarten 1",
  },
  { src: "/images/gallery/Play 1.jpg", caption: "Play time, Nursery 2" },
  {
    src: "/images/gallery/play 5.jpg",
    caption: "Creative time, Kindergarten 2",
  },
  { src: "/images/gallery/garden time.jpg", caption: "Garden classroom" },
  { src: "/images/gallery/images.jpg", caption: "Music session" },
  { src: "/images/gallery/Play 2.jpeg", caption: "Outdoor play" },
  { src: "/images/gallery/discovery.jpg", caption: "Discovery corner" },
  { src: "/images/gallery/snack time.jpg", caption: "Snack time" },
];

function Gallery() {
  return (
    <>
      <section className="page-title-banner">
        <div className="container">
          <p className="eyebrow eyebrow--center">Gallery</p>
          <h1>A look inside Eduvo</h1>
        </div>
      </section>

      <section className="gallery">
        <div className="container">
          <div className="gallery-grid">
            {photos.map((photo) => (
              <figure className="gallery-item" key={photo.caption}>
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="gallery-thumb"
                />
                <figcaption>{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
