import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Button from "@material-ui/core/Button";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="contact">
        <div className="main__contact">
          <div className="ashdj">
            <Button
              variant="contained"
              href="https://github.com/"
              color="secondary"
              className="button_contact"
            >
              Contact Me on Github
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
