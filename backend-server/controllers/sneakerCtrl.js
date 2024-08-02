const Sneaker = require('../models/sneakerModel');

const getAllSneakers = async (req, res) => {
  try {
    const sneakers = await Sneaker.find({});
    res.json(sneakers);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const getSneakerById = async (req, res) => {
  try {
    const sneaker = await Sneaker.findById(req.params.id);
    if (sneaker) {
      res.json(sneaker);
    } else {
      res.status(404).json({ message: 'Sneaker not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getAllSneakers,
  getSneakerById,
};
