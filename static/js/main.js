function showSideBar(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = 'flex';
}
function hideSideBar(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = 'none'
}

function validate() {
    const form = document.getElementById("my-form");
    const error = document.querySelector(".error");
    const success = document.querySelector(".successful");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
  
      if (name === "" || email === "" || message === "") {
        error.style.display = "block";
        success.style.display = "none";
  
        setTimeout(() => {
          error.style.display = 'none';
        }, 10000); // hide the success message after 10 seconds
      } 
      
      else {
        error.style.display = "none";
        success.style.display = "block";
  
        setTimeout(() => {
          success.style.display = 'none';
        }, 15000); 
        
        form.reset();
      }
    });
  
  }