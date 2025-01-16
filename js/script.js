// Ini File Javascript

console.log("Hello World!");

// Function For Form Validation
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
