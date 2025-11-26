const Marka = require('../Models/model')

exports.getMobilok = async (req, res, next) => {

}

exports.createMarka = async (req, res, next) => {
    try {
        const marka = await Marka.create(req.body);
        res.status(201).json({ success: true, data: marka });
    } catch (error) {
        res.status(400).json({ success: false, msg: error.message });
    }
}

exports.getAllMarka = async (req, res, next) => {
    try {
        const markas = await Marka.find();
        res.status(200).json({ success: true, data: markas });
    } catch (error) {
        res.status(500).json({ success: false, msg: error.message });
    }
}

exports.getMarka = async (req, res, next) => {
    try {
        const marka = await Marka.findById(req.params.id);
        if (!marka) {
            return res.status(400).json({ success: false, msg: 'Not found' });
        }
        res.status(200).json({ success: true, data: marka });
    } catch (error) {
        res.status(400).json({ success: false });
    }
};