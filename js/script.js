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

let indexBanner = 0;

changeBackground();

function nextBanner() {
  indexBanner += 1;
  changeBackground();
}
console.log("logo-icon");

// Function to change background banner
function changeBackground() {
  let bannerList = document.getElementsByClassName("banner-image");

  if (indexBanner > bannerList.length - 1) {
    // Reset indexBanner
    indexBanner = 0;
  }

  // Looping to change background
  for (let i = 0; i < bannerList.length; i++) {
    bannerList[i].style.display = "none";
  }

  bannerList[indexBanner].style.display = "block";
}

setInterval(nextBanner, 3000);
