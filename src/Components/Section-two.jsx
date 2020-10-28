import React, { useContext, useEffect, useRef } from "react";
import ThemeContext from "../contexts/ThemeContext";
import gsap, { Power4 } from "gsap";
import { isVisible } from "../helpers";

const SectionTwo = () => {
  const { theme } = useContext(ThemeContext);
  const topTitleRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const body = document.querySelector("body");

  let topTitleTriggered = false;
  let titleTriggered = false;
  let descriptionTriggered = false;

  /* Fade + bottom to Top animation  */
  const FadeAndApparition = (element) => {
    gsap.fromTo(
      element,
      1.5,
      { opacity: 0, y: "0%" },
      { opacity: 1, y: "-20%", ease: Power4.easeInOut }
    );
  };

  const handleScroll = () => {
    if (theme === "light") {
      if (isVisible(topTitleRef.current) && topTitleTriggered === false) {
        topTitleTriggered = true;
        FadeAndApparition(topTitleRef.current);
      }
      if (isVisible(titleRef.current) && titleTriggered === false) {
        titleTriggered = true;
        FadeAndApparition(titleRef.current);
      }
      if (isVisible(descriptionRef.current) && descriptionTriggered === false) {
        descriptionTriggered = true;
        FadeAndApparition(descriptionRef.current);
      }
    }
  };

  useEffect(() => {
    body.addEventListener("scroll", handleScroll);
  });

  return (
    <>
      <div
        className={
          "container section-two-container " +
          (theme === "dark" ? "text-black" : "text-white")
        }
      >
        <div className="top-title" ref={topTitleRef}>
          <div className="box"></div>URBAN DESIGN & DEVELOPMENT SPECIALISTS
        </div>
        <div className="title-container" ref={titleRef}>
          <div className="title">
            Martin Building Company is a multidisciplinary design and
            development firm.
          </div>
        </div>

        <div className="description-container" ref={descriptionRef}>
          <div className="underline-container">
            <div className="underline"></div>
          </div>
          <div className="description">
            Martin Building Company is renowned for our commitment to quality
            design, historic preservation and neighborhood-oriented urban infill
            development. We craft an intriguing blend of stunning contemporary
            architecture and civic responsibility into all our projects –
            creating exceptional and sustainable urban environments.
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionTwo;
