const mongoose = require('mongoose');
const dbConfig = 'mongodb+srv://user:aM3LQlMeM0AACHDx@cluster0.8x4oake.mongodb.net/annotations?retryWrites=true&w=majority';

mongoose.set('strictQuery', true);

const connection = mongoose.connect(dbConfig,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
});


module.exports = connection;