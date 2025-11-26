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

exports.patchMarka = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid ID' });
    }


    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: 'üres adat' });
    }

    const result = await Model.findByIdAndUpdate(id, req.body, { new: true });

    if (!result) {
      return res.status(404).json({ message: 'Márka nem található' });
    }

    res.status(200).json(result);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteMarka = async (req, res, next) => {
     try {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid ID format' });
    }

    const markak = await Model.findByIdAndDelete(id);

    if (!markak) {
      return res.status(404).json({ message: 'Document not found' });
    }

    res.status(200).json({ message: 'Deleted', deleted: markak });

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};