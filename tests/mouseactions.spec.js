import { test } from "@playwright/test";
test("mouse actions",async({page})=>
    {
        await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0")
        await page.locator("//button[text()='Yes']").click()

        //-----------rightclick-----
        await page.waitForTimeout(3000)   
        await page.locator("//a[text()='Right Click']").click()
         await page.waitForTimeout(3000)
         await page.locator("#btn_a").click({button:'right'})

         //---doubleclick------------------------------------
         await page.goto("https://demoapps.qspiders.com/ui/button/buttonDouble?sublist=2")
        // await page.locator("#btn_a").dblclick()
        await page.waitForTimeout(3000)
         await page.locator("#btn_a").click({clickCount:2})
         await page.waitForTimeout(3000)

         //down and up-----------------------------------------
         await page.goto("https://demoapps.qspiders.com/ui/clickHold?sublist=0")
         await page.locator("#circle").hover()
         await page.mouse.down()
         await page.waitForTimeout(2000)
         await page.mouse.up()
           await page.waitForTimeout(2000)

           //disabled or hidden buttons---------------
           await page.goto("https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4")
          // await page.locator("//input[@id='submit']").click({force:true})
          await page.locator("//input[@id='submit']").dispatchEvent('click')
           await page.waitForTimeout(2000)

           //MouseHover--------------------
           await page.goto("https://demoapps.qspiders.com/ui/mouseHover?sublist=0")
           await page.locator("//img[@class='w-5 h-5 mt-5 ml-3 cursor-pointer ']").hover()
           await page.waitForTimeout(2000)
           await page.mouse.move(100,300)            ///move based on location
           await page.waitForTimeout(2000)

           
    })