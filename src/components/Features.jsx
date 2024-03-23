import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { explore1Img, explore2Img, exploreVideo } from "../utils/index.js";
import { useRef } from "react";

export default function Features() {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.to("#feature_title", {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: "#feature_title",
        toggleActions: "restart reverse restart reverse",
        start: "top 85%",
      },
    });
    gsap.to(".g_grow", {
      y: 0,
      opacity: 1,
      scale: 0.92,
      scrollTrigger: {
        ease: "power1",
        scrub: 5.5,
      },
    });
    gsap.to(".g_text", {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        ease: 'power2.inOut',
        scrub: 5.5,
        duration: 1
      },
    });
  });
  return (
    <section className="common-padding h-full bg-black overflow-hidden relative">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1 id="feature_title" className="section-heading">
            Explore the full story.
          </h1>
        </div>
        <div className="flex flex-col justify-center overflow-hidden items-center">
          <div className="mt-32 mb-24 pl-24">
            <h2 className="text-5xl lg:text-7xl font-semibold">iPhone.</h2>
            <h2 className="text-5xl lg:text-7xl font-semibold">
              Forged in Titanium.
            </h2>
          </div>
          <div className="flex-center flex-col sm:px-10 mt-20">
            <div className="relative h-[50vh] w-full flex items-center">
              <video
                muted
                playsInline
                autoPlay
                loop
                ref={videoRef}
                className="w-full h-full object-cover object-center"
                preload="none"
                id="exploreVideoId"
              >
                <source src={exploreVideo} />
              </video>
            </div>
            <div className="flex flex-col w-full relative mt-4">
              <div className="feature-video-container">
                <div className="overflew-hidden flex-1 h-[70vh]">
                  <img
                    src={explore1Img}
                    alt="explore"
                    className="feature-video g_grow"
                  />
                </div>
                <div className="overflew-hidden flex-1 h-[70vh]">
                  <img
                    src={explore2Img}
                    alt="explore2"
                    className="feature-video g_grow"
                  />
                </div>
              </div>
              <div className="feature-text-container">
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    iPhone 15 Pro is{" "}
                    <span className="text-white">
                      the first iPhone to feature an aerospace-grade titanium
                      design
                    </span>
                    , using the same alloy that spacecrafts use for missions to
                    Mars.
                  </p>
                </div>
                <div className="flex-1 flex-center">
                <p className="feature-text g_text">
                    Titanium has one of the best strength-to-weight ratios of any metal, making these our {' '}
                    <span className="text-white">
                      lightest Pro models ever.
                    </span>
                    You&apos;ll notice the difference the moment you pick one up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
