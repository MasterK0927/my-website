const projectDetails = document.querySelectorAll('.project-details');

projectDetails.forEach(project => {
  project.addEventListener('mouseover', () => {
    project.style.transform = 'translateX(-20px)';
  });

  project.addEventListener('mouseout', () => {
    project.style.transform = 'translateX(0)';
  });
});