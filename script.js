const splitText = (text, split) => {
  let clutter = "";
  text.split(split).forEach((el) => {
    if(el==="") return
    clutter += `<span>${el}</span>`;
  });
  return clutter;
};

const homeParagraphSplit = () => {
  document.querySelectorAll(".homePara").forEach((para) => {
    para.innerHTML = splitText(para.textContent, " ");
  });
};
homeParagraphSplit();

function homePageGsap(){
    let tl = gsap.timeline();

tl.from(
  "nav",
  {
    opacity: 0,
    y: -20,
    duration: 1,
  },
  "a"
)
  .from(
    ".heading",
    {
      y: 100,
      opacity: 0,
      duration: .9,
      stagger: .2,
    },
   
  )
  .from(".homeBtn",{
    y: 10,
      opacity: 0,
      duration: 1,
      
})
  .from(
    ".homePara span",
    {
      y: 10,
      opacity: 0,
      duration: 1,
      stagger: 0.03,
    },
    
  )


}
homePageGsap();

function secondPageGsap(){
    gsap.to(".secondPageBadge1",{
        opacity:"100%",
        duration:.01,
        scrollTrigger:{
            trigger:".secondPage",
            start:"top 50%",
            end:"top 50%",
            scrub:1,
        }
    })

    gsap.to(".secondPageBadge2",{
        opacity:"100%",
        duration:.01,
        scrollTrigger:{
            trigger:".secondPage",
            start:"top 10%",
            end:"top 10%",
            scrub:1,
        }
    })
    gsap.to(".secondPageBadge3",{
        opacity:"100%",
        duration:.01,
        scrollTrigger:{
            trigger:".secondPage",
            start:"top 40%",
            end:"top 40%",
            scrub:1,
        }
    })
    gsap.to(".secondPageBadge4",{
        opacity:"100%",
        duration:.01,
        scrollTrigger:{
            trigger:".secondPage",
            start:"top 20%",
            end:"top 20%",
            scrub:1,
        }
    })

     gsap.to(".secondPageBadge5",{
        opacity:"100%",
        duration:.01,
        scrollTrigger:{
            trigger:".secondPage",
            start:"top 5%",
            end:"top 5%",
            scrub:1,
           
        }
    })
}
secondPageGsap();

function thirdPageGsap(){
  gsap.from(".benH1",{
    opacity:0,
    y:'100',
    scrollTrigger:{
      trigger:'.benH1',
      start:"top center",
    }
  })
   gsap.from(".benH2",{
    opacity:0,
    y:'100',
    scrollTrigger:{
      trigger:'.benH2',
      start:"top center",
    }
  })
   gsap.from(".benH3",{
    opacity:0,
    y:'100',
    scrollTrigger:{
      trigger:'.benH3',
      start:"top center",
    }
  })
}
thirdPageGsap()


function fourthPageGsap(){
  gsap.from(".page4H1",{
      opacity:0,
      y:100,
      stagger:.3,
      scrollTrigger:{
        trigger:".fourthPage",
        start:"top center",
      }
    })
   gsap.to(".fourthPageBadge1",{
        opacity:"100%",
        duration:.01,
        scrollTrigger:{
            trigger:".fourthPage",
            start:"top 20%",
            end:"top 20%",
            scrub:1,
        }
    })
    gsap.to(".fourthPageBadge2",{
        opacity:"100%",
        duration:.01,
        scrollTrigger:{
            trigger:".fourthPage",
            start:"top 10%",
            end:"top 10%",
            scrub:1,
        }
    })
    gsap.to(".fourthPageBadge3",{
        opacity:"100%",
        duration:.01,
        scrollTrigger:{
            trigger:".fourthPage",
            start:"top 15%",
            end:"top 15%",
            scrub:1,
        }
    })
    
}
fourthPageGsap()


function sixPageGsap(){
    gsap.to(".sixthPage h1",{
        color : "#54DD4C",
        stagger:.4,
        scrollTrigger:{
            trigger:".sixthPage",
            start:"top 10%",
            end:"bottom bottom",
            scrub:1,
        }
    })
}
sixPageGsap()



let flag = true;

document.querySelectorAll(".faq").forEach((f) => {
  f.addEventListener("click", function () {
    const para = f.querySelector(".faqPara");
    const iTag = f.querySelector(".plusTag");

    if (flag) {
      para.style.maxHeight = "8rem";
      iTag.classList.remove("ri-add-large-line");
      iTag.classList.add("ri-subtract-line");
      flag = false;
    } else {
      para.style.maxHeight = "0rem";
      iTag.classList.remove("ri-subtract-line");
      iTag.classList.add("ri-add-large-line");
      flag = true;
    }
  });
});
