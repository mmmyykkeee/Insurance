document
  .querySelector(".offcanvas", ".nav-item")
  .addEventListener("click", function () {
    var navbarCollapse = document.querySelector(".offcanvas-end");
    if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    } else {
      navbarCollapse.classList.add("show");
    }
  });

  $(".nav-item.dropdown").click(function () {
    $(".dropdown-menu").toggle();
  });

  document.section.style.overflow = "hidden";
