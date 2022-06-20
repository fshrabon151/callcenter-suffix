const myNav = document.getElementById("menu");
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu-sm");
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
window.onscroll = () => {
  if (window.scrollY > 150) {
    myNav.classList.add("py-2");

    myNav.classList.remove("py-4");
  } else {
    myNav.classList.add("py-4");
    myNav.classList.remove("py-2");
  }
};

$(".menu-content").on("click", "a", function () {
  $(".menu-content a.text-primary").removeClass("text-primary");
  $(this).addClass("text-primary");
});
