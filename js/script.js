gsap.registerPlugin(ScrollTrigger, SplitText, ScrambleTextPlugin, ScrollSmoother);

const tl = gsap.timeline({
  defaults: { duration: 1 },
  onStart: disableScroll, 
  onComplete: enableScroll 
});

const body = document.body;

function disableScroll() {
  body.style.overflow = "auto";
}

function enableScroll() {
  body.style.overflow = "auto";
}

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


// --------------CURSOR PERSONALIZADO--------------
const cursor = document.querySelectorAll('.cursor');

window.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  cursor.forEach(cur => {
    cur.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });
});

// --------------FUNDO GRANULADO ANIMADO--------------
gsap.to("#js-section-two", {
  duration: 10,
  backgroundPosition: "0% 100%", // Movimento do gradiente
  
  ease: "power1.inOut" // Suaviza a animação
});

//-----------SMOOTHER--------------

const smoother = ScrollSmoother.create({
  
  smooth:3,
  effects: true
})

smoother.effects("img", {speed: "auto"});  

document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); 

    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      smoother.scrollTo(targetSection, true, "top top");
    }
  });
});

//-----------ANIMÇÃO DE TRANSIÇÃO SECTION ABOUT--------------

const tl2 = gsap.timeline();

tl2.fromTo(".section-about", 
  { yPercent: 0 }, // Estado inicial
  { yPercent: 0, ease: "none" } // Estado final (subindo)
);

ScrollTrigger.create({
  animation: tl2,
  trigger: ".section-about",
  start: "top top",
  end: "bottom top",
  scrub: true,
  pinSpacing: false, 
  // markers: true, 
  
});

//-----------------TROCA DE IMAGENS SECTION ABOUT------------------

const images = [
  "assets/images/Bloomberg.jpeg",
  "assets/images/casasBahia.jpeg",
  "assets/images/Oracle.jpeg"
];

let index = 0; // Índice da imagem atual
const imageElement = document.getElementById("aboutImage");

function changeImage() {
  
  gsap.to(imageElement, {
      opacity: 0,  
      duration: 1,
      onComplete: () => {
          // Troca a imagem
          index = (index + 1) % images.length; 
          imageElement.src = images[index];
          
          
          gsap.to(imageElement, {
              opacity: 1, 
              duration: 0.5
          });
      }
  });
}


setInterval(changeImage, 8000);

//--------------------------------------------------------

const aboutText = new SplitText("#aboutText", {
  type: "words",  // "words", "chars", ou "lines"
});

// Cria a animação com ScrollTrigger
gsap.from(aboutText.words, {
  scrollTrigger: {
    trigger: "#aboutText", 
    start: "top 100%", 
    end: "bottom 20%", 
    
  },
  duration: 0.8,
  opacity: 0,
  y: 50, 
  stagger: 0.05, 
  ease: "power2.out",
});

//---------------------section-skills------------------------------------


const tl3 = gsap.timeline({
  scrollTrigger: {
      trigger: ".section-skills",
      start: "top 80%", 
      toggleActions: "play none none none"
  }
});

// Efeito de Scramble no título
tl3.fromTo("#scramble-text", 
  { opacity: 0 },  
  { 
    opacity: 1, 
    duration: 2, 
    scrambleText: "Algumas tecnologias que utilizo para desenvolver aplicações web.",
    ease: "power2.out"
  }
);

// Animação para os cards
tl3.fromTo(".skills", 
  { opacity: 0, y: 100 }, 
  { opacity: 1, y: 0, duration: 0.8, stagger: 0.5, ease: "power3.out" }, 
  
);

//---------------------NAVBAR------------------------------------


const menuIcon = document.getElementById('menu-icon');
const navList = document.getElementById('nav-list');
const navLinks = document.querySelectorAll('.nav-list li a'); 


menuIcon.addEventListener('click', () => {
    navList.classList.toggle('active');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
      navList.classList.remove('active');
  });
});

//------------------------SECTION-PROJECTS----------------------------------


document.querySelectorAll(".project").forEach((project, index) => {
  gsap.fromTo(
    project,
    { opacity: 0, y: 100 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: project,
        start: "top 50%", 
        toggleActions: "play none none none",
      },
    }
  );
});


//------------------------SECTION-CONTACT----------------------------------

const tl4 = gsap.timeline({
  scrollTrigger: {
      trigger: ".section-contact",
      start: "top 80%", 
      toggleActions: "play none none none"
  }
});



// Animação para os cards
tl4.fromTo(".contact-card", 
  { opacity: 0, y: 100 }, 
  { opacity: 1, y: 0, duration: 0.8, stagger: 0.5, ease: "power3.out" }, 
  
);


