window.addEventListener('DOMContentLoaded', () => {
  const fadeImage = document.getElementById('fade-image');
  if (fadeImage) {
    // Add delay to trigger fade-in
    setTimeout(() => {
      fadeImage.style.opacity = '1';
    }, 500);
  }
});
