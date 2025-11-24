const request = require('supertest');
const app = require('../server');
const Marka = require('../Models/model');
const mongoose = require('mongoose');

describe('GET /api/markak', () => {

    beforeEach(async () => {
        await Marka.deleteMany({});
        await Marka.create([
            {
                marka_id: 1,
                marka_nev: 'Samsung',
                orszag: 'Dél-Korea',
                alapitas_ev: 1938
            },
            {
                marka_id: 2,
                marka_nev: 'Apple',
                orszag: 'USA',
                alapitas_ev: 1976
            }
        ]);
    });

    test('Sikeresen lekéri az összes márkát (200 OK)', async () => {
        const response = await request(app)
            .get('/api/markak');

        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBe(2);
        expect(response.body[0]).toHaveProperty('marka_nev');
    });

});
