// Basit form doğrulaması ve gönderim işlemi
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
      contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Mesajınız gönderildi. En kısa sürede dönüş yapılacaktır.");
        contactForm.reset();
      });
    }
  });
  