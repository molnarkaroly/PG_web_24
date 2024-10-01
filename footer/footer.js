document.addEventListener('DOMContentLoaded', () => {
    // Use fetch to load the footer.html file
    fetch('../footer/footer.html')
      .then(response => response.text())  // Convert the response to text
      .then(data => {
        // Insert the footer into the #footer div
        document.getElementById('footer-place').innerHTML = data;
      })
      .catch(error => console.error('Error loading the footer:', error));
  });
