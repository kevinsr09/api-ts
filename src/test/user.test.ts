import { AppRouter } from '../presentation/routes'
import supertest from 'supertest'
import express from 'express'
// eslint-disable-next-line @typescript-eslint/no-floating-promises

const app = express()
app.use(AppRouter.routes)
const api = supertest(app)

describe('test /api/v1/users', () => {
  test('post user', async () => {
    const result = await api.post('/api/v1/users').set('Content-type', 'application/json').send({
      userName: 'kevinstiven',
      email: 'kevinrugeles200@gmail.com',
      role: ['TECNICO', 'USER'],
      password: '12345623'
    })
    console.log(result.body)
    expect(result.status).toBe(201)
    expect(result.body).toBe({ userName: 'kevin' })
  })
})
// test.describe('/api/v1/users', () => {
//   test('test', () => {
//     api
//       .post('/api/v1/users')
//       .send({ username: 'kevin' })
//       .set('Accept', 'application/json')
//       .expect('Content-Type', /aplication\/json/)
//       .expect(201)
//   })
// })
