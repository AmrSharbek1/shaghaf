document.querySelectorAll('.flip-btn').forEach(button => {
  button.addEventListener('click', function() {
    this.closest('.card').classList.toggle('flipped');
  });
});