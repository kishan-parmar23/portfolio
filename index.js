// // Get the button element by its ID
// const contactButton = document.getElementById("ContactButton");

// // Add a click event listener
// button.addEventListener("click", () => {
// navigator.clipboard.writeText("Kishan_parmar@live.co.uk");
//   alert("The Contact Details Have Been Copy To Clipboard!");
// });


document.getElementById("ContactButton").addEventListener("click", copyEmail);

function copyEmail() {
    navigator.clipboard.writeText("Kishan_parmar@live.co.uk");
  alert("The Contact Details Have Been Copy To Clipboard!");
};

document.getElementById("gitHubButton").addEventListener("click", openRepo);

function openRepo() {
    window.open("https://github.com/kishan-parmar23/portfolio");
}