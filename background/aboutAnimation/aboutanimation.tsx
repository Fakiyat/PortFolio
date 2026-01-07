import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AboutAnimationProps {
  section: HTMLElement;
  left: HTMLElement;
  right: HTMLElement;
  //   name: HTMLElement;
}

export function initAboutAnimations({
  section,
  left,
  right,
}: AboutAnimationProps) {
  const ctx = gsap.context(() => {
    /* -----------------------------
       Slide animations (STABLE)
    ----------------------------- */
    const slideTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });

    slideTl
      .from(left, {
        x: -120,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
      })
      .from(
        right,
        {
          x: 120,
          opacity: 0,
          duration: 1.1,
          ease: "power3.out",
        },
        "<"
      );

    /* -----------------------------
       Typing animation (CONTROLLED)
    ----------------------------- */
    //     const typingTl = createTypingAnimation({
    //       element: name,
    //       text: " Afaq",
    //     });

    //     typingTl.pause(); // IMPORTANT: do not auto-start

    //     ScrollTrigger.create({
    //       trigger: section,
    //       start: "top 65%",
    //       onEnter: () => typingTl.play(),
    //       onLeave: () => typingTl.pause(),
    //       onEnterBack: () => typingTl.play(),
    //       onLeaveBack: () => typingTl.pause(),
    //     });
  }, section);

  return () => ctx.revert();
}
