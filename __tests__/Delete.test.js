const request = require('supertest');
const app = require('../server');
const Marka = require('../Models/model');
const mongoose = require('mongoose');

describe('DELETE /api/markak/:id – 5 teszt', () => {

    let testMarka;

    beforeEach(async () => {
        await Marka.deleteMany({});
        testMarka = await Marka.create({
            marka_id: 10,
            marka_nev: 'TesztMarka',
            orszag: 'Tesztország',
            alapitas_ev: 1999
        });
    });

    test('1. Sikeres törlés–200 OK', async () => {
        const res = await request(app).delete(`/api/markak/${testMarka._id}`);
        expect(res.statusCode).toBe(200);
    });

    test('2. Válasz tartalmazza a "deleted" szót', async () => {
        const res = await request(app).delete(`/api/markak/${testMarka._id}`);
        expect(res.text).toContain('deleted');
    });

    test('3. Az adat tényleg törlődik az adatbázisból', async () => {
        await request(app).delete(`/api/markak/${testMarka._id}`);
        const deleted = await Marka.findById(testMarka._id);
        expect(deleted).toBeNull();
    });

    test('4. Nem létező ID → 404 hiba', async () => {
        const fakeId = new mongoose.Types.ObjectId();
        const res = await request(app).delete(`/api/markak/${fakeId}`);
        expect(res.statusCode).toBe(404);
    });

    test('5. Hibás ID formátum → 400', async () => {
        const res = await request(app).delete('/api/markak/rossz_id');
        expect(res.statusCode).toBe(400);
    });

});
