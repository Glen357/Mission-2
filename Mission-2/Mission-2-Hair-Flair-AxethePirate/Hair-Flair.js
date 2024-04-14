function calculateTotal() {
    let checkboxes = document.querySelectorAll('.services input[type="checkbox"]');
    let totalPrice = 0;
  
    checkboxes.forEach(function (checkbox) {
      if (checkbox.checked) {
        totalPrice += parseFloat(checkbox.value);
      }
    });
  
    document.getElementById('totalPrice').textContent = 'Total Price: $' + totalPrice.toFixed(2);
  }
  
  document.querySelectorAll(".image-container img").forEach((image) => {
    image.onclick = () => {
      document.querySelector(".popup-image").style.display = "flex";
      document.querySelector(".popup-image img").src = image.getAttribute("src");
    };
  });
  
  document.querySelectorAll(".popup-image span").forEach((span) => {
    span.onclick = () => {
      document.querySelector(".popup-image").style.display = "none";
    };
  });