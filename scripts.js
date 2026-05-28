const inputData = document.getElementById("angka")
const btnConfirm = document.getElementById("submit")

const info = document.getElementById("info")

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const angka = getRandomInt(1, 100)

btnConfirm.addEventListener('submit', function(e){
    e.preventDefault();
    const inputUser = Number(inputData.value)

    if(inputUser > angka) {
        info.innerHTML = "Angka terlalu tinggi"
    } else if(inputUser < angka) {
        info.innerHTML = "Angka terlalu rendah"
    } else if(inputUser === angka) {
        info.innerHTML = "Selamat, angka yang anda tebak benar!!!"
        info.style.color = "green"
    }
})

