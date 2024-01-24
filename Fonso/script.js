const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "D A N A D I N HO";
  gif.src =
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWt2dmQ3NWozbDl5MzJ3Mmh3ZDNjc2txemo2M3Zpb3ExYXE5cnh3aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/SvGFA2WF9IP0WjmzvE/giphy.gif";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
