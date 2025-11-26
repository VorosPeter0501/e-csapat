const request = require('supertest');
const app = require('../server');
const Marka = require('../Models/model');
const mongoose = require('mongoose');

describe('GET /api/markak – 5 teszt', () => {

    beforeEach(async () => {
        await Marka.deleteMany({});
        await Marka.create([
            { marka_id: 1, marka_nev: 'Apple', orszag: 'USA', alapitas_ev: 1976 },
            { marka_id: 2, marka_nev: 'Samsung', orszag: 'Dél-Korea', alapitas_ev: 1938 }
        ]);
    });

    test('1. Visszaad 200 OK státuszt', async () => {
        const res = await request(app).get('/api/markak');
        expect(res.statusCode).toBe(200);
    });

    test('2. Tömböt ad vissza', async () => {
        const res = await request(app).get('/api/markak');
        expect(Array.isArray(res.body)).toBe(true);
    });

    test('3. Legalább 1 elem legyen', async () => {
        const res = await request(app).get('/api/markak');
        expect(res.body.length).toBeGreaterThan(0);
    });

    test('4. Tartalmazza a marka_nev mezőt', async () => {
        const res = await request(app).get('/api/markak');
        expect(res.body[0]).toHaveProperty('marka_nev');
    });

    test('5. Pontosan 2 rekord van', async () => {
        const res = await request(app).get('/api/markak');
        expect(res.body.length).toBe(2);
    });

});

