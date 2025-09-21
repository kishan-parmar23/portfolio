//defining the toolbar as a cusomt html element so can be rendered consistantly across all pages. 
class MyToolbar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <nav id="navbar-example2" class="navbar navbar-expand-lg bg-body-tertiary px-3">
      <div class = "container-fluid">
        <a class="navbar-brand" href="#">Kishan Parmar Portfolio</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
          <div class="collapse navbar-collapse " id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" href="" id="ContactButton">Contact Email</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="" id="gitHubButton">GIT Repo</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      `
    }
  }
  
  customElements.define('my-toolbar', MyToolbar)

  document.getElementById("ContactButton").addEventListener("click", copyEmail);

function copyEmail() {
    navigator.clipboard.writeText("Kishan_parmar@live.co.uk");
  alert("The Contact Details Have Been Copy To Clipboard!");
};

document.getElementById("gitHubButton").addEventListener("click", openRepo);

function openRepo() {
    window.open("https://github.com/kishan-parmar23/portfolio");
}
