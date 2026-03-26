// Technical Requirements:

// Tool: WebDriverIO.

// Browsers: Chrome, Edge (Run in Parallel).

// Pattern: Page Object Model (POM).

// Locators: CSS Selectors.

// Reporting: Generate an Allure Report (or similar HTML report) for the test run.

// Documentation: Add a README.md explaining how to run the tests and generate the report.

describe("first test", ()=> {
       
    beforeEach(async ()=> {
        await browser.url("https://www.saucedemo.com/")
    });

    it("check title", async ()=> {        
        await expect(browser).toHaveTitle("Swag Labs");
    });
})