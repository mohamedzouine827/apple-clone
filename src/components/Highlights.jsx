import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg, watchImg } from "../utils/index.js";
import VideoCarsoul from "./VideoCarsoul.jsx";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: "#title",
        toggleActions: "restart reverse restart reverse",
        start: "top 85%",
      },
    });
    gsap.to(".link", {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#title",
        toggleActions: "restart reverse restart reverse",
        start: "top 85%",
      },
      stagger: 0.25,
    });
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full bg-zinc-900 common-padding"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading">
            Get The Highlights
          </h1>
          <div className="flex flex-wrap gap-5 items-end">
            <p className="link">
              watch the film
              <img src={watchImg} alt="watchImage" className="ml-2" />
            </p>
            <p className="link">
              watch the event
              <img src={rightImg} alt="watchImage" className="ml-2" />
            </p>
          </div>
        </div>
        <VideoCarsoul />
      </div>
    </section>
  );
};

export default Highlights;
