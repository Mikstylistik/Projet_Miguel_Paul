let slid = 1;
afficherdiapositive(slid);

function sliderChoice(n) {
  afficherdiapositive((slid = n));
}
function afficherdiapositive(n) {
  let i;
  let slides = document.getElementsByClassName("slider");
  let bullet = document.getElementsByClassName("bullet");
  if (n > slides.length) {
    slid = 1;
  }
  if (n < 1) {
    slid = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < bullet.length; i++) {
    bullet[i].className = bullet[i].className.replace("active", "");
  }
  slides[slid - 1].style.display = "block";
}
afficherdiapositive(slid);

function slidertourne(n) {
  afficherdiapositive((slid += n));
}
