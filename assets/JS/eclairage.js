document.getElementById("wrap");

for (let i = 0; i < mag2.light.length; i++) {
  let button = document.createElement("button");
  button.innerText = "Acheter";
  button.addEventListener("click", () => {
    alert("Voulez vous continuer ?");
  });

  let p1 = document.createElement("p");
  p1.classList.add("p1");

  let p2 = document.createElement("p");
  p2.classList.add("p2");

  let p3 = document.createElement("p");
  p3.classList.add("p3");

  let bdiv = document.createElement("div");
  bdiv.classList.add("bdiv");

  let img = document.createElement("img");
  img.classList.add("img");

  img.src = mag2.light[i].img;
  p1.innerHTML += mag2.light[i].titre1 + "<br>";
  p2.innerHTML += mag2.light[i].description2 + "<br>";
  p3.innerHTML += mag2.light[i].prix3 + "<br>";

  bdiv.appendChild(button);
  bdiv.appendChild(p1);
  bdiv.appendChild(p2);
  bdiv.appendChild(p3);
  bdiv.appendChild(img);
  wrap.appendChild(bdiv);

  document.body.appendChild(wrap);
}
