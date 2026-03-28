// Technical Requirements:

// Tool: WebDriverIO.

// Browsers: Chrome, Edge (Run in Parallel).

// Pattern: Page Object Model (POM).

// Locators: CSS Selectors.

// Reporting: Generate an Allure Report (or similar HTML report) for the test run.

// Documentation: Add a README.md explaining how to run the tests and generate the report.



describe("UC-1 Checkout Flow", ()=> {
       
    beforeEach(async ()=> {
        await browser.url("https://www.saucedemo.com/")
    });

    it("Login with standard_user", async ()=> {      
        const window =  $(".login_wrapper-inner");
        const username = $("#user-input");
        const passWord = $("#password");
        const loginButton = $("#login-button");
        await expect(browser).toHaveTitle("Swag Labs");
        await expect(window).toBeDisplayed();
    });

    it("Add a specific product to the cart (parametrize the product name, e.g., 'Sauce Labs Backpack'", async ()=> {
        console.log("i am a second step")
    });

    it("Navigate to the Cart and validate the item is present", async ()=> {
        console.log("i am a therd step")
    });

    it("Proceed to Checkout", async ()=> {
        console.log("i am a fourth step")
    });

    it("Fill in the Information form (First Name, Last Name, Zip)", async ()=> {
        console.log("i am a fifth step")
    });

    it("Complete the checkout and validate the success message: 'Thank you for your order!'", async ()=> {
        console.log("i am a sixth step")
    });
});

// UC-2 Data Driven Login:

// Use a Data Provider to test login with:

// 1. standard_user (Should pass).

// 2. locked_out_user (Should fail with specific error message).