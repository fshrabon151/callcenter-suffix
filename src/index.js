const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu-sm");
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

$(".menu-content").on("click", "a", function () {
  $(".menu-content a.text-primary").removeClass("text-primary");
  $(this).addClass("text-primary");
});
