import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function Home() {
  const [foodCat, setfoodCat] = useState([]);
  const [foodItem, setfoodItem] = useState([]);
  const [search,setSearch] = useState("");

  const loadData = async () => {
    let response = await fetch("http://localhost:4000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response = await response.json();
    // console.log(response[0],response[1]);
    setfoodItem(response[0]);
    setfoodCat(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div
          id="carouselslide"
          className="carousel slide carousal-fade"
          data-ride="carousel"
          style={{ objectFit: "contain !important" }}
        >
          <div className="carousel-inner" id="carousalimage">
            <div className="carousel-caption" style={{ zIndex: "10" }}>
              <div className="d-flex justify-content-center">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value = {search}
                  onChange={(e)=>{setSearch(e.target.value)}}
                />
                <button className="btn btn-success" type="submit">
                  Search
                </button>
              </div>
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
      <div className="container">
        {foodCat !== [] ? (
          foodCat.map((data) => {
            return (
              <div className="row mb-3">
                <div key={data._id} className="fs-3 m-3">
                  {data.name}
                </div>
                <hr />
                {foodItem !== [] ? (
                  foodItem
                    .filter((itemdata) => (itemdata.CategoryName == data.name) && (itemdata.name.toLowerCase().includes(search.toLocaleLowerCase())))
                    .map((matchedData) => {
                      return (
                        <div
                          key={matchedData._id}
                          className="col-12 col-md-6 col-lg-3"
                        >
                          <Card
                            foodName={matchedData.name}
                            options={matchedData.options[0]}
                            imglink={matchedData.img}
                          ></Card>
                        </div>
                      );
                    })
                ) : (
                  <div> No data found</div>
                )}
              </div>
            );
          })
        ) : (
          <div>Loaaaadingggg!!!!</div>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
