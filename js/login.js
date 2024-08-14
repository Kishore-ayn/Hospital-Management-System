const clientInfo = {
  name : "Maharajah's Institute of Medical Sciences",
  address : "Vizianagaram"
}

document.querySelector('.js-login-page').innerHTML =  `    
  <div class="login-page">
      <div class="company-logo">
          <img src="../images/vls-logo.png" alt="VLS Logo" class="logo">
      </div>
      <div class="client-name">
          <h1>${clientInfo.name}</h1>
      </div>    
      <form action="login">
          <div class="login-form">
              <div class="module-input-div">
                  <label for="module" class="module-label">Module  : </label>
                  <input type="text" placeholder="Module" name="Module" class="data-input" required>
              </div>
              <div class="username-input-div">
                  <label for="username" class="username-label">Username : </label>
                  <input type="text" placeholder="Username" name="Username" class="data-input" required>
              </div>
              <div class="password-input-div">
                  <label for="password" class="password-label">Password : </label>
                  <input type="text" placeholder="Password" name="Password" class="data-input" required>
              </div>
              <div class="login-button-div">
                  <button type="submit" class="login-button">Login</button> 
              </div>  
          </div>
      </form>
  </div>`


