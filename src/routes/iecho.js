const express = require('express')
const app = express.Router()

const isPalindrome = (str) => {
  const re = /[\W_]/g
  const lowerRegStr = str.toLowerCase().replace(re, '')
  const reverseStr = lowerRegStr.split('').reverse().join('')
  return reverseStr === lowerRegStr
}

app.get('/iecho', (req, res, next) => {
  const text = req.query.text
  if (!text) return res.status(400).send({ text: 'no text' })
  res.status(200).json({
    text: text.split('').reverse().join(''),
    palindrome: isPalindrome(text)
  })
})

module.exports = app
