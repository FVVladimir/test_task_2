class LoginPage { 
    
    
    async open () {
        await browser.url("https://www.saucedemo.com/");
    };

    async login (username, password) {
         
         await this.userNameField.setValue(username);
         await this.passwordField.setValue(password);
         await this.logInButton.click();         
    };
    
    get formForLogIn () {
        return $(".login_wrapper-inner");
    };

    get userNameField () {
        return $("#user-name");
    };

    get passwordField () {
        return $("#password");
    };

    get logInButton () {
        return  $("#login-button");
    };

    get curentErrorMessage () {
        return  $(".error h3");
    }

};

module.exports = LoginPage;
 
/* 
@param { userName | password }
@return {*}


input(param) {
     
const fields = {
       
           userName: "#user-name",
           password: "#password",
           loginButton: "#login-button",
           clickButton {
              return this.LoginButton.click()
           };
         };

      return  $(".login_wrapper-inner" ${fields[param.toLowerCase()]});  
         
*/