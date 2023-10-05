/* Van Nguyen 301289600 COMP229-405 */
/*
No longer Need It
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav a");
    
    navLinks.forEach(link => {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        // Remove "active" class from all tabs
        navLinks.forEach(link => link.classList.remove("active"));
        // Add "active" class to the clicked tab
        this.classList.add("active");
      });
    });
  });*/