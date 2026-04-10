const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sidebar = document.getElementById("sidebar");

/* OPEN SIDEBAR */
menuBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
});

/* CLOSE SIDEBAR */
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

/* ACTIVE MENU + AUTO CLOSE */
const links = document.querySelectorAll(".menu a");

links.forEach(link => {
  link.addEventListener("click", () => {

    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    if(window.innerWidth <= 768){
      sidebar.classList.remove("active");
    }

  });
});

function go404(){
  window.location.href = "dashboard-404.html";
}