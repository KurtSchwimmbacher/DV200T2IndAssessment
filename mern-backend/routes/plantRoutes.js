const express = require('express');
const router = express.Router();
const Plant = require('../models/Plant');
const multer = require('multer');
const path = require('path');

// Multer configuration for handling file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'images/plant-images'); // Specify the destination folder
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)); // Unique file name
    }
});

const upload = multer({ storage: storage });

// Endpoint to get the latest 3 products
router.get('/latest', async (req, res) => {
    try {
        const latestPlants = await Plant.find().sort({ createdAt: -1 }).limit(3);
        res.json(latestPlants);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new plant
// upload.single('image') => image has to correspond to field being sent from frontend
router.post('/create', upload.single('image'), async (req, res) => {
    console.log(req.file)
    try {
        const { name, species, description, requirements, price } = req.body;
        const image = req.file.filename; // Get the uploaded file name
        
        const plant = new Plant({ name, species, image, description, requirements, price });
        await plant.save();
        res.status(201).json(plant);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get all plants
router.get('/', async (req, res) => {
    try {
        const plants = await Plant.find();
        res.status(200).json(plants);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get a plant by ID
router.get('/:id', async (req, res) => {
    try {
        const plant = await Plant.findById(req.params.id);
        if (!plant) {
            return res.status(404).send();
        }
        res.json(plant);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// to find one plant
router.post('/find' ,async (req,res) =>{
    const {name} = req.body;

    try {
        // find plant name
        const plant = await Plant.findOne({ name });
        if(!plant){
            return res.status(400).json({message: 'Invalid Name'});
        }

        res.status(200).json({message: 'Plant found successfully', plant});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

// Update a plant by ID
router.patch('/update/:id', upload.single('image'), async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'species', 'description', 'requirements', 'price'];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const plant = await Plant.findById(req.params.id);
        if (!plant) {
            return res.status(404).send();
        }

        updates.forEach(update => {
            plant[update] = req.body[update];
        });

        if (req.file) {
            plant.image = req.file.filename; // Update the image if a new file is uploaded
        }

        await plant.save();
        res.send(plant);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Delete a plant by ID
router.delete('/delete/:id', async (req, res) => {
    try {
        const plant = await Plant.findByIdAndDelete(req.params.id);
        if (!plant) {
            return res.status(404).send();
        }
        res.send(plant);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
