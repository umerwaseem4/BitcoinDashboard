import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home__image">
        <div className="home__centerhero align-items-center justify-content-center container">
          <h1 className="home__mainheading">
            The Most <span>Trusted</span> Source
          </h1>
          <h4 className="text-white home__subheader">
            Now including Pakistan as permanent country
          </h4>
          <br />
          <Link className="home__maincta" to="/dashboard">
            Dashboard
          </Link>
        </div>
      </div>
      {/* section */}
      <section className="container ourservices text-center">
        <h1 className="text-uppercase">Services</h1>
        <p className="services-parag">Services We Offer</p>

        <div className="row row-setting">
          <div className="col-lg-6 col-md-6 col-sm-6 col-10 d-block m-auto">
            <div className="imgsetting d-block m-auto bg-warning">
              <i className="fa fa-globe fa-3x text-white"></i>
            </div>
            <h2>Countries</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
              temporibus libero similique doloremque illo possimus veritatis
              eius vero delectus at?
            </p>
          </div>
          {/* 2nd */}
          <div className="col-lg-6 col-md-6 col-sm-6 col-10 d-block m-auto">
            <div className="imgsetting d-block m-auto bg-warning">
              <i className="fa fa-trophy fa-3x text-white"></i>
            </div>
            <h2>Champs</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              excepturi, nihil atque saepe quaerat aspernatur repudiandae sequi
              nulla voluptatibus aperiam.
            </p>
          </div>
          {/* 3rd */}
          <div className="col-lg-6 col-md-6 col-sm-6 col-10 d-block m-auto">
            <div className="imgsetting d-block m-auto bg-warning">
              <i className="fa fa-laptop fa-3x text-white"></i>
            </div>
            <h2>E-commerce</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A
              reprehenderit nemo deserunt dolores corporis totam hic nesciunt
              veniam maiores sequi!
            </p>
          </div>
        </div>
      </section>
      {/* slim banner */}
      <div className="home__slimbanner">
        <div className="container">
          <div className="home__slimbannercenter">
            <h1 className="slim__bannerHeader">Visit Dashboard</h1>
            <br />
            <Link className="home__slimcta" to="/dashboard">
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
