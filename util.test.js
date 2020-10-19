const { generateText, checkAndGenerate } = require('./util')

test('doit retourner un nom et un age', ()=>{
  const text = generateText('Romain', 33)
  expect(text).toBe('Romain (33 years old)')
})

test('doit generer un text valide', ()=>{
  const text = checkAndGenerate('Max', 29)
  expect(text).toBe('Max (29 years old)')
})