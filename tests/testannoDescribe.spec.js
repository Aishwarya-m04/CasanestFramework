import {test} from "@playwright/test";
test.describe("login", async()=>
{
    test("valid cred",async()=>{console.log("test2");
    })
    test("invalid cred",async()=>{
        test.setTimeout(3000)
        console.log("test3");

    })   
});


