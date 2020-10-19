const { generateText, checkAndGenerate } = require('./util')
const puppeteer = require('puppeteer')

test('doit retourner un nom et un age', ()=>{
  const text = generateText('Romain', 33)
  expect(text).toBe('Romain (33 years old)')
})

test('doit generer un text valide', ()=>{
  const text = checkAndGenerate('Max', 29)
  expect(text).toBe('Max (29 years old)')
})

test('Doit créer un element avec le nom et la classe correspondantes', async ()=>{
  const browser = await puppeteer.launch({
    headless: false,
    // slowMo: 80,
    // args: ['--window-size=1920,1080']
  })
  const page = await browser.newPage()
  await page.goto('file:///C:/Users/Gizmo/Documents/GitHub/js-testing-introduction/index.html')
  await page.click('input#name')
  await page.type('input#name', 'Anna')
  await page.click('input#age')
  await page.type('input#age', '29')
  await page.click('#btnAddUser')
  const finalText = await page.$eval('.user-item', el=>el.textContent)
  expect(finalText).toBe('Anna (29 years old)')
})