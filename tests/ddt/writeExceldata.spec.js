import {test  } from "@playwright/test";
import excel from "exceljs";
import path from "path"
test("write data into excel",async({page})=>
    {
        let book =new excel.Workbook()
        await book.xlsx.readFile(path.join(__dirname,"../../testData/excelData.xlsx"))
         let sheet=book.getWorksheet("Sheet5")
         if(!sheet)
         {
            sheet=book.addWorksheet("Sheet5")
         }
         sheet.getRow(1).getCell(1).value="hello"
         await book.xlsx.writeFile(path.join(__dirname,"../../testData/excelData.xlsx"))
    })