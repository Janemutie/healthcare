
// Function to open link in new tab
function openNewTab() {
  const url = "https://agakhanhospitals.org/en/kenya"; // Replace with your actual link
  window.open(url, "_blank");
}

// Attach the function to the button
document.getElementById("click-me").addEventListener("click", openNewTab);
