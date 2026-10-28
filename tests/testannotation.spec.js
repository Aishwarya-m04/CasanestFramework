import {test} from "@playwright/test"
test("test annotations",async({page})=>{console.log("test1");
})
//expected test will fail..if test passed we get error:: Expected to fail, but passed.
test.fail("test annotations1",async({page})=>{console.log("test2");
})
//skip
test.skip("test annotations2",async({page})=>{console.log("test3");
})
//conditional skip
test("test annotations3",async({browserName})=>{
    test.skip(browserName==="chromium")
    console.log("test4");
})
//test.oly to execute only that script and ignore all other
//    test.only("test annotations4",async({page})=>{console.log("test5");
//    })

//fixme==to skip test which has issue in execution
test.fixme("test annotations5",async({page})=>{console.log("test6");
})

//test.slow telling executer it will take some time to exexcute
test("test annotation6",async({page})=>{
    test.slow
    console.log("test7");
})
