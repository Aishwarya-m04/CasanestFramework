import { test,expect } from "@playwright/test";
test("Toatal frames",async({browser})=>
    {
        let context=await browser.newContext()
        let page=await context.newPage()
       await page.goto("https://ui.vision/demo/webtest/frames/")
        let frames=await page.frames()
        console.log(frames.length);                //frame() return frames object in array
        //title
        for (const fra of frames) {
            console.log(await fra.title()); 
        }
        console.log(await page.title());
        
    })
    test.only("handling frames",async({page})=>
        {
            await page.goto("https://ui.vision/demo/webtest/frames/")
            await page.waitForTimeout(2000)

            //using frame() url
            let frame1=await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1"})
            await page.waitForTimeout(2000)
            await frame1.locator("//input[@name='mytext1']").fill("aish")
            await page.waitForTimeout(2000)
            await expect (await frame1.locator("//input[@name='mytext1']").inputValue()).toContain("ais")

            //using Framelocator()
          // let frame2= await page.frameLocator("//frame[@src='frame_2.html']").locator("//input[@name='mytext2']")
           //await frame2.fill("meti")

           //using ontentFrame()
           let frame2=await page.locator("//frame[@src='frame_2.html']").contentFrame()
           await frame2 .locator("//input[@name='mytext2']").fill("meti")
            await page.waitForTimeout(2000)

            //nested frame
            let frame3=await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3"})
            let button=await frame3.frameLocator("//iframe").locator("//span[text()='I am a human']")
            await button.click()
             await page.waitForTimeout(2000)

        })