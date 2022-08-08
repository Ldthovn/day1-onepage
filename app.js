// ----------- Start Slider ---------------
$(document).ready(function () {
  $(".voice__inner").slick({
    slidesToShow: 1,
    dots: true,
    centerMode: true,
    arrows: false,
    infinite: true,
  });
});

$(document).ready(function () {
  $(".partner__inner").slick({
    slidesToShow: 5,
    slidesToScroll: 2,
    dots: false,
    centerMode: true,
    arrows: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 321,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
});

// ---------------------End Slider ----------------------

//  -------------------- Start Featured Image ------------

// lightbox

const images = document.querySelectorAll(
  ".featured-image__content .featured-image__item"
);

images.forEach((image) => image.addEventListener("click", handleZoomImage));

function handleZoomImage(event) {
  const image = event.target.getAttribute("src");
  console.log(image);
  const template =
    /*html*/
    `
      <div class="featured__lightbox" id="lightbox">
        <i class="fa-solid fa-xmark close-lightbox"></i>
        <div class="featured__lightbox-content">
          <img
          src="${image}"
          alt=""
          class="featured__lightbox-img"
        />
        </div>
      </div>
  `;
  document.body.insertAdjacentHTML("beforeend", template);
  document.getElementsByTagName("body")[0].style.overflow = "hidden";
  
  let iconClose = document.getElementsByClassName("close-lightbox")[0];
  if (iconClose) {
    iconClose.onclick = function () {
      const modal = document.getElementById("lightbox");
      console.log("modal", modal);
      modal.style.display = "none";
      document.getElementsByTagName("body")[0].style.overflow = "auto";
    };
  }
  console.log("iconClose", iconClose);
}

// document.body.addEventListener("click", function (e) {
//   if (e.target.matches(".featured__lightbox")) {
//     // Remove lightbox out of dom
//     const close = document.querySelector(".close-lightbox");
//     close.addEventListener("click", function () {
//       e.target.parentNode.removeChild(e.target);
//       document.getElementsByTagName("body")[0].style.overflow = "auto";
//     });
//   }
// });

// Load more

$(document).ready(function () {
  $(".featured-image__content").slice(0, 8).show();
  $("#loadMore").on("click", function (e) {
    $(".featured-image__content").slice(8, 16).slideToggle();
    document.getElementById("loadMore").style.display = "none";
    document.getElementById("hiddenImage").style.display = "block";
  });
  $("#hiddenImage").on("click", function (e) {
    $(".featured-image__content").slice(8, 16).slideToggle();
    document.getElementById("loadMore").style.display = "block";
    document.getElementById("hiddenImage").style.display = "none";
  });
});

// ------------ End Featured Image ---------------

// ---------- Start Header Mobile --------------

document.getElementById("header-mobile").addEventListener("click", () => {
  document.getElementById("headerMobile").style.display = "block";
});

document.getElementById("headerMobile").addEventListener("click", () => {
  document.getElementById("headerMobile").style.display = "none";
});

//  ------ End Header Mobile --------------

//  ------------ Start Video --------------

const theURL = document.getElementById("myVideo").getAttribute("src");
const iframeTag = document.querySelector("iframe");
const win = iframeTag.contentWindow;

function handleVideo() {
  win.postMessage("playVideo", theURL);
}

//  ------------ End Video --------------
