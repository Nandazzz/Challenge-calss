// Dom Selection

//document.getElementById()
let bukuSejarah = document.getElementById("buku1");
bukuSejarah.textContent = "Buku Sejarah Dunia";

let sejarahPerang = document.getElementById("buku2");
sejarahPerang.textContent = "Sejarah Perang Dunia";

let roketNasa = document.getElementById("buku3");
roketNasa.textContent = "Pembuatan Roket NASA";

//document.getElementByName()
let jumlahBuku1 = document.getElementsByName("jumlahbuku")[0].value;
console.log(`Jumlah buku 1: ${jumlahBuku1}`);

let jumlahBuku2 = document.getElementsByName("jumlahbuku")[1].value;
console.log(`Jumlah buku 2: ${jumlahBuku2}`);

let jumlahBuku3 = document.getElementsByName("jumlahbuku")[2].value;
console.log(`Jumlah buku 3: ${jumlahBuku3}`);

//document.getElementByName()
let heading = document.createElement("h2");
heading.textContent = "Sinopsis buku";
document.getElementsByTagName("h1").appendChild(heading);

//document.getElementByTagName()
let btn = document.getElementById("btnCount");
btn.addEventListener("click", function () {
  let heading = document.getElementsByTagName("h2");
  alert(`Hallo Bang`);
});

//document.getElementByClassName()
const heading = document.createElement("h1");
heading.textContent = "Ini Buku Kumpulan Sejarah";

document.getElementsByClassName("barang1").appendChild(heading);
document.getElementsByClassName("barang2").appendChild(heading);
document.getElementsByClassName("barang3").appendChild(heading);

//document.querySelector()
document.querySelector("p").style.color = "blue";
document.querySelector("hargdiskon").style.color = "#222222";
document.querySelector("buku1").style.color = "blue";
