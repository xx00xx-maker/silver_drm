// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('.content-section');
  
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      const targetId = this.getAttribute('data-target');
      
      // Remove active class from all nav items
      navItems.forEach(nav => nav.classList.remove('active'));
      
      // Add active class to clicked nav item
      this.classList.add('active');
      
      // Hide all sections
      sections.forEach(section => section.classList.remove('active'));
      
      // Show target section
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.add('active');
      }
    });
  });
});
