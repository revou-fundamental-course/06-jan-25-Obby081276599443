// Ini File Javascript

console.log("Hello World!");

function formValidation() {
  let nameInput = document.getElementById("name-input").value;

  console.log(nameInput);
  // Condition for validate form
  if (nameInput == "") {
    alert("Nama Tidak Boleh Kosong!");
  } else {
    // Display the result form
    document.getElementById("result-form").innerHTML = nameInput;
  }

  let emailInput = document.getElementById("email-input").value;
  console.log(emailInput);
  if (emailInput == "") {
    alert("Email Wajib Diisi!");
  }

  let phoneInput = document.getElementById("phone-input").value;
  console.log(phoneInput);
  if (phoneInput == "") {
    alert("Bagi Nomor HP-nya dong!");
  }

  let addressInput = document.getElementById("address-input").value;
  console.log(addressInput);
  if (addressInput == "") {
    alert("Alamat Kamu Dimana?");
  }

  let ageInput = document.getElementById("age-input").value;
  console.log(ageInput);
  if (ageInput == "") {
    alert("Berapa Umur Kamu?");
  }

  let messageInput = document.getElementById("message-input").value;
  console.log("messageInput");
  if (messageInput == "") {
    alert("Pesan Jangan lupa diisi ya!");
  }
}
document.getElementById("submit-btn").addEventListener("click", formValidation);

console.log("logo-icon");

const slider = document.querySelector(".banner-slider");
const images = document.querySelectorAll(".banner-slider img");
let currentIndex = 0;

function autoSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(autoSlide, 3000);
