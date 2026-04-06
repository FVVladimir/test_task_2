// Technical Requirements:

  // Tool: WebDriverIO.
  // Browsers: Chrome, Edge (Run in Parallel).
  // Pattern: Page Object Model (POM).
  // Locators: CSS Selectors.
  // Reporting: Generate an Allure Report (or similar HTML report) for the test run.
  // Documentation: Add a README.md explaining how to run the tests and generate the report.

const LoginPage = require("../po/pages/login.page");
const HeaderComponent = require("../po/components/common/header.component");
const MainPage = require("../po/pages/main.page");
const ProductCart = require("../po/components/productCart.component");
const CartPage = require("../po/pages/cart.page");
const CheckOutPage = require("../po/pages/checkout.page")

const { Title, Users } = require("../po/test-data/index");


const loginPage = new LoginPage();
const header = new HeaderComponent();
const mainPage = new MainPage();
const productCart = new ProductCart();
const cartPage = new CartPage();
const checkout = new CheckOutPage();

describe("Final task", ()=> {
       
    beforeEach(async ()=> {
        await loginPage.open();
    });

    afterEach(async ()=> {
      await loginPage.open();
      await loginPage.userNameField.setValue(Users.clearField);
      await loginPage.passwordField.setValue(Users.clearField);
    });

    it("UC-1  Checkout Flow", async ()=> { 
        // Go to the page         
        await expect(browser).toHaveTitle(Title.mainTitle);
        await expect(loginPage.formForLogIn).toBeDisplayed();
       
        // Login with standard_user
        await loginPage.userNameField.setValue(Users.validUserName);
        await loginPage.passwordField.setValue(Users.validUserPassword);
        await loginPage.logInButton.click();
        
        // Add a specific product to the cart (parametrize the product name, e.g., 'Sauce Labs Backpack'
        const productName = await mainPage.product.getText();
        await productCart.buttonAddProductToCard.click();
        
        // Navigate to the Cart and validate the item is present
        await header.cartButton.click();     
        await expect(productName).toEqual(await productCart.productNameInCart);
         
        // Proceed to Checkout
          const checkoutButton = await cartPage.checkoutButton.click();
         
        // Fill in the Information form (First Name, Last Name, Zip)              
               await checkout.checkOutFieldFirstName.setValue(Users.checkOutUserFirstName);
                await checkout.checkOutFieldLastName.setValue(Users.checkOutUserLastName);
                 await checkout.checkOutFiedZipCode.setValue(Users.checkOutUserZipCode);

                   await checkout.checkOutButtonContinue.click();
         
        // Complete the checkout and validate the success message: 'Thank you for your order!'            
            await checkout.checkOutButtonFinish.click();
             const messege = await $(".complete-header").getText();
              await expect(messege).toEqual("Thank you for your order!");       

    }); 
    
    it("UC-2 Data Driven Login: standard_user (Should pass) ", async () => {          
        
         await expect(browser).toHaveTitle(Title.mainTitle);          
         await expect(loginPage.formForLogIn).toBeDisplayed();
         
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