import { test,expect } from "@playwright/test";
test("multiple tabs",async({browser})=>
    {
        let context=await browser.newContext()
        let page=await context.newPage()
       await page.goto("https://www.flipkart.com/")
        await page.waitForTimeout(2000) 
        let page2 =await context.newPage()
        await page.waitForTimeout(2000) 
        await page2.goto("https://www.amazon.in/")
    })
    test("handling multiple tabs",async({browser})=>
        {
            let context=await browser.newContext()
            let page= await context.newPage()
           await page.goto("https://www.flipkart.com/search?q=shoes&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
          let [page2]= await Promise.all([
            page.waitForEvent('popup'),
            page.click("(//a[@class='CIaYa1'])[1]")
              
           ])
           console.log(await page2.url())
           await expect(page2.url()).not.toBe("https://www.flipkart.com/search?q=shoes&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
        })

        test("redBus handling tabs",async({browser})=>
            {
                
            let context=await browser.newContext()
            let page= await context.newPage()
            await page.goto("https://www.redbus.in/")
           let [page3] =await Promise.all([
                page.waitForEvent('popup'),
                page.click("//a[text()='Contact us']")
            ])
            await page3.click("//button[text()='Account']")
            })

            test("Handling multiple windows",async({browser})=>
                {
                 let context=await browser.newContext()
                   let page= await context.newPage() 
                   page.goto("https://demoapps.qspiders.com/ui/browser/multipleWindow?sublist=2")  
                  let [window2] =await Promise.all([
                    page.waitForEvent('popup'),
                    page.click("//button[text()='Shop Now']")              //shifting to new window
                   ])
                window2.click("//button[text()='Add to Cart']")
                let Title1=await page.title()
                await expect(window2.title()).not.toBe(Title1)

                })

