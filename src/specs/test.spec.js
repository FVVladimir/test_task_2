// Technical Requirements:

// Tool: WebDriverIO.

// Browsers: Chrome, Edge (Run in Parallel).

// Pattern: Page Object Model (POM).

// Locators: CSS Selectors.

// Reporting: Generate an Allure Report (or similar HTML report) for the test run.

// Documentation: Add a README.md explaining how to run the tests and generate the report.

const LoginPage = require("./../po/pages/login.page");

const loginPage = new LoginPage();

describe("Final task", ()=> {
       
    beforeEach(async ()=> {
        await loginPage.open();
    });

    afterEach(async ()=> {
      await loginPage.open();
      await loginPage.userNameField.setValue("");
      await loginPage.passwordField.setValue("");
    });

    it("UC-1  Checkout Flow", async ()=> { 
        // Go to the page     
        const window =  await $(".login_wrapper-inner");
        const username = await $("#user-name");
        const passWord = await $("#password");
        const loginButton = await $("#login-button");
        await expect(browser).toHaveTitle("Swag Labs");
        await expect(window).toBeDisplayed();
        // Login with standard_user
        await username.setValue("standard_user");
        await passWord.setValue("secret_sauce");
        await loginButton.click();
        // Add a specific product to the cart (parametrize the product name, e.g., 'Sauce Labs Backpack'
        const productName = await $("#item_0_title_link").getText();
        await $("#add-to-cart-sauce-labs-bike-light").click();
        // Navigate to the Cart and validate the item is present
        await $(".shopping_cart_link").click();
          console.log(productName, "====== i am here ========")
          const productNameInCart = await $(".cart_item .cart_item_label  #item_0_title_link").getText();
          console.log(productNameInCart, "====== i am here again ========");
          await expect(productName).toEqual(productNameInCart);
         // Proceed to Checkout
          const checkoutButton = await $("#checkout").click();
         // Fill in the Information form (First Name, Last Name, Zip)
           const checkoutFirstName = await $("#first-name");
            const checkoutLastName = await $("#last-name");
             const checkoutZipCode = await $("#postal-code");
              
               await checkoutFirstName.setValue("Jhon");
                await checkoutLastName.setValue("Doe");
                 await checkoutZipCode.setValue("106");

              const checkoutButtonContinue = await $("#continue").click();
         // Complete the checkout and validate the success message: 'Thank you for your order!'     
           const buttonFinish = await $("#finish").click();
             const messege = await $(".complete-header").getText();
              await expect(messege).toEqual("Thank you for your order!");       

    }); 
    
    it("UC-2 Data Driven Login: standard_user (Should pass) ", async () => {          
        await expect(browser).toHaveTitle("Swag Labs");
        const window =  await $(".login_wrapper-inner");   
         await expect(window).toBeDisplayed();
         await $("#user-name").setValue("standard_user");
         await $("#password").setValue("secret_sauce");
         await $("#login-button").click();        
    });

    it("UC-2 Data Driven Login: locked_out_user (Should fail with specific error message)", async () => {
      await $("#user-name").setValue("locked_out_user");
      await $("#password").setValue("secret_sauce");
      await $("#login-button").click();
      const errorMessage = await $(".error h3").getText();
      console.log(errorMessage, "<<<<<==================");
      await expect(errorMessage).toEqual("Epic sadface: Sorry, this user has been locked out.");
    });
});