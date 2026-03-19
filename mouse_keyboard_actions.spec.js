
const { test, expect } = require("@playwright/test")

/**
 * click
 * 
 * right click 
 * double click
 *  hover
 */

test("verify dynmaic click", async ({ browser }) => {
    let Context = await browser.newContext()
    let page = await Context.newPage()

    // visit 
    await page.goto('https://demoqa.com/buttons')
    //
    await page.locator('[class="mt-4"] [class="btn btn-primary"]').nth(1).click()
    // verify 
    await page.waitForSelector('[id="dynamicClickMessage"]')
    // 
    await page.waitForTimeout(2000)
    //asseration
    await expect(page.locator('[id="dynamicClickMessage"]')).toContainText("You have done a dynamic click")
    //.toContainText(" dynamic click") -- this will partically verify your text 
})

test('verify right click', async ({ page }) => {

    // visit 
    await page.goto('https://demoqa.com/buttons')
    //
    await page.locator('[id="rightClickBtn"]').click({ button: "right" })
    await page.waitForSelector('[id="rightClickMessage"]')
    //
    await page.waitForTimeout(2000)

    await expect(page.locator('[id="rightClickMessage"]')).toHaveText("You have done a right click")
    // this required the extact text


})

test('verify double click ', async ({ page }) => {
    // visit 
    await page.goto('https://demoqa.com/buttons')
    //
    await page.locator('[id="doubleClickBtn"]').dblclick()
    await page.waitForSelector('[id="doubleClickMessage"]')
    //s
    await page.waitForTimeout(2000)

    await expect(page.locator('[id="doubleClickMessage"]')).toHaveText("You have done a double click")
    // this required the extact text

})


//-------------------------------------
//keyboard action


test("verify keyboard actions ", async ({ page }) => {
    //visit the websote 
    await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html")
    await page.locator('[name="first_name"]').fill("siddhant")
    // select and copy the name a
    //select all crtl + a
    await page.keyboard.press("Control+A")
    //select all crtl + c
    await page.keyboard.press("Control+C")
    await page.keyboard.press("Tab")
    //paste 
    await page.keyboard.press("Control+V")
})
