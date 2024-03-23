import {chipImg} from "../utils/index.js";
import {useGSAP} from "@gsap/react";
import gsap from "gsap"

export default function HowItWroks() {
    useGSAP(() => {
        gsap.from('#chip', {
            scrollTrigger: {
                trigger: '#chip',
                start: 'top 85%',
                toggleActions: "restart reverse restart reverse"
            },
            opacity: 0,
            scale: 2,
            duration: 3,
            ease : "expo",
        }),
            gsap.to(".g_text", {
                y: 0,
                opacity: 1,
                scrollTrigger: {
                    ease: 'power2.inOut',
                    scrub: 5.5,
                    duration: 1
                },
            });
    }, [])
    return(
        <section className="common-padding">
            <div className="screen-max-width">
                <div className="flex-center w-full my-10" id="chip">
                    <img src={chipImg} alt="chip image" height={180} width={180}/>
                </div>
                <div className="flex flex-col items-center">
                    <h2 className="hiw-title">
                        A17 Pro chip.
                        <br/> A monster win for gaming.

                    </h2>
                    <p className="hiw-subtitle">
                        It&apos;s here the biggest design of Apple&apos;s GPU.
                    </p>

                </div>
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
            </div>
        </section>
    )
}