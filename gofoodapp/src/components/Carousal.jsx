import React from "react";

function Carousal() {
  return (
    <div>
      <div
        id="carouselslide"
        className="carousel slide carousal-fade"
        data-ride="carousel"
        style={{objectFit:"contain !important"}}
      >
        <div className="carousel-inner" id ="carousalimage">
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-success" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/random/600x500/?momos"
              style={{ filter: "brightness(30%" }}
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/random/900x700/?momos"
              style={{ filter: "brightness(30%" }}
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/random/900x700/?pizza"
              style={{ filter: "brightness(30%" }}
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Carousal;
