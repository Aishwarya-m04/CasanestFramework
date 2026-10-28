import { test,expect  } from "@playwright/test";
test("nest",async({page})=>
    {
       await page.goto("https://casanest.eu/en")
       await page.locator("//a[text()='Buy']").click()
       await page.waitForTimeout(2000)
       await expect(page.locator("//h1[text()='Properties for sale in Portugal']")).toContainText("for sale")
    })