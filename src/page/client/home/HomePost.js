// import React from "react";
// import styled, { keyframes } from "styled-components";
// import { fadeIn } from "react-animations";

// // import PostVideoFile from "../../../utils/images/home/postVideo.mp4";
// import PostSliderFile from "../../../utils/images/home/YukiOno_Carosel.jpg";
// // import PostCardImageFile from "../../../utils/images/home/postCard.png";
// // import VideoPlyaerButtonBackImageFile from "../../../utils/images/home/playVideoButtonBack.png";
// // import VideoPlyaerButtonImageFile from "../../../utils/images/home/playVideoButton.png";
// import QRCodeImageFile1 from "../../../utils/images/home/Yuki_Instagram.png";
// import QRCodeImageFile2 from "../../../utils/images/home/Yuki_Telegram.png";
// import QRCodeImageFile3 from "../../../utils/images/home/Yuki_WhatsApp.png";
// import DownloadBrandImageFile from "../../../utils/images/home/brand.png";
// import AnimationArrowImageFile from "../../../utils/images/home/arrow.png";

// const HomePost = () => {
//   return (
//     <PostContainer>
//       {/* <PostVideo autoPlay muted loop>
//         <PostVideoSource src={PostVideoFile} />
//       </PostVideo> */}
//       <PostSlider src={PostSliderFile} />
//       {/* <PostCardImage src={PostCardImageFile} /> */}
//       <PostTextWrapper>
//         <PostMainText>Yuki Ono</PostMainText>
//         <PostSubMainText>KTOPSOFT Leader</PostSubMainText>
//       </PostTextWrapper>
//       <PostCardWrapper>
//         {/* <VideoPlayerButtonWrapper>
//           <VideoPlayerButton><VideoPlayerImage /></VideoPlayerButton>
//         </VideoPlayerButtonWrapper> */}

//           KTOPSOFT is professional game studio - Contact us
//         </PostCardDescription>
//         <DownloadWrapper>
//           <QRCode src={QRCodeImageFile1} />
//           <QRCode src={QRCodeImageFile2} />
//           <QRCode src={QRCodeImageFile3} />
//           <DownloadBrand src={DownloadBrandImageFile} />
//         </DownloadWrapper>
//       </PostCardWrapper>
//       <AnimationWrapper>
//         <AnimationArrow src={AnimationArrowImageFile} />
//         <AnimationArrow delay="0.1s" src={AnimationArrowImageFile} />
//         <AnimationArrow delay="0.4s" src={AnimationArrowImageFile} />
//       </AnimationWrapper>
//     </PostContainer>
//   );
// };

// const PostContainer = styled.div`
//   user-select: none;
//   position: relative;
//   height: 100vh;
// `;
// // const PostVideo = styled.video`
// //   width: 100%;
// //   height: 100vh;
// //   object-fit: cover;
// // `;
// // const PostVideoSource = styled.source``;
// const PostSlider = styled.img`
//   width: 100%;
//   height: 100vh;
// `;
// // const PostCardImage = styled.img`
// //   position: absolute;
// //   right: 10px;
// //   top: 76px;
// //   width: 183px;
// //   height: 176px;
// //   cursor: pointer;
// // `;
// const PostTextWrapper = styled.div`
//   position: absolute;
//   left: 12%;
//   top: 27%;
//   display: flex;
//   flex-direction: column;
//   // gap: 30px;
// `;
// const PostMainText = styled.div`
//   color: white;
//   font-size: 100px;
//   font-weight: bold;
//   font-family: LilitaOne;
// `;
// const PostSubMainText = styled.div`
//   color: white;
//   font-size: 80px;
//   font-family: LilitaOne;
// `;
// const PostCardWrapper = styled.div`
//   position: absolute;
//   bottom: 50px;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;
// // const VideoPlayerButtonWrapper = styled.div`
// //   width: 356px;
// //   height: 76px;
// //   background-image: url(${VideoPlyaerButtonBackImageFile});
// // `;
// // const VideoPlayerButton = styled.div`
// //   position: relative;
// //   margin: 14px auto;
// //   width: 48px;
// //   height: 48px;
// //   border-radius: 50%;
// //   border: 0;
// //   background-color: #fff;
// //   cursor: pointer;
// //   background-image: url(${VideoPlyaerButtonImageFile});
// //   background-position: center 11px;
// //   background-repeat: no-repeat;
// //   &: hover {
// //     background-color: #0000;
// //     background-position: center -17px;
// //   }
// // `;
// const PostCardDescription = styled.div`
//   font-size: 30px;
//   color: #fff;
//   text-align: center;
//   text-shadow: 0 0 10px rgba(114, 71, 21, 0.68),
//     0 0 10px rgba(114, 71, 21, 0.68);
//   margin: 32px auto 27px;
// `;
// const DownloadWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 10px;
// `;
// // const DownloadContainer = styled.div`
// //   display: grid;
// //   grid-template-columns: auto auto auto;
// //   gap: 8px;
// //   height: 100%;
// // `;
// const QRCode = styled.img`
//   width: 114px;
//   height: 114px;
// `;
// // const DownloadImage = styled.img`
// //   width: auto;
// //   height: 51px;
// // `;
// const DownloadBrand = styled.img`
//   width: 200px;
//   height: 127px;
// `;
// const AnimationWrapper = styled.div`
//   position: absolute;
//   left: 50%;
//   bottom: 0px;
//   transform: translateX(-50%);
//   display: flex;
//   flex-direction: column;\
// `;
// const AnimationArrow = styled.img`
//   margin-bottom: -3px;
//   animation: 0.5s ${(props) => props.delay && props.delay}
//     ${keyframes`${fadeIn}`} infinite alternate;
// `;

// export default HomePost;
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./home.css";
// import "./util";
import UnityImageFile from "../../../utils/images/home/yuki_ono/unity_ico.png";
import UnrealImageFile from "../../../utils/images/home/yuki_ono/unreal_ico.png";
import YukiOnoImageFile from "../../../utils/images/home/yuki_ono/main.png";

import CheeMingImageFile from "../../../utils/images/home/chee_ming/main.png";
import BlockchainImageFile from "../../../utils/images/home/chee_ming/bitcoin.svg";
import NodeImageFile from "../../../utils/images/home/chee_ming/data.svg";

import GrapesImageFile1 from "../../../utils/images/home/assests/grape1.png";
import GrapesImageFile2 from "../../../utils/images/home/assests/grape2.png";
import GrapesImageFile3 from "../../../utils/images/home/assests/single_grape1.png";

import AvocadesImageFile1 from "../../../utils/images/home/assests/avocado1.png";
import AvocadesImageFile2 from "../../../utils/images/home/assests/avocado2.png";
import AvocadesImageFile3 from "../../../utils/images/home/assests/avocado3.png";

import FlowerImageFile1 from "../../../utils/images/home/assests/flower1.png";
import FlowerImageFile2 from "../../../utils/images/home/assests/flower2.png";

// const discoverButtonBkColor = [
//   `#000`,
//   `#cf302b`,
//   `#f7b744`,
//   `#881e32`,
//   `#ef706b`,
//   `#ee5235`,
// ];
const backgroundBkColor = [
  `#000`,
  `#e7524c`,
  `#f07038`,
  `#ef7591`,
  `#8bd3b9`,
  `#fbd349`,
];
const HomePost = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [moving, setMoving] = useState(false);
  const { contextSafe } = useGSAP();

  useEffect(() => { 
    let timer = setTimeout(() => {
      setCurrentSlide((prevSlide) => {
        let newSlide = (prevSlide % 5) + 1;
        if (newSlide > prevSlide) {
          handleViewInController(newSlide, 1);
          handleViewOutController(prevSlide, -1);
        } else {
          handleViewInController(newSlide, -1);
          handleViewOutController(prevSlide, 1);
        }
        return (prevSlide % 5) + 1;
      });
    }, 6000);
    return () => clearTimeout(timer);
  }, [currentSlide]); 

  const endedMoving = () => {
    setMoving(false);
  };

  const handleViewIn1 = contextSafe((direction) => {
    gsap.fromTo(
      "#slide1img1",
      {
        x: 500 * direction,
      },
      {
        x: 0,
        duration: 2,
      }
    );
    gsap.fromTo(
      "#slide1img2",
      {
        x: 300 * direction,
      },
      {
        x: 0,
        duration: 2,
      }
    );
    gsap.fromTo(
      "#slide1img3",
      {
        x: 200 * direction,
      },
      {
        x: 0,
        duration: 2,
        onComplete: endedMoving,
      }
    );
  });

  const handleViewIn2 = contextSafe((direction) => {
    gsap.fromTo(
      "#slide2img1",
      {
        x: 500 * direction,
      },
      {
        x: 0,
        duration: 2,
      }
    );
    gsap.fromTo(
      "#slide2img2",
      {
        x: 300 * direction,
      },
      {
        x: 0,
        duration: 2,
      }
    );
    gsap.fromTo(
      "#slide2img3",
      {
        x: 200 * direction,
      },
      {
        x: 0,
        duration: 2,
      }
    );
    gsap.fromTo(
      "#slide2img4",
      {
        x: 100 * direction,
      },
      {
        x: 0,
        duration: 2,
        onComplete: endedMoving,
      }
    );
  });

  const handleViewIn3 = contextSafe((direction) => {
    gsap.fromTo(
      "#slide3img1",
      {
        x: 500 * direction,
      },
      {
        x: 0,
        duration: 2,
      }
    );
    gsap.fromTo(
      "#slide3img2",
      {
        x: 300 * direction,
      },
      {
        x: 0,
        duration: 2,
      }
    );
    gsap.fromTo(
      "#slide3img3",
      {
        x: 200 * direction,
      },
      {
        x: 0,
        duration: 2,
      }
    );
    gsap.fromTo(
      "#slide3img4",
      {
        x: 100 * direction,
      },
      {
        x: 0,
        duration: 2,
        onComplete: endedMoving,
      }
    );
  });

  const handleViewIn4 = contextSafe((direction) => {
    gsap.fromTo(
      "#slide4img1",
      {
        x: 500 * direction,
      },
      {
        x: 0,
        duration: 2,
      }
    );
    gsap.fromTo(
      "#slide4img2",
      {
        x: 300 * direction,
      },
      {
        x: 0,
        duration: 2,
      }
    );
    gsap.fromTo(
      "#slide4img3",
      {
        x: 200 * direction,
      },
      {
        x: 0,
        duration: 2,
        onComplete: endedMoving,
      }
    );
  });

  const handleViewIn5 = contextSafe((direction) => {
    gsap.fromTo(
      "#slide5img1",
      {
        x: 500 * direction,
      },
      {
        x: 0,
        duration: 2,
      }
    );
    gsap.fromTo(
      "#slide5img2",
      {
        x: 300 * direction,
      },
      {
        x: 0,
        duration: 2,
        onComplete: endedMoving,
      }
    );
  });

  const handleViewInController = (index, direction) => {
    setMoving(true);
    switch (index) {
      case 1:
        handleViewIn1(direction);
        break;
      case 2:
        handleViewIn2(direction);
        break;
      case 3:
        handleViewIn3(direction);
        break;
      case 4:
        handleViewIn4(direction);
        break;
      case 5:
        handleViewIn5(direction);
        break;
    }
  };

  const handleViewOut1 = contextSafe((direction) => {
    gsap.fromTo(
      "#slide1img1",
      {
        x: 0,
      },
      {
        x: 500 * direction,
        duration: 2,
      }
    );
    gsap.fromTo(
      "#slide1img2",
      {
        x: 0,
      },
      {
        x: 300 * direction,
        duration: 2,
      }
    );
    gsap.fromTo(
      "#slide1img3",
      {
        x: 0,
      },
      {
        x: 100 * direction,
        duration: 2,
        onComplete: endedMoving,
      }
    );
  });

  const handleViewOut2 = contextSafe((direction) => {
    var t1 = gsap.timeline({ repeatDelay: 0 });
    var t2 = gsap.timeline({ repeatDelay: 0 });
    var t3 = gsap.timeline({ repeatDelay: 0 });
    var t4 = gsap.timeline({ repeatDelay: 0 });
    t1.fromTo(
      "#slide2img1",
      {
        x: 0,
      },
      {
        x: 500 * direction,
        duration: 2,
      }
    );
    t1.eventCallback("onComplete", () => {
      t1.pause(0);
    });
    t2.fromTo(
      "#slide2img2",
      {
        x: 0,
      },
      {
        x: 400 * direction,
        duration: 2,
      }
    );
    t2.eventCallback("onComplete", () => {
      t2.pause(0);
    });
    t3.fromTo(
      "#slide2img3",
      {
        x: 0,
      },
      {
        x: 200 * direction,
        duration: 2,
      }
    );
    t3.eventCallback("onComplete", () => {
      t3.pause(0);
    });
    t4.fromTo(
      "#slide2img4",
      {
        x: 0,
      },
      {
        x: 100 * direction,
        duration: 2,
        onComplete: endedMoving,
      }
    );
    t4.eventCallback("onComplete", () => {
      t4.pause(0);
    });
  });

  const handleViewOut3 = contextSafe((direction) => {
    var t1 = gsap.timeline({ repeatDelay: 0 });
    var t2 = gsap.timeline({ repeatDelay: 0 });
    var t3 = gsap.timeline({ repeatDelay: 0 });
    var t4 = gsap.timeline({ repeatDelay: 0 });
    t1.fromTo(
      "#slide3img1",
      {
        x: 0,
      },
      {
        x: 500 * direction,
        duration: 2,
      }
    );
    t1.eventCallback("onComplete", () => {
      t1.pause(0);
    });
    t2.fromTo(
      "#slide3img2",
      {
        x: 0,
      },
      {
        x: 300 * direction,
        duration: 2,
      }
    );
    t2.eventCallback("onComplete", () => {
      t2.pause(0);
    });
    t3.fromTo(
      "#slide3img3",
      {
        x: 0,
      },
      {
        x: 200 * direction,
        duration: 2,
      }
    );
    t3.eventCallback("onComplete", () => {
      t3.pause(0);
    });
    t4.fromTo(
      "#slide3img4",
      {
        x: 0,
      },
      {
        x: 100 * direction,
        duration: 2,
        onComplete: endedMoving,
      }
    );
    t4.eventCallback("onComplete", () => {
      t4.pause(0);
    });
  });

  const handleViewOut4 = contextSafe((direction) => {
    var t1 = gsap.timeline({ repeatDelay: 0 });
    var t2 = gsap.timeline({ repeatDelay: 0 });
    var t3 = gsap.timeline({ repeatDelay: 0 });
    t1.fromTo(
      "#slide4img1",
      {
        x: 0,
      },
      {
        x: 500 * direction,
        duration: 2,
      }
    );
    t1.eventCallback("onComplete", () => {
      t1.pause(0);
    });
    t2.fromTo(
      "#slide4img2",
      {
        x: 0,
      },
      {
        x: 400 * direction,
        duration: 2,
      }
    );
    t2.eventCallback("onComplete", () => {
      t2.pause(0);
    });
    t3.fromTo(
      "#slide4img3",
      {
        x: 0,
      },
      {
        x: 200 * direction,
        duration: 2,
        onComplete: endedMoving,
      }
    );
    t3.eventCallback("onComplete", () => {
      t3.pause(0);
    });
  });

  const handleViewOut5 = contextSafe((direction) => {
    gsap.fromTo(
      "#slide5img1",
      {
        x: 0,
      },
      {
        x: 500 * direction,
        duration: 2,
      }
    );
    gsap.fromTo(
      "#slide5img2",
      {
        x: 0,
      },
      {
        x: 300 * direction,
        duration: 2,
        onComplete: endedMoving,
      }
    );
  });

  const handleViewOutController = (index, direction) => {
    switch (index) {
      case 1:
        handleViewOut1(direction);
        break;
      case 2:
        handleViewOut2(direction);
        break;
      case 3:
        handleViewOut3(direction);
        break;
      case 4:
        handleViewOut4(direction);
        break;
      case 5:
        handleViewOut5(direction);
        break;
    }
  };

  const handleManualClick = (index) => {
    if (index === currentSlide) return;
    setCurrentSlide((prevSlide) => {
      let newSlide = index;
      if (newSlide > prevSlide) {
        handleViewInController(newSlide, 1);
        handleViewOutController(prevSlide, -1);
      } else {
        handleViewInController(newSlide, -1);
        handleViewOutController(prevSlide, 1);
      }
      return newSlide;
    });
  };

  const handleCoords1 = (event) => {
    if (moving === true) return;
    const images = document.getElementsByClassName("image");
    var x = event.clientX;
    var y = event.clientY;

    images[1].style.transform = `translate(${-x * 0.01}px,${-y * 0.01}px)`;
    // images[2].style.transform = `translate(${-x * 0.03}px,${-y * 0.03}px)`;
    images[0].style.transform = `translate(${-x * 0.02}px,${-y * 0.02}px)`;
  };

  const handleCoords2 = (event) => {
    if (moving === true) return;
    const images = document.getElementsByClassName("image");
    var x = event.clientX;
    var y = event.clientY;

    // images[3].style.transform = `translate(${-x * 0.01}px,${-y * 0.02}px)`;
    images[4].style.transform = `translate(${-x * 0.03}px,${-y * 0.03}px)`;
    images[5].style.transform = `translate(${-x * 0.02}px,${-y * 0.01}px)`;
    images[6].style.transform = `translate(${-x * 0.02}px,${-y * 0.02}px)`;
  };

  /* <--------SLIDER 3----------> */
  const handleCoords3 = (event) => {
    if (moving === true) return;
    const images = document.getElementsByClassName("image");
    var x = event.clientX;
    var y = event.clientY;

    images[7].style.transform = `translate(${-x * 0.01}px,${-y * 0.01}px)`;
    images[8].style.transform = `translate(${-x * 0.03}px,${-y * 0.02}px)`;
    images[9].style.transform = `translate(${-x * 0.02}px,${-y * 0.02}px)`;
    images[10].style.transform = `translate(${-x * 0.02}px,${-y * 0.02}px)`;
  };
  /* <--------SLIDER 4----------> */
  const handleCoords4 = (event) => {
    if (moving === true) return;
    const images = document.getElementsByClassName("image");
    var x = event.clientX;
    var y = event.clientY;

    images[11].style.transform = `translate(${-x * 0.01}px,${-y * 0.02}px)`;
    images[12].style.transform = `translate(${-x * 0.03}px,${-y * 0.03}px)`;
    images[13].style.transform = `translate(${-x * 0.02}px,${-y * 0.01}px)`;
  };

  /* <--------SLIDER 5----------> */
  const handleCoords5 = (event) => {
    if (moving === true) return;
    const images = document.getElementsByClassName("image");
    var x = event.clientX;
    var y = event.clientY;

    images[14].style.transform = `translate(${-x * 0.01}px,${-y * 0.02}px)`;
    images[15].style.transform = `translate(${-x * 0.03}px,${-y * 0.03}px)`;
  };

  return (
    <div
      class="layout3"
      style={{ backgroundColor: `${backgroundBkColor[currentSlide]}` }}
    >
      <div class="post-slider">
        <div class="slides">
          <input
            type="radio"
            name="radio-btn"
            id="radio1"
            className="homeRadioButton"
            checked={currentSlide === 1}
          />
          <input
            type="radio"
            name="radio-btn"
            id="radio2"
            className="homeRadioButton"
            checked={currentSlide === 2}
          />
          <input
            type="radio"
            name="radio-btn"
            id="radio3"
            className="homeRadioButton"
            checked={currentSlide === 3}
          />
          <input
            type="radio"
            name="radio-btn"
            id="radio4"
            className="homeRadioButton"
            checked={currentSlide === 4}
          />
          <input
            type="radio"
            name="radio-btn"
            id="radio5"
            className="homeRadioButton"
            checked={currentSlide === 5}
          />
          <div class="postslide first" id="slide1" onMouseMove={handleCoords1}>
            <img src={UnityImageFile} alt="" class="image" id="slide1img2" />
            <img src={UnrealImageFile} alt="" class="image" id="slide1img1" />
            <img src={YukiOnoImageFile} alt="" class="image" id="slide1img3" />
            <div class="heading" id="slide1header">
              KTOPSOFT <br />
              Game Developer
            </div>
          </div>

          <div class="postslide" id="slide2" onMouseMove={handleCoords2}>
            <img src={CheeMingImageFile} alt="" class="image" id="slide2img1" />
            <img src={BlockchainImageFile} alt="" class="image" id="slide2img2" />
            <img src={NodeImageFile} alt="" class="image" id="slide2img3" />
            <img
              src="https://res.cloudinary.com/dfkwfk0ba/image/upload/w_0.25,f_auto/01.products/02.citrus/01.products_02.citrus_Home_Citrus_02x2_dfbcrk.png"
              alt=""
              class="image"
              id="slide2img4"
            />
            <div class="heading" id="slide2header">
              Citrus
            </div>
          </div>

          <div class="postslide" id="slide3" onMouseMove={handleCoords3}>
            <div class="heading" id="slide3header">
              Grapes
            </div>
            <img src={GrapesImageFile1} alt="" class="image" id="slide3img1" />
            <img src={GrapesImageFile2} alt="" class="image" id="slide3img2" />
            <img src={GrapesImageFile3} alt="" class="image" id="slide3img3" />
            <img src={GrapesImageFile3} alt="" class="image" id="slide3img4" />
          </div>

          <div class="postslide" id="slide4" onMouseMove={handleCoords4}>
            <div class="heading" id="slide4header">
              Avocados
            </div>
            <img
              src={AvocadesImageFile1}
              alt=""
              class="image"
              id="slide4img1"
            />
            <img
              src={AvocadesImageFile2}
              alt=""
              class="image"
              id="slide4img2"
            />
            <img
              src={AvocadesImageFile3}
              alt=""
              class="image"
              id="slide4img3"
            />
          </div>

          <div class="postslide" id="slide5" onMouseMove={handleCoords5}>
            <div class="heading" id="slide5header">
              Flowers
            </div>
            <img src={FlowerImageFile1} alt="" class="image" id="slide5img1" />
            <img src={FlowerImageFile2} alt="" class="image" id="slide5img2" />
          </div>

          {/* <div class="navigation-auto">
            <div className={`auto-btn1`}>
              <div class="bar" id="bar1"></div>
            </div>
            <div className={`auto-btn2 ${currentSlide === 2 && "barcheck"}`}>
              <div class="bar" id="bar2"></div>
            </div>
            <div className={`auto-btn3 ${currentSlide === 3 && "barcheck"}`}>
              <div class="bar" id="bar3"></div>
            </div>
            <div className={`auto-btn4 ${currentSlide === 4 && "barcheck"}`}>
              <div class="bar" id="bar4"></div>
            </div>
            <div className={`auto-btn5 ${currentSlide === 5 && "barcheck"}`}>
              <div class="bar" id="bar5"></div>
            </div>
          </div> */}
        </div>
      </div>
      <div class="container">
        <div class="navigation-manual">
          <div
            className={`label-container  ${currentSlide === 1 && "barcheck"}`}
          >
            <label
              for="radio1"
              className={`manual-btn ${currentSlide === 1 && "checked"}`}
              onClick={() => handleManualClick(1)}
              id="manual1"
            >
              Yuki Ono
            </label>
          </div>
          <div
            className={`label-container  ${currentSlide === 2 && "barcheck"}`}
          >
            <label
              for="radio2"
              className={`manual-btn ${currentSlide === 2 && "checked"}`}
              onClick={() => handleManualClick(2)}
              id="manual2"
            >
              Chee Ming
            </label>
          </div>
          <div
            className={`label-container  ${currentSlide === 3 && "barcheck"}`}
          >
            <label
              for="radio3"
              className={`manual-btn ${currentSlide === 3 && "checked"}`}
              onClick={() => handleManualClick(3)}
              id="manual3"
            >
              Grapes
            </label>
          </div>
          <div
            className={`label-container  ${currentSlide === 4 && "barcheck"}`}
          >
            <label
              for="radio4"
              className={`manual-btn ${currentSlide === 4 && "checked"}`}
              onClick={() => handleManualClick(4)}
              id="manual4"
            >
              Avocados
            </label>
          </div>
          <div
            className={`label-container  ${currentSlide === 5 && "barcheck"}`}
          >
            <label
              for="radio5"
              className={`manual-btn ${currentSlide === 5 && "checked"}`}
              onClick={() => handleManualClick(5)}
              id="manual5"
            >
              Flowers
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePost;
