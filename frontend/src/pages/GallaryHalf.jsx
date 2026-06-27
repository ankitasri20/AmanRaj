import { Link } from "react-router-dom";
import "../css/GallayHalf.css";

function GallaryHalf() {
  return (
    <section className="gallery-half-section">

      <h2>GALLERY</h2>
      <p>Captured moments, forever memories.</p>

      {/* First Row */}
      <div className="gallery-slider">

        <div className="gallery-track row1">

          <div className="gallery-item">IMAGE 1</div>
          <div className="gallery-item">IMAGE 2</div>
          <div className="gallery-item">IMAGE 3</div>
          <div className="gallery-item">IMAGE 4</div>
          <div className="gallery-item">IMAGE 5</div>

          <div className="gallery-item">IMAGE 1</div>
          <div className="gallery-item">IMAGE 2</div>
          <div className="gallery-item">IMAGE 3</div>
          <div className="gallery-item">IMAGE 4</div>
          <div className="gallery-item">IMAGE 5</div>

        </div>

      </div>

      {/* Second Row */}
      <div className="gallery-slider">

        <div className="gallery-track row2">

          <div className="gallery-item">IMAGE 6</div>
          <div className="gallery-item">IMAGE 7</div>
          <div className="gallery-item">IMAGE 8</div>
          <div className="gallery-item">IMAGE 9</div>
          <div className="gallery-item">IMAGE 10</div>

          <div className="gallery-item">IMAGE 6</div>
          <div className="gallery-item">IMAGE 7</div>
          <div className="gallery-item">IMAGE 8</div>
          <div className="gallery-item">IMAGE 9</div>
          <div className="gallery-item">IMAGE 10</div>

        </div>

      </div>

      <Link to="/gallery">
        <button className="load-more-btn">
          LOAD MORE
        </button>
      </Link>

    </section>
  );
}

export default GallaryHalf;