import React, { useEffect, useRef } from "react";
import gsap, { Power1 } from "gsap";
import { isVisible } from "../helpers";

const Footer = () => {
  const body = document.querySelector("body");
  const lastElementRef = useRef(null);
  let triggered = false;

  const handleScroll = () => {
    if (isVisible(lastElementRef.current) && triggered === false) {
      triggered = true;
      listAnimation();
    }
  };

  const listAnimation = () => {
    const ulItems = document.querySelectorAll(".list-footer > li");
    let delay = 0;
    ulItems.forEach((item) => {
      gsap
        .fromTo(
          item,
          1,
          {
            y: "-20%",
            opacity: 0,
            rotation: -10,
            transformOrigin: "bottom 50%",
          },
          {
            y: "0%",
            opacity: 1,
            ease: Power1.easeOut,
            rotation: 0,
            transformOrigin: "-30%",
          }
        )
        .delay((delay += 0.2));
    });
  };

  useEffect(() => {
    body.addEventListener("scroll", handleScroll);
  });
  return (
    <>
      <div className="footer-container">
        <div className="container footer">
          <div className="title">Noel AN &trade;</div>
          <div className="flex">
            <div className="column-left">
              <ul className="list-footer">
                <li>Where</li>
                <li>outstanding</li>
                <li>design gets</li>
                <li ref={lastElementRef}>built.</li>
              </ul>
            </div>
            <div className="column-right">
              <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>PORTFOLIO</li>
                <li>AVAILABILITIES</li>
                <li>CONTACT</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="column-left">
              <div className="top-text">
                1101 SUTTER STREET, SAN FRANCISCO, CALIFORNIA 94109
              </div>
              <div className="bottom-text">
                <div className="left-text">T : 415.442.4800</div>
                <div>E : INFO@MARTINBUILDING.COM</div>
              </div>
            </div>
            <div className="column-right">
              KO <br />
              TA
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
