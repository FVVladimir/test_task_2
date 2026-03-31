class LoginPage {
    
    
    async open () {
        await browser.url("https://www.saucedemo.com/");
    };

    get formForLogIn () {
        return $(".login_wrapper-inner");
    }

    get userNameField () {
        return $("#user-name");
    };

    get passwordField () {
        return $("#password");
    };

    get logInButton () {
        return  $("#login-button");
    }
};

module.exports = LoginPage;