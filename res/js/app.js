let allSliders = document.querySelectorAll(".Project-Image");

let totalSlider = allSliders.length;
let slidePos = new Array(totalSlider).fill(0);
let imgMat = new Array(totalSlider);

for (let i = 0; i < totalSlider; i++) {
  imgMat[i] = allSliders[i].querySelectorAll(".Mobile-Cover img");
  let btnLeft = allSliders[i].querySelector(".Slide_Left");
  let btnRight = allSliders[i].querySelector(".Slide_Right");

  btnLeft.addEventListener("click", () => {
    imgMat[i][slidePos[i] % imgMat[i].length].id = "";
    if (slidePos[i] == 0) slidePos[i] = imgMat[i].length;
    imgMat[i][--slidePos[i] % imgMat[i].length].id = "Active_Img";
  });

  btnRight.addEventListener("click", () => {
    imgMat[i][slidePos[i] % imgMat[i].length].id = "";
    imgMat[i][++slidePos[i] % imgMat[i].length].id = "Active_Img";
  });
}

// ============== TYPE WRITTER===============
const tw = document.querySelector("#Typewriter");
const typewriter = new Typewriter(tw, {
  loop: true
});

typewriter
  .typeString("<strong>Android</strong>")
  .pauseFor(300)
  .deleteAll(40)
  .typeString("<strong>Full Stack</strong>")
  .pauseFor(300)
  .deleteAll(40)
  .typeString("<strong>Game</strong>")
  .pauseFor(400)
  .start();
