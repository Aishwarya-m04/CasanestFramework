import {test} from "@playwright/test"
import { log } from "node:console"
test("browserFixture",async({browser,browserName})=>{
    console.log(browserName);        //to get name of browser  [op::chromium]

    let context=await browser.newContext()
    let page=await context.newPage()
    await page.goto("https://www.amazon.in/")
})