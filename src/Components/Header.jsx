import React, { useEffect, useRef } from "react";
import gsap, { Power1, Power4 } from "gsap";

const Header = () => {
  const imgContainerRef = useRef(null);
  const backgroundSliderRef = useRef(null);
  const bannerImgRef = useRef(null);
  const underlineRef = useRef(null);
  const bannerTitle = useRef(null);

  const durationFirstPart = 1.5;
  const durationSecondPart = 1.5;
  const durationThirdPart = 1.5;

  /* Background image slider to right */
  const slideBackgroundImg = () => {
    gsap.fromTo(
      imgContainerRef.current,
      durationFirstPart,
      { x: "-15%", opacity: 0 },
      { x: "0%", opacity: 1, ease: Power1.easeOut }
    );
  };

  /* Background color black slide */
  const backgroundSlide = () => {
    gsap.fromTo(
      backgroundSliderRef.current,
      durationFirstPart,
      { x: "0%" },
      { x: "100%", ease: Power4.easeInOut }
    );
  };

  /* Banner img slide to left*/
  const slideBannerImg = () => {
    gsap
      .fromTo(
        bannerImgRef.current,
        durationSecondPart,
        { width: "0%" },
        { width: "55%", ease: Power4.easeInOut }
      )
      .delay(durationFirstPart - 1);
  };

  /* Banner text aparition  (Fade + bottom to Top ) */
  const bannerTextAnimation = () => {
    const textItems = document.querySelectorAll(".text-item");

    let delayBetween = durationFirstPart - 1;
    textItems.forEach((textItem) => {
      gsap
        .fromTo(
          textItem,
          2,
          { opacity: 0, y: "0%" },
          { opacity: 1, y: "-20%", ease: Power4.easeInOut }
        )
        .delay((delayBetween += 0.2));
    });
  };

  /* Underline expand */
  const underlineExpand = () => {
    gsap
      .fromTo(
        underlineRef.current,
        durationThirdPart,
        { width: "0%" },
        { width: "60%", ease: Power4.easeInOut }
      )
      .delay(durationFirstPart + durationSecondPart - 1);
  };

  /* Title fade */
  const titleFade = () => {
    gsap
      .fromTo(bannerTitle.current, 1.5, { opacity: 0 }, { opacity: 1 })
      .delay(durationFirstPart + durationSecondPart + durationThirdPart - 2);
  };

  const animate = () => {
    slideBackgroundImg();
    backgroundSlide();
    slideBannerImg();
    bannerTextAnimation();
    underlineExpand();
    titleFade();
    // notScrollable();
  };

  // const notScrollable = () => {
  //   const body = document.querySelector("body");
  //   body.style.overflow = "hidden";
  //   setTimeout(() => {
  //     body.style.overflow = "visible";
  //   }, 1000);
  // };

  useEffect(() => {
    animate();
  });

  return (
    <>
      <div className="header-container">
        <div className="background-slider" ref={backgroundSliderRef}></div>
        <div className="background-img-container" ref={imgContainerRef}>
          <img src="./images/buildings.png" alt="" />
        </div>
        <div className="banner-container">
          <div className="banner-title" ref={bannerTitle}>
            <div className="title">Noel AN &trade;</div>
          </div>
          <div className="banner-img-container" ref={bannerImgRef}>
            <img src="./images/buildings.png" alt="" />
          </div>
          <div className="banner-text-container">
            <div className="text-item">Exceptional</div>
            <div className="text-item">Urban</div>
            <div className="text-item">Environnements</div>
            <div className="underline" ref={underlineRef}></div>
          </div>
        </div>
      </div>
    </>
  );
};

// Au début il ya le background, puis le background slide de gauche a droite. au meme moment l'image aparait avec un petit fade et slide un peu aussi

export default Header;
