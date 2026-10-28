import { test } from "@playwright/test";
import fs from "fs"
let datafile=fs.readFileSync("testData/singlesdata.json")
let data=JSON.parse(datafile)

//to read single set of data

// test("get data from json",async({page})=>
//     {
//         data.forEach(d => {
//             console.log(d.greet);
            
//         });
//         //console.log(data.greet);
        
//     })

//real time example read data from json and login to app

    test("get data and launch",async({page})=>
        {
            await page.goto(data.url)
            await page.locator("input#username").fill(data.username)
            await page.locator("input#password").fill(data.password)
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
            
        })
        test.only("multiple set of data",async({page})=>
            {
               for (const testdata of data) {
                let url=testdata.url
                let u=testdata.username
                let p=testdata.password
                await page.goto(url)
                await page .locator("input#username").fill(u)
                await page.locator("input#password").fill(p)
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
            })
            