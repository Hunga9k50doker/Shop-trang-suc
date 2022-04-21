// // gsap.registerPlugin(ScrollTrigger)

// console.log(gsap);
// const gsapEffect = [
//   {
//     id: "back",
//     propsFrom: {
//       opacity: 0,
//     },
//     propsTo: {
//       opacity: 1,
//       duration: 2,
//       ease: "back",
//     },
//   },
//   {
//     id: "navbar",
//     props: {
//       opacity: 0.5,
//     },
//   },
// ];

// let ef = gsap.timeline({
//   duration: 5,
// });

// const propScrollTrigger= {
//       start: "top center ",
//       end: "top 200px",
//     markers: true,
//       scrub: true,
//       id: "banner__sologan",
//     }

// ef.fromTo(
//   ".main__project__item:nth-child(1)",
//   {
//     x: -510,
//   },
//   {
//     x: 0,
//     scrollTrigger: {
//       trigger: ".main__project__item:nth-child(1)",
//       ...propScrollTrigger,
//     },
//   }
// )

//   .fromTo(
//     ".main__project__item:nth-child(2)",
//     {
//       x: 510,
//     },
//     {
//       x: 0,
//       scrollTrigger: {
//         trigger: ".main__project__item:nth-child(2)",
//         ...propScrollTrigger,
//       },
//     }
//   )
//   .fromTo(
//     ".main__project__item:nth-child(3)",
//     {
//       x: -510,
//     },
//     {
//       x: 0,
//       scrollTrigger: {
//         trigger: ".main__project__item:nth-child(3)",
//         ...propScrollTrigger,
//       },
//     }
//   );

// let a = gsapEffect.find((e) => e.id === "back");
// // =========navbar===============
// gsap.fromTo(
//   ".nav__bar",
//   {
//     ...a.propsFrom,
//     x: -500,
//   },
//   { ...a.propsTo, x: 0 }
// );
// gsap.fromTo(
//   ".nav__trademark",
//   {
//     ...a.propsFrom,
//     y: -500,
//   },
//   {
//     ...a.propsTo,
//     y: 0,
//   }
// );
// gsap.fromTo(
//   ".nav__contact",
//   {
//     ...a.propsFrom,

//     x: 500,
//   },
//   {
//     ...a.propsTo,
//     x: 0,
//   }
// );

// // ======text animation========
// const sloganText = "Welcome!!!";
// // document.querySelector(".banner__sologan");
// let arr = sloganText.split("");
// document.querySelector(".banner__sologan").innerHTML = arr.join("");
// gsap
//   .fromTo(
//     ".banner__sologan",
//     {
//       opacity: 0,
//         yPercent: 200,
      
//     },
//     {
//       opacity: 1,
//       duration: 2,
//       yPercent: -50,
//       ease: "bounce.out",
//     }
//   )
 
// // const mySplitText =  new SplitText()
