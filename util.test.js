const { generateText } = require('./util')

test('doit retourner un nom et un age', ()=>{
  const text = generateText('Romain', 33)
  expect(text).toBe('Romain (33 years old)')
})