// Initialize GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Enhanced Navbar Animation
const menuBtn = document.querySelector('.menu-btn');
const navList = document.querySelector('.list');
const menuIcon = document.querySelector('.menu-btn i');

menuBtn.addEventListener('click', () => {
  navList.classList.toggle('active');
  menuBtn.classList.toggle('active');
  
  // Change menu icon
  if (navList.classList.contains('active')) {
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-times');
    
    // Animate menu items with GSAP
    gsap.fromTo('.list li', 
      { x: 100, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        duration: 0.6, 
        stagger: 0.1,
        ease: "back.out(1.7)"
      }
    );
  } else {
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
    
    // Animate menu items out
    gsap.to('.list li', {
      x: 100,
      opacity: 0,
      duration: 0.3,
      stagger: 0.05
    });
  }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.list a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      navList.classList.remove('active');
      menuBtn.classList.remove('active');
      menuIcon.classList.remove('fa-times');
      menuIcon.classList.add('fa-bars');
    }
  });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (window.innerWidth <= 768 && 
      !e.target.closest('.navbar') && 
      navList.classList.contains('active')) {
    navList.classList.remove('active');
    menuBtn.classList.remove('active');
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
  }
});

// Home section typing effect
const homeText = "Hello! I am Imene";
let homeElement = document.querySelector("#home h1");

if (homeElement) {
    homeElement.innerHTML = "";
    let i = 0;
    const typeWriter = () => {
        if (i < homeText.length) {
            homeElement.innerHTML += homeText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    // Delay the typing effect slightly for a better experience
    setTimeout(typeWriter, 500);
}

// Header animation on scroll
gsap.to(".navbar", {
    y: -100,
    scrollTrigger: {
        trigger: "#home",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});

// Animate sections on scroll
gsap.utils.toArray("section").forEach(section => {
    gsap.fromTo(section, 
        { y: 50, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        }
    );
});

// Project cards animation
gsap.utils.toArray(".project_card").forEach((card, i) => {
    gsap.fromTo(card,
        { y: 100, opacity: 0, rotationY: 15 },
        {
            y: 0,
            opacity: 1,
            rotationY: 0,
            duration: 0.8,
            delay: i * 0.2,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        }
    );
});

// Contact icons animation
gsap.fromTo(".container a", 
    { scale: 0, rotation: -180 },
    {
        scale: 1,
        rotation: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
            trigger: "#contact",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    }
);

// Scroll progress indicator
window.addEventListener('scroll', () => {
    const winHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset;
    const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
    document.querySelector('.loading-bar').style.width = scrollPercent + '%';
});

// Moon icon click animation
document.querySelector('.moon').addEventListener('click', () => {
    gsap.to('.moon', {
        rotation: 360,
        duration: 1,
        ease: "power2.out"
    });
});

// Button hover animation
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        gsap.to(button, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
        });
    });
    
    button.addEventListener('mouseleave', () => {
        gsap.to(button, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
        });
    });
});

// Project card hover animations
document.querySelectorAll('.project_card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            scale: 1.03,
            duration: 0.3,
            ease: "power2.out"
        });
    });
    
    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
        });
    });
});