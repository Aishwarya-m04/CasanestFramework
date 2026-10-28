import {test} from "@playwright/test";
test("hard coded wait",async({page})=>
    {
        await page.goto("https://practicetestautomation.com/practice-test-login/")
        await page.waitForTimeout(2000)
        await page.getByText("Username",{exact:true}).fill("student")
        await page.waitForTimeout(2000)
        await page.locator("#password").first().fill("Password123")
        await page.waitForTimeout(2000)
        await page.locator('button#submit').click()
    })
    test.only("auto sugg",async({page})=>
        {
            await page.goto("https://www.amazon.com/")
            await page.locator("input#twotabsearchtextbox").fill("shoes")
            await page.waitForTimeout(2000)
            let a=await page.locator("//div[@role='row']").allTextContents()
            console.log(a);
            
        })