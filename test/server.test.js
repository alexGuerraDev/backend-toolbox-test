const request = require('supertest')
const server = require('../server')
const faker = require('faker')
const chai = require('chai')
const expect = chai.expect

describe('GET /iecho', () => {
  it('Is not palindrome', async () => {
    const word = faker.random.arrayElement([
      'string',
      'backend',
      'toolbox',
      'test',
      'palindrome',
      'mongodb',
      'nodeJs'
    ])
    const wordReverse = {
      string: 'gnirtg',
      backend: 'dnekcab',
      toolbox: 'xobloot',
      test: 'tset',
      palindrome: 'emordnilap',
      mongodb: 'bdognom',
      nodeJs: 'sJedon'
    }
    const response = await request(server).get(`/iecho?text=${word}`)
    expect(response.status).to.equal(200)
    expect(response.body).to.eql({
      text: wordReverse[word],
      palindrome: false
    })
  })
  it('Is palindrome', async () => {
    const word = faker.random.arrayElement([
      'ana',
      'oso',
      'civic',
      'repaper',
      'dad',
      'radar'
    ])
    const response = await request(server).get(`/iecho?text=${word}`)
    expect(response.body).to.eql({
      text: word,
      palindrome: true
    })
    expect(response.status).to.equal(200)
  })
    it('Should return bad request error', async () => {
    const word = faker.random.word()
    const response = await request(server).get(`/iecho?fail=${word}`)
    
    expect(response.status).to.equal(400)
    expect(response.body).to.eql({
      text: 'no text'
    })
  })
})
