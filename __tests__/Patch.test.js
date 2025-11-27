const request = require('supertest');
const app = require('../server');
const Marka = require('../Models/model');
const mongoose = require('mongoose');

describe('PATCH /api/markak/:id', () => {

    let testMarka;

    beforeEach(async () => {
        await Marka.deleteMany({});

        testMarka = await Marka.create({
            marka_id: 999,
            marka_nev: 'TestMarka',
            orszag: 'Tesztország',
            alapitas_ev: 2000
        });
    });

    // Connection is handled by jest.mongo.js (mongodb-memory-server)

    test('Sikeresen frissít egy márkát (200 OK)', async () => {
        const updateData = { marka_nev: 'FrissítettMarka' };

        const response = await request(app)
            .patch(`/api/markak/${testMarka._id}`)
            .send(updateData)
            .set('Content-Type', 'application/json');

        expect(response.statusCode).toBe(200);
        expect(response.body.marka_nev).toBe('FrissítettMarka');
    });

    test('404 ha nem létező ID-t adunk meg', async () => {
        const fakeId = new mongoose.Types.ObjectId();

        const response = await request(app)
            .patch(`/api/markak/${fakeId}`)
            .send({ marka_nev: 'Valami' });

        expect(response.statusCode).toBe(404);
    });

    test('400 ha üres body-t küldünk', async () => {
        const response = await request(app)
            .patch(`/api/markak/${testMarka._id}`)
            .send({});

        expect(response.statusCode).toBe(400);
    });

    test('400 ha rossz típusú adatot küldünk', async () => {
        const response = await request(app)
            .patch(`/api/markak/${testMarka._id}`)
            .send({ alapitas_ev: 'nemSzám' });

        expect(response.statusCode).toBe(400);
    });

    test('400 ha invalid ObjectId formátumot adunk meg', async () => {
        const response = await request(app)
            .patch(`/api/markak/123invalidId`)
            .send({ marka_nev: 'Valami' });

        expect(response.statusCode).toBe(400);
    });

});