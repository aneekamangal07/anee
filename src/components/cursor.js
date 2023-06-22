import { gsap } from "gsap";

gsap.registerPlugin();

const cursor = document.querySelector(".cursor");
const cursorSize = document.querySelector(".cursor").offsetWidth;
const cursorMargin = cursorSize / 2;

const initCursor = () => {
  gsap.set(cursor, {
    left: `calc(50% - ${cursorMargin}px)`,
    top: `calc(50% - ${cursorMargin}px)`,
  });
};

const mouseMove = (e) => {
  gsap.to(cursor, {
    duration: 0.5,
    left: `${e.clientX - cursorMargin}px`,
    top: `${e.clientY - cursorMargin}px`,
    ease: "power2.out",
  });
};

const hideCursor = () => {
  gsap.to(cursor, {
    duration: 0.5,
    scale: 0,
    ease: "power2.out",
  });
};

const showCursor = () => {
  gsap.to(cursor, {
    duration: 0.5,
    opacity: 1,
    scale: 1,
    ease: "power2.out",
  });
};

const cursorComponent = () => {
  initCursor();
  hideCursor();

  window.addEventListener("mousemove", (e) => {
    mouseMove(e);
    setTimeout(() => {
      showCursor();
    }, 200);
  });
};

export { cursorComponent };
