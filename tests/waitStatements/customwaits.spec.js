import { test } from "@playwright/test";
test("custom wait",async({page})=>
    {
            await page.goto("https://www.amazon.com/")
             await page.locator("input#twotabsearchtextbox").fill("HP laptop")     
            await page.waitForFunction(()=>{let ele=document.querySelectorAll('.s-suggestion-container')
                return ele.length>2
            })
            let allautosugg=await page.locator('//div[@class="s-suggestion-container"]').allTextContents()
            console.log(allautosugg);
            
            
    })