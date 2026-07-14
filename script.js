document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! Your question has been received. You can also contact Umar Khan at tryextra568@gmail.com");
    form.reset();
  });
});
