gsap.registerPlugin(ScrollTrigger, SplitText, ScrambleTextPlugin);

const tl = gsap.timeline({
  defaults: { duration: 1 },
  onStart: disableScroll, 
  onComplete: enableScroll 
});

const body = document.body;

function disableScroll() {
  body.style.overflow = "hidden";
}

function enableScroll() {
  body.style.overflow = "auto";
}

// Animação de clip-path adicionada à timeline
tl.fromTo(
  "#js-section-two",
  { "clip-path": "inset(50% 0% 50% 0%)" },
  {
    "clip-path": "inset(0% 0% 0% 0%)",
    duration: 10,
  }
);

// Animação para as palavra
const split1 = new SplitText("#palavra1", { type: "chars" });
const split2 = new SplitText("#palavra2", { type: "chars" });
const split3 = new SplitText("#palavra3", { type: "chars" });

tl.from(split1.chars.reverse(), {
  duration: 0.7,
  y: 100,
  autoAlpha: 0,
  stagger: 0.05,
}, "-=10");

tl.to(split1.chars, {
  duration: 0.7,
  y: -50,
  autoAlpha: 0,
  stagger: 0.05,
}, "-=8");

tl.from(split2.chars, {
  duration: 0.7,
  y: 100,
  autoAlpha: 0,
  stagger: 0.05,
}, "-=7");

tl.to(split2.chars, {
  duration: 0.7,
  y: -50,
  autoAlpha: 0,
  stagger: 0.05,
}, "-=5");

tl.from(split3.chars.reverse(), {
  duration: 0.7,
  y: 100,
  autoAlpha: 0,
  stagger: 0.05,
}, "-=4");

tl.to(split3.chars, {
  duration: 0.7,
  y: -50,
  autoAlpha: 0,
  stagger: 0.05,
}, "-=2");

tl.fromTo(".navbar", {
  opacity: 0,
}, {
  y: 10,
  opacity: 1,
  duration: 1,
  
});

tl.fromTo(".text-content", {
  opacity: 0,
}, {
  y: 10,
  opacity: 1,
  duration: 1,
  
});

tl.fromTo(".image-content", {
  opacity: 0,
}, {
  y: 10,
  opacity: 1,
  duration: 1,
  
});