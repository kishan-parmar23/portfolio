// Get the button element by its ID
const button = document.getElementById("ContactButton");

// Add a click event listener
button.addEventListener("click", () => {
navigator.clipboard.writeText("Kishan_parmar@live.co.uk");
  alert("The Contact Details Have Been Copy To Clipboard!");
});

