import request from 'supertest'
import { app } from '../app'

describe('Test /coffeelover API endpoint request', () => {
    it('Should return correct object', async () => {
        const res = await request(app)
            .get('/coffee')
            .query({ coffeeName: 'Latte' })
        expect(res.statusCode).toEqual(200)
        expect(res.body).toEqual({
            drinkType: 'Coffee',
            name: 'Latte',
        })
    })

    it('Should return a valid latte coffee object with no params', async () => {
        const res = await request(app).get('/coffee')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toEqual({
            drinkType: 'Coffee',
            name: 'Latte',
        })
    })
    it('Should return a valid macchiato coffee object', async () => {
        const res = await request(app)
            .get('/coffee')
            .query({ coffeeName: 'Macchiato' })
        expect(res.statusCode).toEqual(200)
        expect(res.body).toEqual({
            drinkType: 'Coffee',
            name: 'Macchiato',
        })
    })
})
