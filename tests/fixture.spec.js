import {test} from "@playwright/test";
test("Fixtures",async({page})=>{
    await page.goto("https://www.amazon.in/")
})