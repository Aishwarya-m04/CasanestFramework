import {firefox, test} from "@playwright/test";
test("BrowserMethods",async({page})=>
    {

        await page.goto("https://www.google.com/")
        await page.setViewportSize({width:1000,height:5000})
        const size= page.viewportSize()
        console.log(size);
        const title=await page.title()
        console.log(title);
        const url=await page.url()
        console.log(url);  
        
    })
    //context.cookies
    test("BrowserControl",async({browser})=>
        {
            let context=await browser.newContext()
            let page=await context.newPage()
            console.log(await context.cookies);
            await page.goto("https://www.google.com/")
            console.log(await context.cookies());   

        })
        // firefox.launch()
        test("firefox Browser",async()=>
            {
                const browser=await firefox.launch();
               let context= await browser.newContext()
               let page=await context.newPage()
               await page.goto("https://www.google.com/")

            })
            //screenshot
           test("screenshot",async({page})=>
            {
                await page.goto("https://www.google.com/")
                let time=new Date().getTime()
                await page.screenshot({path:`Screenshot/page-${time}.png`})
            }) 