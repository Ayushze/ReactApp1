import React from "react";

function Contact() {
  return (
    <>
      <div className="container">
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://i.redd.it/vbmyszuosjh21.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="tch">About A Office</h5>
                <div>
                  <h6 className="tc">
                    <b>Address:</b> 00/000,XYZ,ABCX, near XYZ, ABCXYZ, 000000
                  </h6>
                  <h6 className="tc">
                    <b>Phone:</b>+0-1234-56789
                  </h6>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://i.redd.it/vbmyszuosjh21.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="tch">About B Office</h5>
                <div>
                  <h6 className="tc">
                    <b>Address:</b> 00/000,XYZ,ABCX, near XYZ, ABCXYZ, 000000
                  </h6>
                  <h6 className="tc">
                    <b>Phone:</b>+0-1234-56789
                  </h6>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://i.redd.it/vbmyszuosjh21.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="tch">About c Office</h5>
                <div>
                  <h6 className="tc">
                    <b>Address:</b> 00/000,XYZ,ABCX, near XYZ, ABCXYZ, 000000
                  </h6>
                  <h6 className="tc">
                    <b>Phone:</b>+0-1234-56789
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>S
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
