const mongoose = require('mongoose')
const errorHandler = require('../middlewares/err/errorHandler')

const dbConnect = errorHandler (async () => {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'BarhoPakistan'
    });
    console.log('Database connected'); // TODO: Remove it in production
});

module.exports = dbConnect