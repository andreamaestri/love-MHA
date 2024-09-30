// script.js

gsap.registerPlugin(ScrollTrigger);

// Parallax effect for the shape
gsap.to(".shape", {
    yPercent: -50, // Move the shape up by 50% of its height
    ease: "power4.out", // Use a slower easing function
    scrollTrigger: {
        trigger: ".container-fluid",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.05 // Adjust scrub for smoother scrolling
    }
});

// Morph to square in section 2
gsap.to(".shape", {
    scrollTrigger: {
        trigger: ".section-2",
        start: "top center",
        end: "bottom center",
        scrub: true
    },
    borderRadius: "0%",
    backgroundColor: "#fafafa"
});

// Morph back to circle in section 3
gsap.to(".shape", {
    scrollTrigger: {
        trigger: ".section-3",
        start: "top center",
        end: "bottom center",
        scrub: true
    },
    borderRadius: "50%",
    backgroundColor: "#2391f9"
});

// Fade out shape in section 3
gsap.to(".shape", {
    scrollTrigger: {
        trigger: ".section-3",
        start: "top center",
        end: "bottom top",
        scrub: true
    },
    opacity: 0
});

// Reveal text in each section with blur effect
const sections = document.querySelectorAll("section");
sections.forEach((section) => {
    gsap.to(section.querySelector(".text"), {
        scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "bottom center",
            scrub: true
        },
        opacity: 1,
        filter: "blur(0px)" // Remove blur as it scrolls into view
    });

    // Reveal quote in each section
    gsap.to(section.querySelector(".quote"), {
        scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "bottom center",
            scrub: true
        },
        opacity: 1
    });
});