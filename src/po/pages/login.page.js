class LoginPage {
    async open () {
        await browser.url("https://www.saucedemo.com/");
    };
};

module.exports = LoginPage;