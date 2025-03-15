import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const scrollBtn: HTMLElement | null = document.getElementById("scrollBtn");

if (!scrollBtn) {
  throw new Error("Scroll button element not found");
}

const swiper: Swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  effect: "fade",
  speed: 1000,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  keyboard: {
    enabled: true,
  },
  grabCursor: true,
});
scrollBtn.onclick = (): void => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

window.onscroll = (): void => {
  const p: number =
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  scrollBtn.style.background = `conic-gradient(#14aef6 ${p}%, #ddd ${p}% 100%)`;
};
