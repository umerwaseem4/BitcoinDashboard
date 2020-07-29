import React from "react";

const Footer = () => {
  return (
    <div className="Footer">
      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h6>About</h6>
              <p class="text-justify">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
                error magni a maiores quisquam quas sed odio veritatis saepe
                dolore molestias perspiciatis facere reprehenderit at, enim
                doloremque, nemo rem minus?
              </p>
            </div>
          </div>
          <hr />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">
                Copyright &copy; 2020 All Rights Reserved by
                <a href="#"> Umer Waseem</a>.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
