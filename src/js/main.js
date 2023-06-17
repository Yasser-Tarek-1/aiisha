// DropDown
const clicked = (details, arrow) => {
  const style = details.classList.contains("hidden");
  if (style) {
    arrow.style.rotate = "180deg";
  } else {
    arrow.style.rotate = "0deg";
  }
  details.classList.toggle("hidden");
};
// Header
const langBtn = document.getElementById("langBtn");
const langArrow = document.getElementById("langArrow");
const langDropdown = document.getElementById("langDropdown");
const langLi = document.querySelectorAll(".langLi");
const searchBtn = document.getElementById("searchBtn");
const searchDropdown = document.getElementById("searchDropdown");
const searchItemBtn = document.getElementById("searchItemBtn");

langBtn?.addEventListener("click", () => {
  clicked(langDropdown, langArrow);
  searchDropdown.classList.add("hidden");
});

langLi.forEach((item) => {
  item?.addEventListener("click", () => {
    clicked(langDropdown, langArrow);
  });
});

searchItemBtn?.addEventListener("click", () => {
  searchDropdown.classList.add("hidden");
});

searchBtn?.addEventListener("click", () => {
  searchDropdown.classList.toggle("hidden");
  langDropdown.classList.add("hidden");
  langArrow.style.rotate = "0deg";
});

// Sidebar
const modal = document.getElementById("modal");
const menu = document.getElementById("menu");
const closeIcon = document.getElementById("close");
const overlay = document.getElementById("overlay");
const list = document.querySelectorAll("#list");

const openModal = () => {
  modal.classList.remove("hide");
  overlay.classList.remove("overlay-hide");
  modal.classList.add("show");
  overlay.classList.add("overlay-show");
};

const closeModal = () => {
  modal.classList.remove("show");
  overlay.classList.remove("overlay-show");
  modal.classList.add("hide");
  overlay.classList.add("overlay-hide");
};

menu?.addEventListener("click", openModal);

closeIcon?.addEventListener("click", closeModal);

list.forEach((ul) => {
  ul?.addEventListener("click", closeModal);
});

overlay?.addEventListener("click", closeModal);
/* Home Page */

// Slider 1 sessions
var swiper1 = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-1",
    prevEl: ".swiper-button-prev-1",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

// Slider 2 courses
var swiper2 = new Swiper(".slide-content-2", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-2",
    prevEl: ".swiper-button-prev-2",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

// Slider 3 reflections
var swiper3 = new Swiper(".slide-content-3", {
  slidesPerView: 4,
  spaceBetween: 1,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-3",
    prevEl: ".swiper-button-prev-3",
  },

  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    520: {
      slidesPerView: 3,
    },
    950: {
      slidesPerView: 4,
    },
  },
});

// Slider 4 retreat
var swiper4 = new Swiper(".slide-content-4", {
  slidesPerView: 1,
  // spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-4",
    prevEl: ".swiper-button-prev-4",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
  },
});

// Slider 5 sucess
var swiper5 = new Swiper(".slide-content-5", {
  slidesPerView: 1,
  // spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-5",
    prevEl: ".swiper-button-prev-5",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
  },
});

/* Courses Page */
const coursesFilter = document.querySelectorAll(".coursesFilter");

coursesFilter.forEach((item) => {
  item?.addEventListener("click", (li) => {
    coursesFilter.forEach((classes) => {
      classes.classList.remove("active");
    });
    li.target.classList.add("active");
  });
});

/* Course Details Page */
// Show The Course Details
const intro = document.getElementById("content-1");
const details = document.getElementById("content-1-details");
const arrow = document.getElementById("content-1-arrow");

intro?.addEventListener("click", () => {
  clicked(details, arrow);
});

const intro2 = document.getElementById("content-2");
const details2 = document.getElementById("content-2-details");
const arrow2 = document.getElementById("content-2-arrow");

intro2?.addEventListener("click", () => {
  clicked(details2, arrow2);
});

// Video Viwer
// var myPlayer = videojs("my-video");

const videoPlayer = document.querySelectorAll(".video-player");
const videoModal = document.getElementById("video-modal");
const videoOverlay = document.getElementById("video-overlay");
const closeVideoBtn = document.getElementById("closeVideoBtn");

videoPlayer.forEach((btn) => {
  // open video
  btn?.addEventListener("click", () => {
    videoModal.classList.remove("hidden");
    console.log("hi");
  });
});
// close video
videoOverlay?.addEventListener("click", () => {
  videoModal.classList.add("hidden");
  videojs("my-video").pause();
});
closeVideoBtn?.addEventListener("click", () => {
  videoModal.classList.add("hidden");
  videojs("my-video").pause();
});

/* Settings Page */
const sideBtns = document.querySelectorAll(".sideBtn");
const tabsSettings = document.querySelectorAll(".tabsSettings");

sideBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    sideBtns.forEach((items) => {
      items.classList.remove("tabs-active");
    });
    btn.classList.add("tabs-active");
    const att = btn.getAttribute("data-open");
    tabsSettings.forEach((tab) => {
      const tabAtt = tab.getAttribute("data-open");
      tab.classList.replace("flex", "hidden");
      if (tabAtt == att) {
        tab.classList.replace("hidden", "flex");
      }
    });
  });
});

// my bills
const openDetails = document.getElementById("openDetails");
const deatailsModal = document.getElementById("deatailsModal");
const deatailsModalOverlay = document.getElementById("deatailsModal-overlay");
const closeDeatailsBtn = document.getElementById("closeDeatailsBtn");

// open bills details
openDetails?.addEventListener("click", () => {
  deatailsModal.classList.remove("hidden");
});

// close bills details
deatailsModalOverlay?.addEventListener("click", () => {
  deatailsModal.classList.add("hidden");
});
closeDeatailsBtn?.addEventListener("click", () => {
  deatailsModal.classList.add("hidden");
});
