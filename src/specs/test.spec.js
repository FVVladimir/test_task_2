//https://www.saucedemo.com/

describe("first test", ()=> {
       
    beforeEach(async ()=> {
        await browser.url("https://www.saucedemo.com/")
    })

    it("check title", async ()=> {
        const title = await browser.getTitle();
        console.log(title)
    })
})