
const { test, expect } = require("@playwright/test") // enables smart suggestion 

test("01_verify the funcationalty of dynmaic dropdowns", async ({ browser }) => {
    const Context = await browser.newContext()
    const page = await Context.newPage()

//visit the page 
await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
//type in input box 
await page.locator('[class="block large-row-spacer"] #autocomplete').fill("ind")
// wait for the list 
await page.waitForSelector('[id="ui-id-1"]')
//
let listnames = await page.locator('[id="ui-id-1"] div').count()
console.log(listnames)

for(let i=0;i<listnames;i++){
    let text = await page.locator('[id="ui-id-1"] div').nth(i).textContent()
    console.log(text)
    if(text==="India"){
        await page.locator('[id="ui-id-1"] div').nth(i).click()
        break
    }
}

// verify 
await page.waitForTimeout(3000)

                              //india                                          ---> india
await expect(page.locator('[class="block large-row-spacer"] #autocomplete')).toHaveValue("India")
//asseration








})
