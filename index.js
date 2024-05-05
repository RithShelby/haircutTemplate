const cardText = document.querySelectorAll(".sliding > .each-item");
const allImageDot = document.querySelectorAll(".image-dots");
console.log(cardText, allImageDot);

let currentIndex = 0;

function nextSlide() {
  cardText[currentIndex].style.animation = "nextOut 0.5s forwards";
  if (currentIndex >= cardText.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  cardText[currentIndex].style.animation = "nextIn 0.5s forwards";
}

function autoSliding() {
  deleteInterval = setInterval(() => {
    nextSlide();
    pointerImageDot();
  }, 3000);
}

autoSliding();

const slideConatiner = document.querySelector(".slide-container");
slideConatiner.addEventListener("mouseover", () => {
  clearInterval(deleteInterval);
});

slideConatiner.addEventListener("mouseleave", () => {
  autoSliding();
});

function pointerImageDot() {
  for (let i = 0; i < allImageDot.length; i++) {
    allImageDot[i].className = allImageDot[i].className.replace("active", "");
  }

  allImageDot[currentIndex].className += " active";
}

allImageDot.forEach(function (dot) {
  dot.addEventListener("click", function (e) {
    e.currentTarget.classList.add("active");
    const imageDotIndex = e.currentTarget.getAttribute("attr");
    if (imageDotIndex > currentIndex) {
      cardText[currentIndex].style.animation = "nextOut 0.5s forwards";
      currentIndex = imageDotIndex;
      cardText[currentIndex].style.animation = "nextIn 0.5s forwards";
    } else {
      cardText[currentIndex].style.animation = "prevOut 0.5s forwards";
      currentIndex = imageDotIndex;
      cardText[currentIndex].style.animation = "prevIn 0.5s forwards";
    }
    pointerImageDot();
  });
});

// back to top
