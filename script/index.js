document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  // gsap code here!
});

window.addEventListener("mousemove", (e) => {
  const mouseY = e.clientY;
  const mouseX = e.clientX;

  // add delay on follow cursor
  document.querySelector("#cursor").style.transform = `translate(${mouseX}px, ${
    mouseY / 1
  }px)`;
});

ScrollSmoother.create({
  smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
  effects: true, // looks for data-speed and data-lag attributes on elements
  smoothTouch: 0.4, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
  pin: true, // pin the smooth scrolling to the body
  snap: true, // snap to the closest section
});

// counts
gsap.from(".count-1", {
  scrollTrigger: {
    trigger: ".count-1",
    start: "top center",
    end: "bottom center",
    toggleActions: "restart none none none",
  },
  y: 50,
  opacity: 0,
  duration: 0.5,
  ease: "power1.inOut",
});

gsap.from(".count-2", {
  scrollTrigger: {
    trigger: ".childhood",
    start: "bottom center",
    end: "bottom end",
    toggleActions: "restart none reverse none",
  },
  y: 50,
  opacity: 0,
  duration: 0.5,
  ease: "power1.inOut",
});

gsap.from(".count-3", {
  scrollTrigger: {
    trigger: ".family",
    start: "bottom center",
    end: "bottom end",
    toggleActions: "restart none reverse none",
  },
  y: 50,
  opacity: 0,
  duration: 0.5,
  ease: "power1.inOut",
});

gsap.from(".count-4", {
  scrollTrigger: {
    trigger: ".romance",
    start: "bottom center",
    end: "bottom end",
    toggleActions: "restart none reverse none",
  },
  y: 50,
  opacity: 0,
  duration: 0.5,
  ease: "power1.inOut",
});

gsap.from("#side-desc", {
  // scrollTrigger: {
  //   trigger: "#side-desc",
  //   start: "top center",
  //   end: "bottom center",
  //   scrub: 1,
  // },
  y: 300,
  duration: 0.5,
  ease: "power1.inOut",
});

// categories
gsap.from(".childhood-category", {
  scrollTrigger: {
    trigger: ".childhood",
    start: "top center",
    end: "bottom center",
    toggleActions: "restart none none none",
  },
  y: -250,
  duration: 0.5,
  ease: "power1.inOut",
});

gsap.from(".family-category", {
  scrollTrigger: {
    trigger: ".childhood",
    start: "bottom center",
    end: "bottom center",
    toggleActions: "restart none reverse none",
  },
  y: -250,
  rotate: "0deg",
  left: "25px",
  color: "#fff",
  duration: 0.5,
  ease: "power1.inOut",
});

gsap.from("#rizal", {
  scrollTrigger: {
    trigger: "#rizal",
    start: "top center",
    end: "bottom center",
    scrub: 1,
  },
  y: -200,
  duration: 0.5,
});

// cursor
gsap.to("#cursor", {
  scrollTrigger: {
    trigger: "#rizal",
    start: "top top",
    end: "bottom end",
    scrub: 1,
  },
  border: "2px solid #fff",
  backgroundColor: "rgba(0,0,0,0)",
  mixBlendMode: "none",
});
