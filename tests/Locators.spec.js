import {test} from "@playwright/test";
test("Locators",async({page})=>
    {
        await page.goto("https://practicetestautomation.com/practice-test-login/")
        //username textfield by css
        await page.locator("input#username").fill("student")
        //password textfield by css
        await page.locator("input#password").fill("Password123")
        //submit 
        await page.locator('[class="btn"]').click()
    })