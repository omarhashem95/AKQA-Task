var acc = document.getElementById("accordion");
  acc.addEventListener("click", function() {
    this.classList.toggle("active");
    $('#acctext').slideToggle();
  });
