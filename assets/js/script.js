gsap.registerPlugin(ScrollTrigger);


gsap.to(".shape", {
    yPercent: -50,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".container-fluid",
        start: "top center",
        end: "bottom bottom",
        scrub: 0.05
    }
});


gsap.to(".shape", {
    scrollTrigger: {
        trigger: ".section-2",
        start: "top center",
        end: "bottom bottom",
        scrub: true
    },
    borderRadius: "0%",
    backgroundColor: "rgba(244,244,244,0.37)"
});


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


gsap.to(".shape", {
    scrollTrigger: {
        trigger: ".section-3",
        start: "top top",
        end: "bottom top",
        scrub: true
    },
    opacity: 0
});


const sections = document.querySelectorAll("section");
sections.forEach((section) => {
    gsap.to(section.querySelector(".text"), {
        scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "bottom bottom",
            scrub: true
        },
        opacity: 1,
        filter: "blur(0px)"
    });


    gsap.to(section.querySelector(".quote"), {
        scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom bottom",
            scrub: true
        },
        opacity: 1
    });
});