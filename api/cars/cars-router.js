const express = require('express');
const db = require('../../data/dbConfig');
const router = express.Router();


router.get('/', (req, res) => {
    db('cars')
    .then(cars => {
        res.status(200).json(cars);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to retrieve Cars' })
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    db('cars').where({ id }).first()
    .then(car => {
        if(!car) {
            res.status(404).json({ message: `The Car with id ${id} not found.` })
        } else {
            res.status(200).json(car);
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to '})
    });
});

router.post('/', (req, res) => {
    const body = req.body;
    db('cars').insert(body)
    .then(id => {
        return db('cars').where({ id: id[0] })
    })
    .then(newCar => {
        res.status(201).json(newCar);
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to store data.'})
    });
});

module.exports = router;