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

    

    test('Sikeresen frissít egy márkát (200 OK)', async () => {
        const response = await request(app)
            .patch(`markak/${testMarka._id}`) // ezt javitani majd

        expect(response.statusCode).toBe(204);
    });

    // test('404 ha nem létező ID-t adunk meg', async () => {
    //     const fakeId = new mongoose.Types.ObjectId();

    //     const response = await request(app)
    //         .delete(`/api/markak/${fakeId}`);

    //     expect(response.statusCode).toBe(400); 
    // });

});