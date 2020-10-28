import React, { useEffect, useRef, useContext } from "react";
import gsap, { Power4 } from "gsap";
import { isVisible } from "../helpers";
import ThemeContext from "../contexts/ThemeContext";

const Gallery = () => {
  const galleryRef = useRef(null);
  const rowTwoRef = useRef(null);
  const firstElementRef = useRef(null);
  const imgRef = useRef(null);
  const lastRef = useRef(null);
  const lastRightRef = useRef(null);
  const rowThreeRef = useRef(null);
  const body = document.querySelector("body");
  const { setTheme } = useContext(ThemeContext);

  let lastElementTriggered = false;
  let lastTriggered = false;

  const handleScroll = () => {
    if (isVisible(rowTwoRef.current)) {
      setTheme("dark");
      changeBackground();
    }

    if (isVisible(firstElementRef.current) && lastElementTriggered === false) {
      lastElementTriggered = true;
      FadeAndApparition();
      imageAnimation(imgRef.current);
    }

    if (isVisible(rowThreeRef.current) && lastTriggered === false) {
      lastTriggered = true;

      imageAnimation(lastRef.current);
      Fade(lastRightRef.current);
    }
  };

  /* Cahnge height */
  const imageAnimation = (element) => {
    gsap.fromTo(
      element,
      2,
      { height: "40%" },
      { height: "100%", ease: Power4.easeInOut }
    );
  };

  /* Change background color */
  const changeBackground = () => {
    gsap.to(body, 2, { backgroundColor: "white" });
  };

  const Fade = (el) => {
    console.log("trigger");
    gsap.fromTo(el, 1, { opacity: 0 }, { opacity: 1 });
  };

  /* Animation on ul > li */
  const FadeAndApparition = () => {
    const ulItems = document.querySelectorAll(".list > li");
    let delay = 0;
    ulItems.forEach((item) => {
      gsap
        .fromTo(
          item,
          1.5,
          { opacity: 0, y: "0%" },
          { opacity: 1, y: "-20%", ease: Power4.easeInOut }
        )
        .delay((delay += 0.2));
    });
    // gsap.fromTo(
    //   element,
    //   1.5,
    //   { opacity: 0, y: "0%" },
    //   { opacity: 1, y: "-20%", ease: Power4.easeInOut }
    // );
  };

  useEffect(() => {
    body.addEventListener("scroll", handleScroll);
    console.log("render");
  });
  return (
    <>
      <div className="gallery-container" ref={galleryRef}>
        {/* Row */}
        <div className="row row-one">
          <div className="column-left">
            <img src="/images/gallery-one.png" alt="" />
          </div>
          <div className="column-right">
            <div className="text-rotate">
              Stunning
              <br /> contemporary
              <br /> architecture.
            </div>
          </div>
        </div>
        {/* End Row */}

        {/* Row */}
        <div className="row row-two" ref={rowTwoRef}>
          <div className="text-rotate">
            <div className="box"></div>FULL SERVICE
          </div>
          <div className="column-left">
            <ul className="list">
              <li ref={firstElementRef}> MULTIFAMILY RESIDENTIAL</li>
              <li>HISTORIC RENOVATIONS </li>
              <li>COMMERCIAL OFFICES</li>
              <li>RESTAURANTS AND RETAIL</li>
              <li className="test">COMMUNITY SPACES</li>
            </ul>
            <div className="about-us">About us</div>
          </div>
          <div className="column-right" ref={imgRef}>
            <img src="/images/gallery-two.png" alt="" />
          </div>
        </div>
        {/* End Row */}

        {/* Row */}
        <div className="row row-three" ref={rowThreeRef}>
          <div className="flex-left" ref={lastRef}>
            <div className="column-left">
              <img src="/images/gallery-three.png" alt="" />
            </div>
          </div>

          <div className="column-right" ref={lastRightRef}>
            <div className="title">In development</div>
            <div className="flex">
              <ul>
                <li>Sutter park</li>
                <li>10101 - 1123 sutter street</li>
              </ul>
              <div className="about-us">View project</div>
            </div>
          </div>
        </div>
        {/* End Row */}
      </div>
    </>
  );
};

export default Gallery;
