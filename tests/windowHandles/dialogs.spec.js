import { test,expect } from "@playwright/test";
test("dialog handle",async({page})=>
    {
        //auto dismiss check
        await page.goto("https://testautomationpractice.blogspot.com/")
        await page.getByRole("button",{name:'Simple Alert'}).click()
        await page.getByRole("button",{name:'Confirmation Alert'}).click()
        await expect(page.locator("#demo")).toContainText("Cancel")
         await page.waitForTimeout(2000)
        await page.getByRole("button",{name:'Prompt Alert'}).click()
        await expect(page.locator("#demo")).toContainText("cancelled")
        await page.waitForTimeout(2000)

        // this is just a demo comment ,
        /**
         * this is a multi line comment example
         * 
         */

        await page.goto("https://demoapps.qspiders.com/ui/timePick/timeClock?sublist=1");
        await page.locator("#:r3:").click();
        
        let clock = await page.locator("MuiClock-clock css-eziifo").boundingBox();
        await page.locator("MuiClock-clock css-eziifo").hover();
        

    })