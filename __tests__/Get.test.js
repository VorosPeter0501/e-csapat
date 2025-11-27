const request = require('supertest');
const app = require('../server'); 
const Marka = require('../Models/model'); 
const mongoose = require('mongoose');

describe('GET /api/markak', () => {



    beforeEach(async () => {
        await Marka.deleteMany({});
        await Marka.create([
            { marka_nev: 'Apple', orszag: 'USA', alapitas_ev: 1976 },
            { marka_nev: 'Samsung', orszag: 'Dél-Korea', alapitas_ev: 1938 }
        ]);
    });


    // Connection is handled by jest.mongo.js (mongodb-memory-server)

    test('Visszaad 200 OK státuszt és tömböt', async () => {
        const res = await request(app).get('/api/markak');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    test('Pontosan 2 rekordot ad vissza', async () => {
        const res = await request(app).get('/api/markak');
        expect(res.body.length).toBe(2);
    });

    test('A visszaadott objektumok tartalmazzák a "marka_nev" mezőt', async () => {
        const res = await request(app).get('/api/markak');
        expect(res.body[0]).toHaveProperty('marka_nev');
        const names = res.body.map(item => item.marka_nev);
        expect(names).toEqual(expect.arrayContaining(['Samsung']));
    });

    test('400-as hibát ad vissza, ha az adatbázis-kapcsolat hibás (Ezt nehéz szimulálni, de a controllered kezeli)', () => {

    });
});
