import { test } from "@playwright/test";
test("element waits",async({page})=>
    {
         await page.goto("https://www.amazon.com/")
            await page.locator("input#twotabsearchtextbox").fill("shoes")
            await page.locator("//div[@role='row']",{hasText:" for women"}).first().waitFor()
            let a=await page.locator("//div[@role='row']").allTextContents()
            console.log(a);
    })

    //wait for ElementState
    test("ele state wait",async({page})=>
    {
         await page.goto("https://www.amazon.com/")
            await page.locator("input#twotabsearchtextbox").waitFor({state:'visible'})    //visible wait
                page.locator("input#twotabsearchtextbox").fill("shoes")     
            await page.locator("//div[@role='row']",{hasText:" for women"}).first().waitFor()
            let a=await page.locator("//div[@role='row']").allTextContents()
            console.log(a);
    })

    //wait for Selector

    test("element waits selector",async({page})=>
    {
         await page.goto("https://www.amazon.com/")
            await page.waitForSelector("input#twotabsearchtextbox",{state:'visible'})
            page.locator("input#twotabsearchtextbox").fill("shoes") 
            await page.locator("//div[@role='row']",{hasText:" for women"}).first().waitFor()
            let autosugg=await page.locator("//div[@role='row']").allTextContents()
            console.log(autosugg);
    })
    
    //wait for event
    test.only("waitforEvent",async ({page}) => 
        {
           await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
           await page.fill('#writeArea',"downloading file")
          let [downloadFile]= await Promise.all([
          page.waitForEvent('download'),
            page.click("#downloadButton")
           ])
           console.log(await downloadFile.path());

        })
    