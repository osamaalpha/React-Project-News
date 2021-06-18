import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import global from "../img/global.jpeg";
import local from "../img/newlocal2.jpeg";
import category from "../img/category.jpeg";
import SignInButton from "./SignInButton";
const slideImages = [global, local, category];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide duration={3000} arrows={true}>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
            <h1 className="slide-header">Global News</h1>
            <h3>Sign in and Check All The News All Over The World </h3>
            <SignInButton />
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
            <h1 className="slide-header">Local News</h1>
            <h3>Check out Your Country's Local News</h3>
            <SignInButton />
          </div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
            <h1 className="slide-header">Categories</h1>
            <h3>
              Don't waste time check your News by category and a searchKey
            </h3>
            <SignInButton />
          </div>
        </div>
      </Slide>
    </div>
  );
};
export default Slideshow;
