import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const Lucia = () => {

useGSAP(() => {
  // We offset the section upwards by 80vh to bring it into view earlier
  // This creates a smooth overlap effect from the previous section
  gsap.set(".lucia-life", {
    marginTop: "-80vh",
  });

  // Fade out the previous video as Lucia scrolls in
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".lucia-life", // Start when Lucia's section hits the scroll point
        scrub: 2, // Smooth scroll syncing
        start: "top 80%", // Begin fade as Lucia approaches
        end: "10% center", // Finish fade when near middle of viewport
      },
    })
    .to(".second-vd", {
      opacity: 0, // Fade out the pinned second video
      duration: 1,
      ease: "power1.inOut",
    });

  // Parallax the left-side image stack
  gsap.to(
    ".lucia-life .img-box",
    {
      scrollTrigger: {
        trigger: ".lucia-life", // Watch the entire section scroll
        start: "top center", // Start parallax halfway into viewport
        end: "80% center", // Finish before it fully scrolls out
        scrub: 2,
      },
      y: -200, // Moves image block up to create parallax effect
      duration: 1,
      ease: "power1.inOut",
    },
    "<"
  ); // Start at same time as the video fade
});


  return (
    <section className="lucia-life">
      {/* Left-side image stack (parallaxed) */}
      <div className="flex flex-col gap-5 items-end img-box lg:w-1/2 ps-10 mt-96">
        <div className="lucia-1">
          <img src="/images/lucia-1.webp" />
        </div>
        <div className="lucia-3">
          <img src="/images/lucia-3.webp" />
        </div>
      </div>

      {/* Right-side content column */}
      <div className="lg:w-1/2 lucia-life-content">
        <div className="max-w-xl lg:ps-32 ps-10">
          <h1>Lucia Caminos</h1>
          <h2>Lucia’s father taught her to fight as soon as she could walk.</h2>
          <p>
            Life has been coming at her swinging ever since. Fighting for her
            family landed her in the Leonida Penitentiary. Sheer luck got her
            out. Lucia’s learned her lesson — only smart moves from here.
          </p>
        </div>

        <div className="lucia-2">
          <img src="/images/lucia-2.webp" />
        </div>

        {/* Additional paragraph for mobile + wide screens */}
        <p className="max-w-xl lg:ps-32 ps-10">
          More than anything, Lucia wants the good life her mom has dreamed of
          since their days in Liberty City — but instead of half-baked
          fantasies, Lucia is prepared to take matters into her own hands.
        </p>
      </div>
    </section>
  );
};

export default Lucia;