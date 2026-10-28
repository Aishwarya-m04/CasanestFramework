import { test } from "@playwright/test";
import excel from "exceljs";
import path from "path";
test("read single data",async({page})=>
    {
        let book=new excel.Workbook()
        await book.xlsx.readFile(path.join(__dirname,"../../testData/excelData.xlsx"))
        let sheet=await book.getWorksheet("Sheet1")
       let data= await sheet.getRow(1).getCell(1).toString()
        console.log(data);
        
    })
    test("read multiple data",async({page})=>
        {
            let book=new excel.Workbook()
            await book.xlsx.readFile(path.join(__dirname,"../../testData/excelData.xlsx"))
            let sheet=await book.getWorksheet("Sheet2")
            for(let c=1;c<=sheet.actualColumnCount;c++){
                for(let r=1;r<=sheet.actualRowCount;r++){
                    let data=sheet.getRow(r).getCell(c).toString()
                    console.log(data);
                    
                }
                }
        })
        test.only("pass data to app",async({page, context})=>
            {
                let book=new excel.Workbook()
                await book.xlsx.readFile(path.join(__dirname,"../../testData/excelData.xlsx"))
                let sheet=book.getWorksheet("Sheet1")
                let alldata=[]      //crate an empty array to store  each set of data(can pass objects)

                for(let r=1;r<=sheet.actualRowCount;r++){
                    let row=sheet.getRow(r)
                    let url=row.getCell(1).toString()
                    let usn=row.getCell(2).toString()
                    let pwd=row.getCell(3).toString()
                    alldata.push({url:url,usn:usn,pwd:pwd})  

                }
                console.log(await alldata);
                for(let d of alldata)
                {
                await page.goto(d.url)
                await page.waitForTimeout(2000)
                await page.locator("//input[@name='user_name']").fill(d.usn)
                await page.locator("//input[@name='user_password']").fill(d.pwd)
                await page.locator("#submitButton").click()
                    await context.clearCookies()
               
                }
                
                
            }) 