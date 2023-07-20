let mobile_menu = document.querySelector(".mobile_menu");
let main_menu = document.querySelector(".main_menu");
let show = false;
mobile_menu.addEventListener("click", () => {
  show = !show;
  if (!show) {
    main_menu.style.right = "-50%";

  } else {
    main_menu.style.right = "-0%";
  }
  console.log(show);
});
