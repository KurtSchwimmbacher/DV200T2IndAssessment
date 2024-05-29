const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 7000;

// Use CORS middleware
app.use(cors());

app.use(express.json());    

app.use(express.static('images'))

app.get('/',(req,res) => {
    res.send('Hello World');
});



// connect to mongo
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> console.log('MongoDB Connected'))
.catch(err => console.log(err));



// user routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users',userRoutes);

// Plant routes
const plantRoutes = require('./routes/plantRoutes');
app.use('/api/plants', plantRoutes);



app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});
