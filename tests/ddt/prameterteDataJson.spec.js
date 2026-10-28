import { test } from "@playwright/test";
import data from "../../testData/prameteriseddata.json"    //no need to parse to javascript object
test("parameterised",async({page})=>
    {
       for(let key in data){
        console.log(key);
        for (const d of data[key]) {
            await page.goto(d.url)
            await page.locator("input#username").fill(d.username)
            await page.locator("input#password").fill(d.password)
            await page.getByRole("button",{name:"Submit"}).click()
            let title=await page.title()
            console.log(title);
            if(title=="Logged In Successfully | Practice Test Automation")
            {
                console.log("valid credentials");
                
            }
            else{
                console.log("invalid credentials");
                
            }
            
        }
        
       }
    })