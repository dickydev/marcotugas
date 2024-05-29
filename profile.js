function setDefaultValues() {
  // Definisikan nilai default
  var defaultName = "John Doe";
  var defaultPhone = "1234567890";
  var defaultEmail = "john.doe@example.com";

  // Temukan elemen-elemen input
  var nameInput = document.getElementById("name");
  var phoneInput = document.getElementById("phone");
  var emailInput = document.getElementById("email");

  // Isi nilai default ke dalam elemen input
  nameInput.value = defaultName;
  phoneInput.value = defaultPhone;
  emailInput.value = defaultEmail;
}

// Panggil fungsi setDefaultValues saat halaman dimuat
window.onload = function () {
  setDefaultValues();
};

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const sidebar = document.getElementById("sidebar");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    sidebar.classList.toggle("active");
  });
});
